'use client';

import { cn } from '@/utils';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  const handleToggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <div className='flex'>
      <div
        onClick={handleToggleTheme}
        className={cn(
          'flex w-[65px] justify-between rounded-full bg-border p-1 transition-all duration-300 dark:bg-backgroundSecondaryDark',
          theme === 'dark' ? 'flex-row-reverse' : 'flex-row'
        )}
      >
        <div className={cn('h-6 w-6 rounded-full bg-secondary dark:bg-main')} />
        <Image
          className='w-6'
          alt=''
          src={
            theme === 'dark'
              ? require('@/assets/images/icons/sun.svg')
              : require('@/assets/images/icons/moon.svg')
          }
        />
      </div>
    </div>
  );
}
