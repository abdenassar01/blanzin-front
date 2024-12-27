'use client'

import { ActiveLink } from '@/components/common/active-link/active-link'
import { useScopedI18n } from '@/utils/locales/client'
import React from 'react'

export function ProfileSidebar() {
  const t = useScopedI18n('profile')

  const pages = [
    {
      link: '/profile/dashboard',
      label: t('dashboard'),
    },
    {
      link: '/profile/application',
      label: t('folder'),
    },

    {
      link: '/profile/interview-invite',
      label: t('interview-invite'),
    },
    {
      link: '/profile/interview-coaching',
      label: t('interview-coaching'),
    },

    {
      link: '/profile/contract',
      label: t('contract'),
    },
    {
      link: '/profile/visa',
      label: t('visa'),
    },
    {
      link: '/profile/jobs',
      label: t('jobs'),
    },
    {
      link: '/profile/courses',
      label: t('courses'),
    },
  ]

  return (
    <div className='no-scrollbar h-[100vh] overflow-y-scroll bg-backgroundSecondary p-4 dark:bg-backgroundDark sm:hidden'>
      <ul className='no-scrollbar mt-4 flex w-full flex-col gap-2'>
        {React.Children.toArray(
          pages.map(page => (
            <li
              key={`page-item-${page.label}`}
              className='h-[50px] w-full text-base'>
              <ActiveLink
                disableHover
                suffix=''
                link={page.link}
                className='relative block h-full whitespace-nowrap rounded-lg bg-backgroundSecondary p-3 text-secondary dark:bg-backgroundDark dark:text-textdark sm:rounded-t-lg sm:px-6 sm:py-5 sm:pb-3'
                activeClassName='board-link-active !font-bold font-normal shadow-md bg-[#f5f6fa] sm:bg-background dark:bg-backgroundSecondaryDark !text-secondary dark:!text-main'>
                <div className='flex'>{page.label}</div>
              </ActiveLink>
            </li>
          )),
        )}
      </ul>
    </div>
  )
}
