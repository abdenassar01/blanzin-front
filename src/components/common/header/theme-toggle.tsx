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
    <div
      onClick={handleToggleTheme}
      className='w-[50px] rounded-full bg-secondary p-0.5 dark:bg-main'
    >
      <Image
        className={cn(
          'w-5 rounded-full bg-backgroundSecondary p-1 transition-all duration-300 dark:bg-backgroundSecondaryDark',
          theme === 'dark' ? 'ml-0' : 'ml-[26px]'
        )}
        alt=''
        src={
          theme === 'dark'
            ? require('@/assets/images/icons/moon.svg')
            : require('@/assets/images/icons/sun.svg')
        }
      />
    </div>
  );
}
