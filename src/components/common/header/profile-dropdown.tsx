'use client';

import { cn, useOnHoverOutside } from '@/utils';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { useLocale } from 'next-intl';
import { useTheme } from 'next-themes';
import { useI18n } from '@/utils/locales/client';
import Link from 'next/link';

type Props = {
  className?: string;
};

export default function ProfileDropdown({ className }: Props) {
  const locale = useLocale();
  const t = useI18n();
  const { theme } = useTheme();

  const links: {
    label: 'auth.login' | 'auth.signup' | 'auth.logout';
    href: string;
    icon: any;
  }[] = [
    {
      label: 'auth.login',
      href: '/login',
      icon:
        theme === 'dark'
          ? require('@/assets/images/icons/dark/login.svg')
          : require('@/assets/images/icons/light/login.svg'),
    },
    {
      label: 'auth.signup',
      href: '/register',
      icon:
        theme === 'dark'
          ? require('@/assets/images/icons/dark/login.svg')
          : require('@/assets/images/icons/light/login.svg'),
    },
    {
      label: 'auth.logout',
      href: '/register',
      icon:
        theme === 'dark'
          ? require('@/assets/images/icons/dark/login.svg')
          : require('@/assets/images/icons/light/login.svg'),
    },
  ];

  const dropdownRef = useRef(null);

  const [showProfilleDropdown, setshowProfilleDropdown] =
    useState<boolean>(false);

  const closeDropdown = () => {
    setshowProfilleDropdown(false);
  };

  useOnHoverOutside(dropdownRef, closeDropdown);

  return (
    <div ref={dropdownRef} className='relative'>
      <div
        onMouseMove={() => {
          setshowProfilleDropdown(true);
        }}
      >
        <Image
          className='h-auto w-[2vw] max-w-7 sm:w-[6vw]'
          src={
            theme === 'dark'
              ? require('@/assets/images/svg/profile-dark.svg')
              : require('@/assets/images/svg/profile.svg')
          }
          alt='language'
        />
      </div>
      <div
        className={cn(
          'absolute -right-4 top-5 h-10 w-[220px] bg-[transparent]',
          showProfilleDropdown ? 'flex' : 'hidden'
        )}
      />
      <div
        className={cn(
          'absolute top-[70px] flex min-w-[220px] flex-col rounded border-t-4 border-secondary bg-backgroundSecondary p-2 shadow-md transition-all duration-500 dark:border-main dark:bg-backgroundSecondaryDark',
          showProfilleDropdown ? 'top-10  z-20 opacity-100' : '-z-10 opacity-0',
          locale === 'ar' ? '-left-4' : '-right-4',
          className
        )}
      >
        {React.Children.toArray(
          links.map((link) => (
            <Link
              dir='ltr'
              href={link.href}
              className={cn(
                'bg-transparent flex items-center gap-1 rounded p-2 text-text hover:text-secondary dark:text-textdark dark:hover:text-main'
              )}
            >
              <Image
                className='w-[2.5vw] max-w-8 sm:w-[9vw]'
                alt={link.label}
                src={link.icon}
              />
              <span className='font-semibold'>{t(link.label)}</span>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
