import Image from 'next/image';
import { ReactNode } from 'react';

export const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen flex flex-col justify-end sm:flex-row-reverse">
      <div className="flex justify-center mb-20 sm:w-full sm:items-center">
        <Image
          src="/images/Logo_V0.png"
          width={228}
          height={235}
          alt="The Logo"
        />
      </div>
      <div className="bg-white rounded-t-3xl h-1/2 p-6 w-full sm:rounded-none sm:w-1/2 sm:h-full sm:flex sm:items-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">{children}</div>
      </div>
    </div>
  );
};
