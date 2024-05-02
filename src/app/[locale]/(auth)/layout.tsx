import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return (
    <div className="bg-[url('/auth-bg.png')] bg-cover bg-no-repeat p-6 sm:p-2">
      <div className='min-h-[50vh] w-[40%] rounded-xl bg-background p-6 opacity-90 sm:w-full sm:p-4 dark:bg-backgroundDark'>
        {children}
      </div>
    </div>
  );
}
