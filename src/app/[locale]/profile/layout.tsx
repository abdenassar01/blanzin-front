import { ActiveLink } from '@/components/common/active-link/active-link';
import { LayoutProps } from '@/types';
import { getScopedI18n } from '@/utils/locales/server';
import React from 'react';

export default async function ProfileDashboardLayout({
  children,
}: LayoutProps) {
  const t = await getScopedI18n('profile');

  const pages = [
    {
      id: 1,
      link: '/profile/account',
      label: t('account'),
    },
    {
      id: 2,
      link: '/profile/favourites',
      label: t('favourites'),
    },
    {
      id: 3,
      link: '/profile/jobs',
      label: t('jobs'),
    },
    {
      id: 4,
      link: '/profile/inbox',
      label: t('inbox'),
    },
    {
      id: 5,
      link: '/profile/docs',
      label: t('docs'),
    },
  ];

  return (
    <div className='min-h-[50vw] bg-background py-12 dark:bg-backgroundSecondaryDark'>
      <div className='container flex sm:flex-col'>
        <div className='w-[19.444vw] sm:w-[100%]'>
          <ul className='sm:no-scrollbar mt-[30px] w-full sm:mx-3 sm:flex sm:gap-[24px] sm:overflow-y-scroll'>
            {pages.map((page) => (
              <li key={page.id} className=' text-cardText w-full text-base'>
                <ActiveLink
                  disableHover
                  link={page.link}
                  className='rounded-s-2 relative block h-full w-full whitespace-nowrap p-2 dark:bg-backgroundSecondaryDark sm:rounded-t-lg sm:bg-background sm:px-[24px] sm:py-[20px] sm:text-mb-base'
                  activeClassName='prose-em:block bg-backgroundSecondary dark:bg-backgroundSecondaryDark board-link-active dark:bg-backgroundDark !text-main border-l-[12px] border-blue-500 font-normal sm:border-l-0 sm:border-t-[4px]'
                >
                  <em className='absolute -top-6 right-0 hidden h-6 w-6 bg-backgroundSecondary dark:bg-backgroundDark dark:after:!bg-backgroundSecondaryDark sm:hidden' />
                  <div className='flex'>{page.label}</div>
                  <em className='absolute -bottom-6 right-0 hidden h-6 w-6 bg-backgroundSecondary dark:z-50 dark:bg-backgroundDark dark:after:!bg-backgroundSecondaryDark sm:hidden' />
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
