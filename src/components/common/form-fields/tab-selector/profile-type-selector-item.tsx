'use client'

import React, { useMemo } from 'react'

import { TranslatedText } from '../..'
import { useTheme } from 'next-themes'
import { cn } from '@/utils'
import Image from 'next/image'

type Props = {
  items: {
    role: string
    image: any
    imageDark: any
    label: string
    id: number
  }[]
  value: string[]
  onChange: (value: string[]) => void
}

export default function ProfileTypeSelectorItem({
  items,
  onChange,
  value,
}: Props) {
  const { theme } = useTheme()
  const isDark = useMemo(() => theme === 'dark', [theme])

  return (
    <>
      <div
        className={cn(
          'flex justify-between transition-all duration-500 ease-in',
        )}>
        {React.Children.toArray(
          items.map(item => (
            <button
              key={`role-${item.id}-${item.label}`}
              onClick={() => {
                if (value.filter(el => item.role === el).length === 0) {
                  onChange([...value, item.role])
                } else {
                  onChange(value.filter(el => item.role !== el))
                }
              }}
              className={cn(
                'my-1 flex w-[49%] flex-col items-center rounded-xl py-2',
                value.filter(el => item.role === el).length !== 0
                  ? 'bg-main dark:bg-secondary'
                  : 'bg-backgroundSecondary dark:bg-backgroundSecondaryDark',
              )}>
              <div className=''>
                <Image
                  className='h-[70px] w-[70px] '
                  alt=''
                  src={isDark ? item.imageDark : item.image}
                />
              </div>
              <TranslatedText
                className={cn(
                  'font-bold capitalize text-secondary dark:text-main',
                )}
                tranlationKey={item.role.replaceAll('_', ' ')}
              />
            </button>
          )),
        )}
      </div>
    </>
  )
}
