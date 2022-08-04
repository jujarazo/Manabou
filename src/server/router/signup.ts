import { authSchema } from "../../commons/validations/auth";
import * as trpc from "@trpc/server";
import { createRouter } from "./context";
import { hash } from "argon2";

export const signupRouter = createRouter()
    .mutation("sign-up", {
        input: authSchema,
        resolve: async ({ input, ctx }) => {
            const { email, password } = input;

            const exists = await ctx.prisma.user.findFirst({
                where: { email }
            });

            if (exists) {
                throw new trpc.TRPCError({
                    code: "CONFLICT",
                    message: "A user already exists with that email"
                });
            }

            const hashedPassword = await hash(password);

            const result = await ctx.prisma.user.create({
                data: { email, password: hashedPassword }
            })

            return {
                status: 201,
                message: "User created successfully.",
                result: result.email
            };
        },
    });
