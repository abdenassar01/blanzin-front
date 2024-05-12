import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return (
    <div className="min-h-[90vh] bg-[url('/auth-bg.png')] bg-cover bg-no-repeat p-6 sm:p-2">
      <div className='w-[40%] max-w-[600px]  rounded-xl bg-background p-6 opacity-90 dark:bg-backgroundDark sm:w-full sm:p-4'>
        {children}
      </div>
    </div>
  );
}
