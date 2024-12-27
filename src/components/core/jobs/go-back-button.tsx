'use client'

import * as React from 'react'
import Image from 'next/image'
import { cn } from '@/utils'
import { useRouter } from '@/navigation'

export function GoBackButton({ locale }: { locale: string }) {
  const { back } = useRouter()

  return (
    <button className='min-w-7' onClick={back}>
      <Image
        src={require('@/assets/images/icons/light/back-arrow.svg')}
        alt='back'
        className={cn(
          'flex w-7 dark:hidden',
          locale === 'ar' ? '-scale-100' : '',
        )}
      />
      <Image
        src={require('@/assets/images/icons/dark/back-arrow.svg')}
        alt='back'
        className={cn(
          'hidden w-7 dark:flex',
          locale === 'ar' ? '-scale-100' : '',
        )}
      />
    </button>
  )
}
