'use client';

import { cn, useOnHoverOutside, useOutsideClick } from '@/utils';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { useLocale } from 'next-intl';
import { useChangeLocale, useI18n } from '@/utils/locales/client';
import { useTheme } from 'next-themes';

const languages: {
  value: 'en' | 'fr' | 'ar';
  label: 'english' | 'arabic' | 'frensh';
  icon: any;
}[] = [
  {
    value: 'en',
    label: 'english',
    icon: require('@/assets/images/languages/english.png'),
  },
  {
    value: 'fr',
    label: 'frensh',
    icon: require('@/assets/images/languages/frensh.png'),
  },
  {
    value: 'ar',
    label: 'arabic',
    icon: require('@/assets/images/languages/arabic.png'),
  },
];

type Props = {
  className?: string;
};

export default function LanguagesToggle({ className }: Props) {
  const locale = useLocale();

  const t = useI18n();

  const { theme } = useTheme();

  const changeLocale = useChangeLocale();

  function onLangClick(nextLocale: 'en' | 'ar' | 'fr') {
    changeLocale(nextLocale);
  }

  const dropdownRef = useRef(null);

  const [showLanguesDropdown, setShowLanguesDropdown] =
    useState<boolean>(false);

  const closeDropdown = () => {
    setShowLanguesDropdown(false);
  };

  useOnHoverOutside(dropdownRef, closeDropdown);
  useOutsideClick(dropdownRef, closeDropdown);

  return (
    <div ref={dropdownRef} className='relative'>
      <div
        onClick={() => {
          setShowLanguesDropdown((prev) => !prev);
        }}
        onMouseMove={() => {
          setShowLanguesDropdown((prev) => !prev);
        }}
      >
        <Image
          className='h-auto w-[2vw] max-w-7 sm:w-[6vw]'
          src={
            theme === 'dark'
              ? require('@/assets/images/icons/dark/language.svg')
              : require('@/assets/images/icons/light/language.svg')
          }
          alt='language'
        />
      </div>
      <div
        className={cn(
          'absolute -right-4 top-5 h-10 w-[220px] bg-[transparent]',
          showLanguesDropdown ? 'flex' : 'hidden'
        )}
      />
      <div
        className={cn(
          'absolute top-[70px] flex min-w-[220px] flex-col rounded border-t-4 border-secondary bg-backgroundSecondary shadow-md transition-all duration-500 dark:border-main dark:bg-backgroundSecondaryDark',
          showLanguesDropdown
            ? 'top-10  z-20 opacity-100'
            : 'pointer-events-none -z-10 opacity-0',
          locale === 'ar' ? '-left-4' : '-right-4',
          className
        )}
      >
        {React.Children.toArray(
          languages.map((lang) => (
            <button
              dir='ltr'
              onClick={() => onLangClick(lang.value)}
              className={cn(
                'bg-transparent flex items-center gap-1 rounded p-2 px-4 text-text hover:text-secondary dark:text-textdark dark:hover:text-main'
              )}
            >
              <Image
                className='w-[3vw] max-w-8 sm:w-[9vw]'
                alt={lang.label}
                src={lang.icon}
              />
              <span>{t(lang.label)}</span>
            </button>
          ))
        )}
      </div>
    </div>
  );
}
