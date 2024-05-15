'use client';

import Image from 'next/image';
import React from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

type Props = {
  className?: string;
};

export default function ProfileDropdown({ className }: Props) {
  const { theme } = useTheme();

  return (
    <>
      <Link href='/login'>
        <Image
          className='h-auto w-[2vw] max-w-7 sm:w-[6vw]'
          src={
            theme === 'dark'
              ? require('@/assets/images/svg/profile-dark.svg')
              : require('@/assets/images/svg/profile.svg')
          }
          alt='language'
        />
      </Link>
    </>
  );
}
