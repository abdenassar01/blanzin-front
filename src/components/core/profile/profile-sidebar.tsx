'use client';

import { ActiveLink } from '@/components/common/active-link/active-link';
import { useScopedI18n } from '@/utils/locales/client';
import { useSearchParams } from 'next/navigation';
import React from 'react';

type Props = {};

export function ProfileSidebar({}: Props) {
  const t = useScopedI18n('profile');

  const searchParams = useSearchParams();
  const role = searchParams.get('role');

  const pages = [
    {
      id: 1,
      link: '/profile/account',
      label: t('account'),
      roles: ['trainee', 'employee', 'customer', 'expert'],
    },
    {
      id: 2,
      link: '/profile/favourites',
      label: t('favourites'),
      roles: ['expert'],
    },
    {
      id: 3,
      link: '/profile/jobs',
      label: t('jobs'),
      roles: ['trainee', 'employee'],
    },
    {
      id: 4,
      link: '/profile/inbox',
      label: t('inbox'),
      roles: ['trainee', 'employee'],
    },
    {
      id: 5,
      link: '/profile/docs',
      label: t('docs'),
      roles: ['trainee', 'employee'],
    },
    {
      id: 6,
      link: '/profile/new',
      label: t('new-profile'),
      roles: ['trainee', 'employee', 'customer', 'expert'],
    },
  ];

  return (
    <ul className='sm:no-scrollbar mt-[30px] w-full sm:mx-3 sm:flex sm:gap-[24px] sm:overflow-y-scroll'>
      {pages.map(
        (page) =>
          page.roles.includes(role || '') && (
            <li key={page.id} className=' text-cardText w-full text-base'>
              <ActiveLink
                disableHover
                link={page.link}
                suffix={'?role=' + role}
                className='relative block h-full w-full whitespace-nowrap rounded-l-lg p-3 dark:bg-backgroundSecondaryDark sm:rounded-t-lg sm:bg-background sm:px-6 sm:py-5 sm:text-mb-base'
                activeClassName='prose-em:block bg-backgroundSecondary dark:bg-backgroundSecondaryDark board-link-active dark:bg-backgroundDark !text-main border-blue-500 border-l-4 font-normal  sm:border-l-0 sm:border-t-1'
              >
                <em className='absolute -top-6 right-0 hidden h-6 w-6 bg-backgroundSecondary dark:bg-backgroundDark dark:after:!bg-backgroundSecondaryDark sm:hidden' />
                <div className='flex'>{page.label}</div>
                <em className='absolute -bottom-6 right-0 hidden h-6 w-6 bg-backgroundSecondary dark:z-50 dark:bg-backgroundDark dark:after:!bg-backgroundSecondaryDark sm:hidden' />
              </ActiveLink>
            </li>
          )
      )}
    </ul>
  );
}
