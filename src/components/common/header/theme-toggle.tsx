'use client';

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
    <div onClick={handleToggleTheme} className=''>
      <Image
        className='icon rounded-full bg-secondary p-1 dark:bg-main'
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
