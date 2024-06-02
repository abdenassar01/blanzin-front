'use client';

import { ActiveLink } from '@/components/common/active-link/active-link';
import { useScopedI18n } from '@/utils/locales/client';
import { useSearchParams } from 'next/navigation';
import React from 'react';

export function ProfileSidebar() {
  const t = useScopedI18n('profile');

  const docsT = useScopedI18n('application');

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
      id: 2,
      link: '/profile/favourites-experts',
      label: t('favourites-expers'),
      roles: ['customer'],
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
      link: '/profile/resume',
      label: docsT('resume'),
      roles: ['trainee', 'employee'],
    },
    {
      id: 6,
      link: '/profile/docs',
      label: t('docs'),
      roles: ['trainee', 'employee'],
    },
    {
      id: 7,
      link: '/profile/orders',
      label: t('my-orders'),
      roles: ['customer', 'expert'],
    },
    {
      id: 2,
      link: '/orders',
      label: t('order-list'),
      roles: ['expert'],
      root: true,
    },
    {
      id: 8,
      link: '/chat',
      label: t('chat'),
      roles: ['customer', 'expert'],
      root: true,
    },
    // {
    //   id: 9,
    //   link: '/profile/new',
    //   label: t('new-profile'),
    //   roles: ['trainee', 'employee', 'customer', 'expert'],
    // },
    {
      id: 10,
      link: '/new-order',
      label: t('new-order'),
      roles: ['customer'],
      root: true,
    },
    {
      id: 1,
      link: '/profile/settings',
      label: t('settings'),
      roles: ['trainee', 'employee', 'customer', 'expert'],
    },
  ];

  return (
    <ul className='sm:no-scrollbar mt-[30px] w-full sm:mx-3 sm:flex sm:gap-[24px] sm:overflow-y-scroll'>
      {React.Children.toArray(
        pages.map(
          (page) =>
            page.roles.includes(role || '') && (
              <li className='w-full text-base'>
                <ActiveLink
                  disableHover
                  link={page.link}
                  suffix={page.root ? '' : '?role=' + role}
                  className='relative block h-full w-[85%] whitespace-nowrap rounded-lg p-3 text-secondary dark:bg-backgroundSecondaryDark dark:text-textdark sm:rounded-t-lg sm:px-6 sm:py-5'
                  activeClassName='board-link-active border-blue-500 sm:border-t-1 border-l-4 bg-backgroundSecondary dark:bg-backgroundDark font-normal !text-main shadow-lg sm:border-l-0'
                >
                  <div className='flex'>{page.label}</div>
                </ActiveLink>
              </li>
            )
        )
      )}
    </ul>
  );
}
