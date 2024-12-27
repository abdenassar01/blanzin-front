import * as React from 'react'
import Image from 'next/image'
import { ThemeToggle } from '@/components/common/header/theme-toggle'
import LanguagesToggle from '@/components/common/header/languages-toggle'
import {
  ProfileHeaderLinks,
  ProfileMobileHeader,
  ProfileWidget,
} from '@/components'

export function ProfileHeader() {
  return (
    <div className='flex h-[90px] w-full items-center justify-between bg-backgroundSecondary p-4 dark:bg-backgroundDark'>
      <div className='flex items-center gap-1'>
        <ProfileMobileHeader />
        <Image
          src={require('@/assets/images/logo/logo-full.png')}
          alt='Blanzin'
          className='w-[200px] sm:w-[100px]'
        />
      </div>

      <div className='flex items-center gap-5'>
        <ProfileHeaderLinks />
        <ProfileWidget />
        <LanguagesToggle />
        <ThemeToggle />
      </div>
    </div>
  )
}
