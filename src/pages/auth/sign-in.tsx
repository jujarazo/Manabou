import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { IAuth } from '../../commons/validations/auth';
import { AuthLayout } from '../../layout/AuthLayout';

export default function SignIn() {
  const onLogin = async (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    const data: IAuth = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    console.log(data);
    await signIn('credentials', { ...data, callbackUrl: '/' });
  };

  return (
    <AuthLayout>
      <h2 className="mt-2 text-center text-xl font-extrabold text-gray-900">
        Sign In
      </h2>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="px-4 py-8 sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={onLogin}>
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
                  autoComplete="email"
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
                  autoComplete="current-password"
                  required
                  className="block w-full appearance-none rounded-md border border-salmon px-3 py-2 shadow-sm placeholder:text-gray-400 focus:ring-salmon focus:ring-2 focus:outline-none sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded-xl border-gray-300 accent-salmon focus:ring-salmon focus:ring-2 focus:ring-offset-2"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link href={`/auth/forgot-password`}>
                  <a className="font-medium text-salmon hover:text-salmon">
                    Forgot your password?
                  </a>
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-salmon px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-salmon focus:outline-none focus:ring-2 focus:ring-salmon focus:ring-offset-2"
              >
                Sign In
              </button>
            </div>
            <div className="flex text-center">
              <Link href="/auth/sign-up">
                <a className="w-full text-salmon font-semibold">Register</a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
}
