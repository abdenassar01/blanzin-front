'use client';

import React from 'react';
import { Control, FieldValue, useController } from 'react-hook-form';
import { TranslatedHeading, TranslatedText } from '../..';
import { cn } from '@/utils';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useScopedI18n } from '@/utils/locales/client';

type Props = {
  control: Control<FieldValue<any>>;
  name: string;
  label: string;
  className?: string;
  placeholder?: string;
};

export function FileUpload({
  label,
  control,
  name,
  className,
  placeholder,
}: Props) {
  const { theme } = useTheme();

  const t = useScopedI18n('forms');

  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <div>
      <TranslatedHeading
        className='mb-1 text-sm text-secondary dark:text-main'
        tranlationKey={label}
      />
      <label
        htmlFor={name}
        className={cn(
          'flex items-center justify-between rounded-xl bg-backgroundSecondary p-2 dark:bg-backgroundSecondaryDark',
          className
        )}
      >
        <input
          id={name}
          onChange={(e) => {
            onChange(e.currentTarget.value);
            console.log(e.currentTarget.value);
          }}
          type='file'
          className='hidden'
        />
        <TranslatedText
          className='max-w-[90%] text-text dark:text-textdark'
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
