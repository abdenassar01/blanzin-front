import { ProfileHeader, ProfileSidebar } from '@/components'
import { LayoutProps } from '@/types'
import React from 'react'

type Props = LayoutProps

export default function ProfileDashboardLayout({ children }: Props) {
  return (
    <div className='bg-background dark:bg-backgroundSecondaryDark'>
      <ProfileHeader />
      <div className='flex h-[calc(100vh-90px)] overflow-y-hidden sm:flex-col'>
        <div className='w-[20vw] sm:hidden'>
          <ProfileSidebar />
        </div>
        <div className='w-full flex-grow overflow-scroll p-4'>{children}</div>
      </div>
    </div>
  )
}
