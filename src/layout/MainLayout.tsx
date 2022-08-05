import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { Loader } from '../components/commons/Loader';

export const MainLayout = ({ children }: { children: ReactNode }) => {
  const { data, status } = useSession();
  const router = useRouter();
  const isLoginRoute = router.pathname.includes('auth');
  console.log(status, data);

  if (status === 'loading') {
    return (
      <div className="h-screen">
        <Loader />;
      </div>
    );
  }

  // if (status === 'unauthenticated' && !isLoginRoute) {
  //   router.push('/auth/sign-in');
  // }

  return <div>{children}</div>;
};
