import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { authSchema, IAuth } from '../../commons/validations/auth';
import { AuthLayout } from '../../layout/AuthLayout';
import { zodResolver } from '@hookform/resolvers/zod';
import { trpc } from '../../utils/trpc';
import { useCallback } from 'react';

export default function SignUp() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<IAuth>({
    resolver: zodResolver(authSchema)
  });

  const { mutateAsync } = trpc.useMutation(["signupsign-up"]);

  const onSubmit = useCallback(
    async (data: IAuth) => {
      const result = await mutateAsync(data);
      if (result.status === 201) {
        router.push("/auth/sign-in");
      }
    }, [mutateAsync, router]);

  return (
    <AuthLayout>
      <>
        <h2 className="mt-2 text-center text-xl font-extrabold text-gray-900">
          Sign Up
        </h2>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="px-4 py-5 sm:rounded-lg sm:px-10">
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="block w-full appearance-none rounded-md border border-salmon px-3 py-2 shadow-sm placeholder:text-gray-400 focus:ring-salmon focus:ring-2 focus:outline-none sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="block w-full appearance-none rounded-md border border-salmon px-3 py-2 shadow-sm placeholder:text-gray-400 focus:ring-salmon focus:ring-2 focus:outline-none sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <div className="mt-1">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="confirmPassword"
                    required
                    className="block w-full appearance-none rounded-md border border-salmon px-3 py-2 shadow-sm placeholder:text-gray-400 focus:ring-salmon focus:ring-2 focus:outline-none sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-salmon px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-salmon focus:outline-none focus:ring-2 focus:ring-salmon focus:ring-offset-2"
                >
                  Register
                </button>
              </div>
              <div className="flex text-center">
                <Link href="/auth/sign-in">
                  <a className="w-full text-salmon font-semibold">
                    Already have an account?
                  </a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </>
    </AuthLayout>
  );
}
