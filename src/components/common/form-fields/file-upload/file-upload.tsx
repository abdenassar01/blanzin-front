'use client';

import React, { InputHTMLAttributes } from 'react';
import { Control, FieldValue, useController } from 'react-hook-form';
import { TranslatedHeading, TranslatedText } from '../..';
import { cn } from '@/utils';
import Image from 'next/image';
import { useTheme } from 'next-themes';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  control: Control<FieldValue<any>>;
  name: string;
  label: string;
};

export function FileUpload({
  label,
  control,
  name,
  className,
  placeholder,
  ...props
}: Props) {
  const { theme } = useTheme();

  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <div className='cursor-pointer'>
      <TranslatedHeading
        className='mb-1 text-sm text-secondary dark:text-main'
        tranlationKey={label}
      />
      <label
        htmlFor={name}
        className={cn(
          'flex cursor-pointer items-center justify-between gap-4 rounded-xl bg-backgroundSecondary p-2 dark:bg-backgroundSecondaryDark',
          className
        )}
      >
        <input
          accept=''
          id={name}
          onChange={(e) => {
            onChange(e.currentTarget.value);
            console.log(e.currentTarget.value);
          }}
          type='file'
          className='hidden'
          {...props}
        />
        <TranslatedText
          className='max-w-[90%] text-secondary dark:text-main'
          tranlationKey={value || placeholder}
        />
        <Image
          alt=''
          className='h-[30px] w-[30px]'
          src={
            theme === 'dark'
              ? require('@/assets/images/icons/dark/upload.svg')
              : require('@/assets/images/icons/light/upload.svg')
          }
        />
      </label>
      <div className='text-xs text-error'>{error?.message}</div>
    </div>
  );
}
