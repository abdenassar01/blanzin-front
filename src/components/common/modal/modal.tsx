'use client';

import React, { Dispatch, ReactNode, SetStateAction, useMemo } from 'react';
import { TranslatedHeading } from '..';
import Image from 'next/image';
import { cn } from '@/utils';
import { useTheme } from 'next-themes';
import Rodal from 'rodal';

type Props = {
  children: ReactNode;
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  header?: string;
  className?: string;
  width?: number;
  height?: number;
};

export const Modal = ({
  visible,
  children,
  setVisible,
  header,
  className,
  height,
  width,
}: Props) => {
  const { theme } = useTheme();

  return (
    <Rodal
      width={width || 42}
      height={height || 22}
      measure='vw'
      customStyles={{ borderRadius: 20 }}
      onClose={() => setVisible(false)}
      visible={visible}
      closeOnEsc
    >
      <div
        className={cn(
          'h-full w-full  rounded-lg bg-backgroundSecondary p-2 dark:bg-backgroundSecondaryDark',
          className
        )}
      >
        <div
          className={cn(
            'flex w-full flex-row items-center justify-between',
            header ? 'justify-between' : 'justify-end'
          )}
        >
          {header && (
            <TranslatedHeading
              className='text-base text-secondary dark:text-main'
              tranlationKey={header}
            />
          )}
          <button className='' onClick={() => setVisible(false)}>
            <Image
              alt=''
              className='h-4 w-4 '
              src={
                theme === 'dark'
                  ? require('@/assets/images/icons/dark/close.svg')
                  : require('@/assets/images/icons/light/close.svg')
              }
            />
          </button>
        </div>
        <div className='no-scrollbar max-h-[90%] overflow-y-scroll'>
          {children}
        </div>
      </div>
      <button
        className='absolute z-10 h-full w-full'
        onClick={() => setVisible(false)}
      />
    </Rodal>
  );
};
