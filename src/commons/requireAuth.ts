import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { unstable_getServerSession as getServerSession} from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";

export const requireAuth = (func: GetServerSideProps) => async (ctx: GetServerSidePropsContext) => {
    const session = await getServerSession(ctx.req, ctx.res, authOptions);

    if (!session) {
        return {
            redirect: {
                destination: "/auth/sign-in",
                permanent: false,
            }
        }
    }

    return await func(ctx);
}