'use client';

import React, { Dispatch, ReactNode, SetStateAction, useMemo } from 'react';
import { TranslatedHeading } from '..';
import Image from 'next/image';
import { cn } from '@/utils';
import { useTheme } from 'next-themes';
import Rodal from 'rodal';
import { isMobile } from 'react-device-detect';

type Props = {
  children: ReactNode;
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  header?: string;
  className?: string;
  width?: number;
  height?: number;
  measure?: string;
};

export const Modal = ({
  visible,
  children,
  setVisible,
  header,
  className,
  height,
  width,
  measure,
}: Props) => {
  const { theme } = useTheme();

  return (
    <Rodal
      width={width || isMobile ? 90 : 160}
      height={height || isMobile ? 50 : 80}
      measure={measure || isMobile ? 'vw' : 'vh'}
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
