'use client';

import { cn } from '@/utils';
import { useScopedI18n } from '@/utils/locales/client';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React, { useState } from 'react';

type Props = {};

export function AttachementModal({}: Props) {
  const [showPopover, setShowPopover] = useState<boolean>(false);
  const { theme } = useTheme();
  const t = useScopedI18n('chat-options');

  return (
    <div className='relative'>
      <div onClick={() => setShowPopover((prev) => !prev)}>
        <Image
          alt=''
          src={
            theme === 'dark'
              ? require('@/assets/images/icons/dark/attachments.svg')
              : require('@/assets/images/icons/light/attachments.svg')
          }
          className='w-[35px] rounded-full bg-secondary p-2 dark:bg-main'
        />
      </div>
      <div
        className={cn(
          'absolute  w-[200px] rounded-xl bg-background p-2 transition-all duration-500 dark:bg-backgroundSecondaryDark',
          showPopover
            ? 'bottom-12 opacity-100'
            : 'pointer-events-none -bottom-1 opacity-0'
        )}
      >
        <button className='w-full'>
          <div className='my-1 flex items-center'>
            <Image
              alt=''
              className='icon'
              src={
                theme === 'dark'
                  ? require('@/assets/images/icons/dark/location.svg')
                  : require('@/assets/images/icons/light/location.svg')
              }
            />
            <div className='text-sm'>{t('location')}</div>
          </div>
          <div className='h-[0.5px] w-full bg-backgroundSecondary dark:bg-backgroundDark' />
        </button>
        <button className='w-full'>
          <div className='my-1 flex items-center'>
            <Image
              alt=''
              className='icon'
              src={
                theme === 'dark'
                  ? require('@/assets/images/icons/dark/location.svg')
                  : require('@/assets/images/icons/light/location.svg')
              }
            />
            <div className='text-sm'>{t('photo')}</div>
          </div>
          <div className='h-[0.5px] w-full bg-backgroundSecondary dark:bg-backgroundDark' />
        </button>
        <button className='w-full'>
          <div className='my-1 flex items-center'>
            <Image
              alt=''
              className='icon'
              src={
                theme === 'dark'
                  ? require('@/assets/images/icons/dark/location.svg')
                  : require('@/assets/images/icons/light/location.svg')
              }
            />
            <div className='text-sm'>{t('document')}</div>
          </div>
          <div className='h-[0.5px] w-full bg-backgroundSecondary dark:bg-backgroundDark' />
        </button>
      </div>
    </div>
  );
}
