import Image from 'next/image';
import Link from 'next/link';

export default function MainNav() {
  return (
    <nav className="bg-black px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-600">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/">
          <a className="flex items-center">
            <div className="h-6 w-6 sm:h-9 sm:w-9 relative">
              <Image
                src="/images/Logo_V0.png"
                alt="The Logo"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white ml-2">
              Manabou
            </span>
          </a>
        </Link>
        <div className="flex md:order-2">
          <button
            type="button"
            className="text-white bg-purple hidden hover:bg-opacity-60 focus:ring-2 focus:outline-none focus:ring-purple focus:ring-offset-4 focus:ring-offset-black font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 md:block"
          >
            Get started
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 rounded-lg border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-white bg-light-purple-700 rounded md:bg-transparent md:text-bg-light-purple-700 md:p-0 dark:text-white"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <Link href="/#">
                <a className="text-gray-400 rounded hover:text-gray-200 ">
                  Account
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
