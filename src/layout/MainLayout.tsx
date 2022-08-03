import { useSession } from 'next-auth/react';
import { ReactNode } from 'react';
import { Loader } from '../components/commons/Loader';

export const MainLayout = ({ children }: { children: ReactNode }) => {
  const { data, status } = useSession();
  console.log(status);
  if (status === 'loading') {
    return (
      <div className="h-screen">
        <Loader />;
      </div>
    );
  }
  return <div>{children}</div>;
};
