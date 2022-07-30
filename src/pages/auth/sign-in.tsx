import Link from 'next/link';

export default function SignIn() {
  return (
    <div className="h-screen">
      <div className="bg-white rounded-t-3xl mt-96 h-full p-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-xl font-extrabold text-gray-900">
            Sign In
          </h2>
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <div className="px-4 py-8 sm:rounded-lg sm:px-10">
              <form className="space-y-6">
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
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm placeholder:text-gray-400 focus:border-salmon focus:outline-none focus:ring-salmon sm:text-sm"
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
                      className="block w-full appearance-none rounded-md border border-salmon px-3 py-2 shadow-sm placeholder:text-gray-400 focus:border-salmon focus:outline-none focus:ring-salmon sm:text-sm"
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
                    Iniciar Sesión
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
