'use client';

import * as React from 'react';
import { Control, useController } from 'react-hook-form';
import { cn } from '@/utils';

type Props = {
  control: Control<any>;
  name: string;
  label: string;
  placeholder?: string;
  className?: string;
  wrapperClassName?: string;
  defaultDate?: Date;
  minimumDate?: Date;
  maximumDate?: Date;
  selectRange?: boolean;
  activeDate?: Date;
};

export function DatePicker({
  label,
  name,
  control,
  defaultDate,
  className,
  wrapperClassName,
}: Props) {
  const {
    fieldState: { error },
    field: { onChange, value },
  } = useController({
    control,
    name: name,
    defaultValue: defaultDate,
  });

  return (
    <div
      className={cn('relative flex w-full flex-col', wrapperClassName || '')}
    >
      <label
        htmlFor={name}
        className={cn('text-sm font-bold text-secondary dark:text-main')}
      >
        {label}
      </label>

      <input
        type='date'
        className={cn(
          'flex w-full items-center justify-between rounded-lg bg-backgroundSecondary p-3 text-base text-[#A6A6A6] placeholder-[#A6A6A6] shadow-lg focus:border-none focus:outline-none dark:bg-backgroundSecondaryDark dark:shadow-black sm:text-mb-xxs',
          className,
          (error && 'border-[1px] border-error') || ''
        )}
        name={name}
        id={name}
        onChange={(e) => {
          const date = e.currentTarget.value.split('-');
          onChange(date[1] + '/' + date[2] + '/' + date[0]);
        }}
      />
      <div className='text-sm text-error'>{error?.message}</div>
    </div>
  );
}
