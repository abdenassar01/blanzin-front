'use client'

import * as React from 'react'
import { useState } from 'react'
import { cn } from '@/utils'
import Link from 'next/link'
import { useScopedI18n } from '@/utils/locales/client'
import { Map } from '@/components'

type Props = {
  route: {
    id: number
    text: 'services' | 'courses' | 'career' | 'home'
    link: string
    super: boolean
    items?: {
      label:
        | 'application'
        | 'visa'
        | 'interview'
        | 'contract'
        | 'jobs'
        | 'interview-coaching'
        | 'training'
      link: string
    }[]
  }
  className?: string
}

export function MobileHeaderDropDown({ className, route }: Props) {
  const t = useScopedI18n('links')

  const [showDropdown, setShowDropdown] = useState<boolean>(false)
  return (
    <div className={className}>
      <button
        onClick={() => setShowDropdown(prev => !prev)}
        dir='ltr'
        className={cn(
          'bg-transparent flex items-center gap-1 rounded p-2 px-4 text-text hover:text-secondary dark:text-textdark dark:hover:text-main',
        )}>
        <div className=''>{t(route.text)}</div>
      </button>
      <div
        className={cn(
          'grid  overflow-hidden  transition-all ease-in-out',
          showDropdown ? 'grid-rows-[1fr]' : 'grid-rows-[0]',
        )}>
        <div className='min-h-0'>
          <div className='ml-4 flex flex-col gap-1.5'>
            {route.items && (
              <Map
                items={route.items}
                render={item => (
                  <Link
                    key={`header-item-${item.link}`}
                    href={item.link}
                    dir='ltr'
                    className={cn(
                      'bg-transparent flex items-center gap-1 rounded p-2 px-4 text-text hover:text-secondary dark:text-textdark dark:hover:text-main',
                    )}>
                    <div className=''>{t(item.label)}</div>
                  </Link>
                )}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
