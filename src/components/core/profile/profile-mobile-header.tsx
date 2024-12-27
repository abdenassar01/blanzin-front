'use client'

import { ActiveLink } from '@/components/common/active-link/active-link'
import { cn, useOutsideClick } from '@/utils'
import { useScopedI18n } from '@/utils/locales/client'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import React, { useRef, useState } from 'react'

export function ProfileMobileHeader() {
  const { theme } = useTheme()
  const t = useScopedI18n('profile')
  const ref = useRef(null)

  useOutsideClick(ref, () => setShowSidebar(false))

  const [showSidebar, setShowSidebar] = useState<boolean>(false)

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
    <div ref={ref} className='hidden sm:flex'>
      <button onClick={() => setShowSidebar(prev => !prev)} className=''>
        <Image
          className='w-7'
          src={
            theme === 'dark'
              ? require('@/assets/images/icons/dark/menu.svg')
              : require('@/assets/images/icons/light/menu.svg')
          }
          alt='Burger Menu'
        />
      </button>
      <div
        className={cn(
          'absolute left-0 top-0 z-10 grid h-[100vh] overflow-y-hidden bg-backgroundSecondary pb-3 shadow transition-all duration-500 ease-in-out dark:bg-backgroundDark',
          showSidebar ? 'w-[70%]' : 'w-0',
        )}>
        <div className={cn('cursor-pointer p-2')}>
          <div className='flex justify-between border-b-[0.5px] border-border pb-3 dark:border-backgroundSecondaryDark'>
            <Image
              src={require('@/assets/images/logo/logo-full.png')}
              alt='Blanzin'
              className='w-[200px] sm:w-[100px]'
            />
            <Image
              alt=''
              onClick={() => setShowSidebar(false)}
              className='w-[6vw]'
              src={
                theme === 'dark'
                  ? require('@/assets/images/icons/dark/close.svg')
                  : require('@/assets/images/icons/light/close.svg')
              }
            />
          </div>
          <div className='mt-3 flex h-full flex-col justify-between'>
            <ul className='no-scrollbar mt-4 flex w-full flex-col gap-2'>
              {React.Children.toArray(
                pages.map(page => (
                  <li
                    onClick={() => setShowSidebar(false)}
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
        </div>
      </div>
    </div>
  )
}
