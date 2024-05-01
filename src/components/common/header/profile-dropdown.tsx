'use client';

import { cn, useOnHoverOutside } from '@/utils';
import Image from 'next/image';
import { useRouter, usePathname } from '@/navigation';
import React, { useRef, useState } from 'react';
import { useParams } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useTheme } from 'next-themes';

type Props = {
  className?: string;
};

export default function ProfileDropdown({ className }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();

  const { theme } = useTheme();

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
          className='h-auto w-[2vw] sm:w-[6vw]'
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
          'absolute top-[70px] flex min-w-[220px] flex-col rounded border-t-4 border-secondary bg-white p-2 shadow-md transition-all duration-500 dark:border-main',
          showProfilleDropdown ? 'top-10  z-20 opacity-100' : '-z-10 opacity-0',
          locale === 'ar' ? '-left-4' : '-right-4',
          className
        )}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias obcaecati
        debitis, reiciendis suscipit, earum voluptates distinctio nihil ad hic
        eos numquam dolore in quod maxime. Tenetur, sunt. Quod, quae rem?
        {/* TODO: hallo */}
      </div>
    </div>
  );
}
