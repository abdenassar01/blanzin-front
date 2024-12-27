'use client'

import * as React from 'react'
import Image from 'next/image'
import { cn, formateFullName, useOutsideClick } from '@/utils'
import { useTheme } from 'next-themes'
import { useScopedI18n } from '@/utils/locales/client'
import Link from 'next/link'
import { signOut } from '@/auth/helper'
import { useSession } from 'next-auth/react'

export function ProfileWidget() {
  const [showWidget, setShowWidget] = React.useState<boolean>(false)
  const ref = React.useRef<HTMLDivElement>(null)
  const t = useScopedI18n('profile')

  const session = useSession()

  useOutsideClick(ref, () => setShowWidget(false))

  const { theme } = useTheme()

  return (
    <div ref={ref} className='relative'>
      <div
        className='cursor-pointer'
        onClick={() => setShowWidget(prev => !prev)}>
        <Image
          src={
            theme === 'dark'
              ? require('@/assets/images/icons/dark/user.svg')
              : require('@/assets/images/icons/light/user.svg')
          }
          alt='user'
          className='icon'
        />
      </div>
      <div
        className={cn(
          'absolute -right-4  flex min-w-[230px] flex-col rounded border-t-4 border-secondary bg-backgroundSecondary shadow-md transition-all duration-500 dark:border-main dark:bg-backgroundSecondaryDark',
          showWidget
            ? 'top-10 z-20 p-2 opacity-100'
            : 'pointer-events-none top-20 -z-10 opacity-0',
        )}>
        <div className='flex w-fit gap-2 border-b border-border pb-2'>
          <Image
            src={
              theme === 'dark'
                ? require('@/assets/images/icons/dark/user.svg')
                : require('@/assets/images/icons/light/user.svg')
            }
            alt='user'
            className='h-auto w-10'
          />
          <div className='w-fit'>
            <div className='font-bold'>
              {formateFullName(
                session.data?.user?.firstname,
                session.data?.user?.lastname,
              )}
            </div>
            <div className='text-[10px]'>{session.data?.user?.email}</div>
          </div>
        </div>
        <div className='pt-2'>
          <Link
            href='/profile/account'
            className='flex items-center gap-2 rounded-full p-2 hover:bg-border'>
            <Image
              className='h-5 w-5'
              src={
                theme === 'dark'
                  ? require('@/assets/images/icons/dark/edit-user.svg')
                  : require('@/assets/images/icons/light/edit-user.svg')
              }
              alt='edit user'
            />
            <div className=''>{t('edit')}</div>
          </Link>
          <button
            onClick={() => signOut()}
            className='flex w-full items-center gap-2 rounded-full p-2 hover:bg-border'>
            <Image
              className='h-5 w-5 '
              src={
                theme === 'dark'
                  ? require('@/assets/images/icons/dark/logout.svg')
                  : require('@/assets/images/icons/light/logout.svg')
              }
              alt='edit user'
            />
            <div className=''>{t('logout')}</div>
          </button>
        </div>
      </div>
    </div>
  )
}
