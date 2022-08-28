import { ReactNode } from 'react';
import MainNav from '../components/commons/MainNav';

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="container mx-auto flex flex-col items-center h-screen p-4">
      <MainNav />
      <div className="mt-10">{children}</div>
    </main>
  );
};
