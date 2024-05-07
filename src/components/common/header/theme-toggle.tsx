'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';

export function ThemeToggle() {
  const { setTheme, theme, themes, resolvedTheme, forcedTheme, systemTheme } =
    useTheme();

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
        className='w-[2vw] sm:w-[6vw]'
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
