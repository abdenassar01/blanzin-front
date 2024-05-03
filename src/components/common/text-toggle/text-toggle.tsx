'use client';

import * as React from 'react';
import { useState } from 'react';

import icon from '@/assets/images/icons/arrow-down.svg';
import { cn } from '@/utils';
import Image from 'next/image';

type Props = {
  question: string;
  answer: string;
  isOpen?: boolean;
  className?: string;
};

export function TextToggle({
  question,
  answer,
  isOpen = false,
  className,
}: Props) {
  const [open, setOpen] = useState<boolean>(isOpen);

  return (
    <div className='flex w-[100%] flex-col rounded bg-backgroundSecondary p-2'>
      <button
        className='mb-1 flex cursor-pointer justify-between'
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div
          className={cn(
            'text-base text-secondary sm:text-mb-base',
            open ? 'sm:text-[5.340vw]' : ''
          )}
        >
          {question}
        </div>
        <Image
          className={cn('w-[2vw] transition-all', open ? 'rotate-180' : '')}
          src={icon}
          alt='toggle element'
        />
      </button>
      <div
        className={cn(
          'grid  overflow-hidden  transition-all ease-in-out',
          open ? 'grid-rows-[1fr] border-t border-main' : 'grid-rows-[0fr]'
        )}
      >
        <div className='min-h-0'>
          <div
            className={cn(
              'text-sm text-text dark:text-textdark',
              className || ''
            )}
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        </div>
      </div>
    </div>
  );
}
