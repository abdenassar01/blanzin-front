'use client';

import React, { ReactNode } from 'react';
import { TranslatedText } from '../..';
import { Control, useController } from 'react-hook-form';
import Image from 'next/image';
import { cn } from '@/utils';

type Props = {
  control: Control<any>;
  name: string;
  label?: string;
  defaultValue?: string;
  children?: ReactNode;
  className?: string;
  imgClassName?: string;
};

export function UploadAvatar({
  control,
  name,
  defaultValue,
  className,
  imgClassName,
  label,
}: Props) {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({ control, name, defaultValue });

  return (
    <>
      <div className='flex w-full justify-center'>
        <TranslatedText
          tranlationKey={label || 'avatar'}
          className='font-bold capitalize text-secondary dark:text-main'
        />
      </div>
      <label
        htmlFor={name}
        className={cn(
          'relative flex w-full items-center justify-center',
          className
        )}
      >
        <Image
          width={100}
          height={100}
          alt=''
          className={cn(
            'w-[7vw] rounded sm:w-[20vw]',
            imgClassName,
            value ? 'border-2 border-success' : ''
          )}
          src={require('@/assets/images/avatar.png')}
        />
        {!value && (
          <Image
            alt=''
            className={cn(
              'absolute bottom-0 right-[43%] w-[2.5vw] rounded-full bg-secondary p-1 sm:right-[37%] sm:w-[8vw]'
            )}
            src={require('@/assets/images/icons/dark/upload.svg')}
          />
        )}

        <div className='items-center'>
          <input
            id={name}
            onChange={(e) => {
              onChange(e.currentTarget.value);
              console.log(e.currentTarget.value);
            }}
            type='file'
            className='hidden'
          />
        </div>
      </label>
      <TranslatedText
        tranlationKey={error?.message || ''}
        className='h-[15px] pl-1 text-[10px] text-error'
      />
    </>
  );
}
