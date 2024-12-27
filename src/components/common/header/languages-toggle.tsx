'use client'

import { cn, useOutsideClick } from '@/utils'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import {
  useChangeLocale,
  useCurrentLocale,
  useI18n,
} from '@/utils/locales/client'

const languages: {
  value: 'en' | 'fr' | 'ar'
  label: 'english' | 'arabic' | 'french'
  icon: any
}[] = [
  {
    value: 'en',
    label: 'english',
    icon: require('@/assets/images/languages/en.svg'),
  },
  {
    value: 'fr',
    label: 'french',
    icon: require('@/assets/images/languages/fr.svg'),
  },
  {
    value: 'ar',
    label: 'arabic',
    icon: require('@/assets/images/languages/ar.svg'),
  },
]

type Props = {
  className?: string
}

export default function LanguagesToggle({ className }: Props) {
  const t = useI18n()

  const changeLocale = useChangeLocale()
  const locale = useCurrentLocale()

  function onLangClick(nextLocale: 'en' | 'ar' | 'fr') {
    changeLocale(nextLocale)
  }

  const dropdownRef = useRef(null)

  const [showLanguagesDropdown, setShowLanguagesDropdown] =
    useState<boolean>(false)

  const closeDropdown = () => {
    setShowLanguagesDropdown(false)
  }

  useOutsideClick(dropdownRef, closeDropdown)

  return (
    <div ref={dropdownRef} className='relative'>
      <div
        className='cursor-pointer'
        onClick={() => {
          setShowLanguagesDropdown(prev => !prev)
        }}>
        <Image
          className='icon object-cover'
          src={require(`@/assets/images/languages/${locale}.svg`)}
          alt='language'
        />
      </div>
      <div
        className={cn(
          'absolute -right-4 top-5 h-10 w-[220px] bg-[transparent]',
          showLanguagesDropdown ? 'flex' : 'hidden',
        )}
      />
      <div
        className={cn(
          'absolute top-[70px] flex min-w-[220px] flex-col rounded border-t-4 border-secondary bg-backgroundSecondary p-2 shadow-md transition-all duration-500 dark:border-main dark:bg-backgroundSecondaryDark',
          showLanguagesDropdown
            ? 'top-10  z-20 opacity-100'
            : 'pointer-events-none -z-10 opacity-0',
          locale === 'ar' ? '-left-4' : '-right-4',
          className,
        )}>
        {React.Children.toArray(
          languages.map(lang => (
            <button
              key={`language-item-${lang.value}-${lang.label}`}
              dir='ltr'
              onClick={() => onLangClick(lang.value)}
              className={cn(
                'bg-transparent flex items-center gap-1 rounded-full p-1 text-text hover:bg-border hover:text-secondary dark:text-textdark dark:hover:text-main',
              )}>
              <Image
                className='w-[3vw] max-w-8 sm:w-[9vw]'
                alt={lang.label}
                src={lang.icon}
              />
              <span>{t(lang.label)}</span>
            </button>
          )),
        )}
      </div>
    </div>
  )
}
