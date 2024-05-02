import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return (
    <div className="bg-[url('/auth-bg.png')] bg-cover bg-no-repeat p-6">
      <div className='w-[40%] rounded-xl bg-background p-6 dark:bg-backgroundDark'>
        {children}
      </div>
    </div>
  );
}
