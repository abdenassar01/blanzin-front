'use client';

import { cn } from '@/utils';
import React, { HTMLProps } from 'react';
import { Control, Controller } from 'react-hook-form';

type InputProps = HTMLProps<HTMLInputElement> & {
  control: Control<any>;
  labelClassName?: string;
};

export function TextArea({
  control,
  name,
  label,
  placeholder,
  className,
  labelClassName,
}: InputProps) {
  return (
    <Controller
      control={control}
      name={name ?? 'textaria'}
      render={({ field: { onChange, onBlur }, fieldState: { error } }) => (
        <div className='flex w-[100%] flex-col '>
          <label
            htmlFor={name}
            className={cn(
              'text-base font-bold text-secondary sm:text-mb-xbase dark:text-main',
              labelClassName
            )}
          >
            {label}
          </label>
          <textarea
            rows={4}
            id={name}
            onChange={onChange}
            onBlur={onBlur}
            style={{ borderRadius: 4 }}
            className={cn(
              'rounded-[10px] border-none bg-backgroundSecondary p-2 placeholder-[#A6A6A6] focus:outline-none dark:bg-backgroundSecondaryDark',
              className,
              error ? 'border-red-600' : ''
            )}
            placeholder={placeholder}
          />
          <p className='mb-[-1.667vw] h-[1.667vw] text-sm text-error'>
            {error?.message?.toString()}
          </p>
        </div>
      )}
    />
  );
}
