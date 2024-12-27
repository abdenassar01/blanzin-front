'use client'

import { cn } from '@/utils'
import { useCurrentLocale } from '@/utils/locales/client'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import React from 'react'

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const locale = useCurrentLocale()

  const handleToggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <div className=''>
      <div
        onClick={handleToggleTheme}
        className={cn(
          'flex w-16 rounded-full bg-border p-1 dark:bg-backgroundSecondaryDark sm:w-14',
          theme === 'dark' ? 'flex-row-reverse' : 'flex-row',
        )}>
        <div
          className={cn(
            'w-6 rounded-full bg-secondary transition-all duration-300 dark:bg-main sm:w-5',
            locale === 'ar'
              ? theme === 'dark'
                ? 'mr-2'
                : 'mr-0'
              : theme === 'dark'
                ? 'ml-2'
                : 'ml-0',
          )}
        />
        <Image
          className={cn(
            'w-6 transition-all sm:w-5',
            locale === 'ar'
              ? theme === 'dark'
                ? 'mr-0'
                : 'mr-2'
              : theme === 'dark'
                ? 'ml-0'
                : 'ml-2',
          )}
          alt=''
          src={
            theme === 'dark'
              ? require('@/assets/images/icons/sun.svg')
              : require('@/assets/images/icons/moon.svg')
          }
        />
      </div>
    </div>
  )
}
