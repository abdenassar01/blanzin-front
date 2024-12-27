'use client'

import * as React from 'react'
import { ActiveLink } from '@/components/common/active-link/active-link'
import { TranslateFunc, useI18n, useScopedI18n } from '@/utils/locales/client'
import { cn, useOnHoverOutside } from '@/utils'
import { useRef, useState } from 'react'
import { useLocale } from 'next-intl'
import { usePathname } from '@/navigation'
import { isMobile } from 'react-device-detect'

type Props = {
  text: 'home' | 'services' | 'career' | 'courses'
  link: string
  super: boolean
  items?: {
    label:
      | 'application'
      | 'jobs'
      | 'interview'
      | 'interview-coaching'
      | 'contract'
      | 'courses'
      | 'training'
      | 'visa'
    link: string
  }[]
}

export function MultipleLinks({ items, text }: Props) {
  const t = useScopedI18n('links')

  const dropdownRef = useRef(null)

  const [showsDropdown, setShowDropdown] = useState<boolean>(false)

  const closeDropdown = () => {
    setShowDropdown(false)
  }

  useOnHoverOutside(dropdownRef, closeDropdown)
  const locale = useLocale()

  const pathname = usePathname()

  return (
    <div onMouseLeave={() => setShowDropdown(false)} className='relative'>
      <div
        className='cursor-pointer font-medium text-secondary dark:text-main'
        onMouseEnter={() => setShowDropdown(true)}
        onClick={() => isMobile && setShowDropdown(prev => !prev)}>
        {t(text)}
      </div>

      <div
        className={cn(
          'absolute -right-4 top-5 h-10 w-[220px] bg-[transparent]',
          showsDropdown ? 'flex' : 'hidden',
        )}
      />
      <div
        className={cn(
          'absolute top-[70px] flex min-w-[250px] flex-col rounded border-t-4 border-secondary bg-backgroundSecondary shadow-md transition-all duration-500 dark:border-main dark:bg-backgroundSecondaryDark',
          showsDropdown
            ? 'top-10  z-20 opacity-100'
            : 'pointer-events-none -z-10 opacity-0',
          locale === 'ar' ? '-left-4' : '-right-4',
        )}>
        {items &&
          React.Children.toArray(
            items.map(item => (
              <div key={`link-item-${item.link}`} className='p-2'>
                <ActiveLink
                  className=''
                  active={item.link === pathname}
                  link={item.link || ''}
                  suffix=''>
                  {t(item.label)}
                </ActiveLink>
              </div>
            )),
          )}
      </div>
    </div>
  )
}
