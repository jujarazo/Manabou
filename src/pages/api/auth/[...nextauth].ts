import NextAuth, { type NextAuthOptions } from "next-auth";

// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../server/db/client";
import Credentials from "next-auth/providers/credentials";
import { authSchema } from "../../../commons/validations/auth";
import { verify } from "argon2";

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }

      return token
    },
    session: async ({ session, token }) => {
      if (token) {
        session.id = token.id;
      }

      return session;
    }
  },
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "jdoe@gmail.com",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      authorize: async (credentials, request) => {
        const creds = await authSchema.parseAsync(credentials);

        const user = await prisma.user.findFirst({
          where: { email: creds.email }
        });

        if (!user) return null;

        const isValidPass = await verify(user.password, creds.password);

        if (!isValidPass) return null;

        return {
          id: user.id,
          email: user.email,
        };
      },
    }),
  ],
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    maxAge: 15 * 24 * 30 * 60 * 2 // 30 days
  },
  pages: {
    signIn: "/",
    newUser: "auth/sign-up"
  },
};

export default NextAuth(authOptions);
