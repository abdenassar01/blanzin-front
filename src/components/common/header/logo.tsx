'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';

export function Logo() {
  const { theme } = useTheme();

  return (
    <>
      <Image
        alt='blanzin logo'
        className='h-[3.5vw] max-h-12 w-auto sm:hidden'
        src={
          theme === 'dark'
            ? require('@/assets/images/logo/logo-full-dark.png')
            : require('@/assets/images/logo/logo-full.png')
        }
      />
      <Image
        alt='blanzin logo'
        className='hidden h-[8vw] w-auto sm:block'
        src={
          theme === 'dark'
            ? require('@/assets/images/logo/logo-dark.png')
            : require('@/assets/images/logo/logo.png')
        }
      />
    </>
  );
}
