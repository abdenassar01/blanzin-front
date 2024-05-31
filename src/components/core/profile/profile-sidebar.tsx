'use client';

import { ActiveLink } from '@/components/common/active-link/active-link';
import { cn } from '@/utils';
import { useScopedI18n } from '@/utils/locales/client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export function ProfileSidebar() {
  const t = useScopedI18n('profile');

  const docsT = useScopedI18n('application');

  const searchParams = useSearchParams();
  const role = searchParams.get('role');
  const docParam = searchParams.get('doc');

  const [expandsDocs, setExpendsDocs] = useState<boolean>(false);

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
      link: '/profile/resume',
      label: docsT('resume'),
      roles: ['trainee', 'employee'],
    },
    {
      id: 6,
      link: '/profile/docs',
      label: t('docs'),
      items: [
        { label: docsT('lang-certificate'), doc: 'lang' },
        { label: docsT('diploma'), doc: 'diploma' },
        { label: docsT('job-certificates'), doc: 'job-certificate' },
        { label: docsT('intenship'), doc: 'internship' },
        { label: docsT('acknowledgement'), doc: 'acknowledgement' },
      ],
      roles: ['trainee', 'employee'],
    },
    {
      id: 7,
      link: '/profile/orders',
      label: t('my-orders'),
      roles: ['customer'],
    },

    {
      id: 8,
      link: '/chat',
      label: t('chat'),
      roles: ['customer', 'expert'],
      root: true,
    },
    {
      id: 9,
      link: '/profile/new',
      label: t('new-profile'),
      roles: ['trainee', 'employee', 'customer', 'expert'],
    },
    {
      id: 10,
      link: '/new-order',
      label: t('new-order'),
      roles: ['customer'],
      root: true,
    },
  ];

  return (
    <ul className='sm:no-scrollbar mt-[30px] w-full sm:mx-3 sm:flex sm:gap-[24px] sm:overflow-y-scroll'>
      {React.Children.toArray(
        pages.map((page) =>
          page.roles.includes(role || '') && page.items ? (
            <div className='flex flex-col items-end justify-end'>
              <li
                onClick={() => setExpendsDocs((prev) => !prev)}
                className='w-full text-base'
              >
                <ActiveLink
                  disableHover
                  link={page.link}
                  suffix={page.root ? '' : '?role=' + role + '&doc=lang'}
                  className='relative block h-full w-full whitespace-nowrap rounded-l-lg p-3 dark:bg-backgroundSecondaryDark sm:rounded-t-lg sm:bg-background sm:px-6 sm:py-5 sm:text-mb-base'
                  activeClassName='prose-em:block bg-backgroundSecondary board-link-active dark:bg-backgroundDark !text-main border-blue-500 border-l-4 font-normal  sm:border-l-0 sm:border-t-1'
                >
                  <em className='absolute -top-6 right-0 hidden h-6 w-6 bg-backgroundSecondary dark:bg-backgroundDark dark:after:!bg-backgroundSecondaryDark sm:hidden' />
                  <div className='flex'>{page.label}</div>
                </ActiveLink>
              </li>
              <div
                className={cn(
                  'grid w-[95%] overflow-hidden transition-all',
                  expandsDocs ? 'h-auto' : 'h-0'
                )}
              >
                {React.Children.toArray(
                  page.items.map((doc) => (
                    <Link
                      href={'/profile/docs?role=' + role + '&doc=' + doc.doc}
                      className={cn(
                        'relative min-h-0 p-3',
                        docParam === doc.doc
                          ? 'rounded-l-lg border-l-4 border-main bg-backgroundSecondary text-secondary dark:bg-backgroundDark dark:text-main sm:rounded-t-lg'
                          : ' board-link-active bg-background dark:bg-backgroundSecondaryDark'
                      )}
                    >
                      <span className='text-xs'>{doc.label}</span>{' '}
                    </Link>
                  ))
                )}
              </div>
            </div>
          ) : (
            <li className='w-full text-base'>
              <ActiveLink
                disableHover
                link={page.link}
                suffix={page.root ? '' : '?role=' + role}
                className='relative block h-full w-full whitespace-nowrap rounded-l-lg p-3 dark:bg-backgroundSecondaryDark sm:rounded-t-lg sm:bg-background sm:px-6 sm:py-5 sm:text-mb-base'
                activeClassName='prose-em:block bg-backgroundSecondary dark:bg-backgroundSecondaryDark board-link-active dark:bg-backgroundDark !text-main border-blue-500 border-l-4 font-normal  sm:border-l-0 sm:border-t-1'
              >
                <em className='absolute -top-6 right-0 hidden h-6 w-6 bg-backgroundSecondary dark:bg-backgroundDark dark:after:!bg-backgroundSecondaryDark sm:hidden' />
                <div className='flex'>{page.label}</div>
                <em className='absolute -bottom-6 right-0 hidden h-6 w-6 bg-backgroundSecondary dark:z-50 dark:bg-backgroundDark dark:after:!bg-backgroundSecondaryDark sm:hidden' />
              </ActiveLink>
            </li>
          )
        )
      )}
    </ul>
  );
}
