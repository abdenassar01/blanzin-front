'use client';

import { UploadAvatar } from '@/components/common';
import { ActiveLink } from '@/components/common/active-link/active-link';
import { useScopedI18n } from '@/utils/locales/client';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';

export function ProfileSidebar() {
  const t = useScopedI18n('profile');

  const searchParams = useSearchParams();
  const role = searchParams.get('role');

  const { control } = useForm();

  const pages = [
    {
      link: '/profile/dashboard',
      label: t('dashboard'),
      roles: ['trainee', 'employee', 'expert'],
    },
    {
      link: '/profile/account',
      label: t('account'),
      roles: ['trainee', 'employee', 'customer', 'expert'],
    },
    {
      link: '/new-order',
      label: t('new-order'),
      roles: ['customer'],
      root: true,
    },
    {
      link: '/profile/resume',
      label: t('resume'),
      roles: ['trainee', 'employee'],
    },
    {
      link: '/profile/docs',
      label: t('docs'),
      roles: ['trainee', 'employee'],
    },
    {
      link: '/profile/favourite-experts',
      label: t('favourites'),
      roles: ['customer'],
    },
    {
      link: '/profile/favourite-orders',
      label: t('favourites'),
      roles: ['expert'],
    },
    {
      link: '/profile/favourite-trainings',
      label: t('favourites'),
      roles: ['trainee'],
    },
    {
      link: '/profile/favourite-jobs',
      label: t('favourites'),
      roles: ['employee'],
    },
    {
      link: '/jobs',
      label: t('jobs'),
      roles: ['trainee', 'employee'],
    },
    {
      link: '/profile/inbox',
      label: t('inbox'),
      roles: ['trainee', 'employee'],
    },

    {
      link: '/profile/orders',
      label: t('my-orders'),
      roles: ['customer', 'expert'],
    },
    {
      link: '/orders',
      label: t('order-list'),
      roles: ['expert'],
      root: true,
    },
    {
      link: '/chat',
      label: t('chat'),
      roles: ['customer', 'expert'],
      root: true,
    },
    {
      link: '/profile/settings',
      label: t('settings'),
      roles: ['trainee', 'employee', 'customer', 'expert'],
    },
  ];

  return (
    <div className=' w-[85%]'>
      <div className=' w-full justify-start'>
        <UploadAvatar
          control={control}
          name='avatar'
          className=''
          imgClassName=''
          defaultValue=''
        />
      </div>
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
                    className='relative block h-full whitespace-nowrap rounded-lg p-3 text-secondary dark:bg-backgroundSecondaryDark dark:text-textdark sm:rounded-t-lg sm:px-6 sm:py-5'
                    activeClassName='board-link-active border-blue-500 sm:border-t-1 border-l-4 bg-backgroundSecondary dark:bg-backgroundDark font-normal !text-main shadow-lg sm:border-l-0'
                  >
                    <div className='flex'>{page.label}</div>
                  </ActiveLink>
                </li>
              )
          )
        )}
      </ul>
    </div>
  );
}
