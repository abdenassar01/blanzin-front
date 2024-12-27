'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function ProfileHeaderLinks() {
  const { theme } = useTheme()

  const isDark = useMemo(() => theme === 'dark', [theme])

  return (
    <div className='flex gap-5'>
      <Link href='/profile/notifications'>
        <Image
          className='icon'
          src={
            isDark
              ? require('@/assets/images/icons/dark/notification.svg')
              : require('@/assets/images/icons/light/notification.svg')
          }
          alt='icon'
        />
      </Link>
    </div>
  )
}
