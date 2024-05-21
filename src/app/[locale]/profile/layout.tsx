import { ActiveLink } from '@/components/common/active-link/active-link';
import { LayoutProps } from '@/types';
import React from 'react';

export default function ProfileDashboardLayout({ children }: LayoutProps) {
  const pages = [
    {
      id: 1,
      link: '/profile/account',
      label: 'Account',
    },
    {
      id: 2,
      link: '/profile/favourites',
      label: 'Favourites',
    },
    {
      id: 3,
      link: '/admin/orders',
      label: 'Orders',
    },
    {
      id: 4,
      link: '/admin/users',
      label: 'Manage users',
    },
    {
      id: 6,
      link: '/admin/security',
      label: 'Update password',
    },
  ];

  return (
    <div className='min-h-[50vw] bg-background py-12 dark:bg-backgroundSecondaryDark'>
      <div className='container flex sm:flex-col'>
        <div className='w-[19.444vw] sm:w-[100%]'>
          <ul className='sm:no-scrollbar mt-[30px] w-full sm:flex sm:gap-[24px] sm:overflow-y-scroll'>
            {pages.map((page) => (
              <li key={page.id} className='text-cardText w-full text-base'>
                <ActiveLink
                  disableHover
                  link={page.link}
                  className='relative block h-full w-full whitespace-nowrap rounded-s-[8px] p-[1vw] dark:bg-backgroundSecondaryDark sm:bg-background sm:px-[24px] sm:py-[20px] sm:text-mb-base'
                  activeClassName='prose-em:block bg-backgroundSecondary dark:bg-backgroundSecondaryDark board-link-active dark:bg-backgroundDark !text-main border-l-[12px] border-blue-500 font-normal sm:border-l-0 sm:border-b-[4px]'
                >
                  <em className='absolute -top-6 right-0 hidden h-6 w-6 bg-backgroundSecondary dark:bg-backgroundDark dark:after:!bg-backgroundSecondaryDark' />
                  <div className='flex'>{page.label}</div>
                  <em className='absolute -bottom-6 right-0 hidden h-6 w-6 bg-backgroundSecondary dark:z-50 dark:bg-backgroundDark dark:after:!bg-backgroundSecondaryDark' />
                </ActiveLink>
              </li>
            ))}
          </ul>
        </div>
        <div className='w-full overflow-hidden'>{children}</div>
      </div>
    </div>
  );
}
