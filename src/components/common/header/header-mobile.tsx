'use client';

import { routes } from '@/configs/routes';
import { cn } from '@/utils';
import { useI18n } from '@/utils/locales/client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from '../button';
import { useTheme } from 'next-themes';

export default function HeaderMobile() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const t = useI18n();
  const { theme } = useTheme();

  return (
    <div className='hidden sm:flex'>
      <button onClick={() => setShowSidebar(true)}>
        <Image
          width={40}
          height={40}
          className='w-[7vw] '
          alt=''
          src={
            theme === 'dark'
              ? require('@/assets/images/icons/dark/menu.svg')
              : require('@/assets/images/icons/light/menu.svg')
          }
        />
      </button>
      <div
        className={cn(
          'absolute right-0 top-0 z-10 grid h-[100vh] overflow-y-hidden rounded-l-xl bg-backgroundSecondary shadow transition-all duration-500 ease-in-out dark:bg-backgroundSecondaryDark',
          showSidebar ? 'w-[70%]' : 'w-0'
        )}
      >
        <div
          onClick={() => setShowSidebar(false)}
          className={cn(' h-[95%] cursor-pointer p-2')}
        >
          <Image
            alt=''
            className='w-[6vw]'
            src={
              theme === 'dark'
                ? require('@/assets/images/icons/dark/close.svg')
                : require('@/assets/images/icons/light/close.svg')
            }
          />
          <div className='mt-3 flex h-full flex-col justify-between'>
            <div className=''>
              {React.Children.toArray(
                routes.map((route) => (
                  <button
                    dir='ltr'
                    className={cn(
                      'bg-transparent flex items-center gap-1 rounded p-2 px-4 text-text hover:text-secondary dark:text-textdark dark:hover:text-main'
                    )}
                  >
                    <div className=''>{t(route.text)}</div>
                  </button>
                ))
              )}
            </div>
            <Button className='group rounded-full hover:border-secondary hover:bg-[transparent]'>
              <Link
                className='font-medium group-hover:text-secondary'
                href='/logout'
              >
                Logout
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
