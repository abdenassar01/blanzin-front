import { ProfilePicker, ProfileSidebar } from '@/components';
import { LayoutProps } from '@/types';
import React from 'react';

type Props = LayoutProps;

export default function ProfileDashboardLayout({ children }: Props) {
  return (
    <div className='min-h-[50vw] bg-background py-12 dark:bg-backgroundSecondaryDark'>
      <div className='container '>
        <div className='mb-6'>
          <ProfilePicker />
        </div>
        <div className='flex sm:flex-col'>
          <div className='w-[19.444vw] sm:w-[100%]'>
            <ProfileSidebar />
          </div>
          <div className='w-full overflow-hidden'>{children}</div>
        </div>
      </div>
    </div>
  );
}
