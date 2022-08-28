import { ReactNode } from 'react';

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="container mx-auto flex flex-col items-center h-screen p-4">
      {children}
    </main>
  );
};
