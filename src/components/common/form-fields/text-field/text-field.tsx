'use client';

import React, { HTMLProps, useState } from 'react';
import { Control, useController } from 'react-hook-form';
import icon from '@/assets/images/icons/eye.svg';
import iconClosed from '@/assets/images/icons/eye-closed.svg';
import Image from 'next/image';
import { cn } from '@/utils';
import { useScopedI18n } from '@/utils/locales/client';

type InputProps = HTMLProps<HTMLInputElement> & {
  control: Control<any>;
  name: string;
  label: string;
  inputClassName?: string;
  className?: string;
  labelClassName?: string;
  iconUrl?: string;
};

export function FieldText({
  control,
  name,
  type,
  label,
  placeholder,
  inputClassName,
  className = '',
  labelClassName,
  iconUrl,
  ...props
}: InputProps) {
  const [isPassword, setIsPassword] = useState<boolean>(type === 'password');

  const {
    field: { onBlur, onChange },
    fieldState: { error },
  } = useController({ name, control });

  const t = useScopedI18n('errors');

  return (
    <div className={cn('group relative flex w-[100%] flex-col', className)}>
      <label
        htmlFor={name}
        className={cn(
          'text-sm font-bold text-secondary dark:text-main',
          labelClassName
        )}
      >
        {label}
      </label>
      <input
        id={name}
        onChange={onChange}
        onBlur={onBlur}
        className={cn(
          'w-full rounded-lg border-none bg-backgroundSecondary p-2 py-3 text-base text-text placeholder-[#A6A6A6] shadow-lg focus:outline-none  dark:bg-backgroundSecondaryDark dark:text-textdark dark:shadow-black',
          iconUrl && '',
          inputClassName,
          error && 'border-red-600'
        )}
        placeholder={placeholder}
        type={isPassword ? 'password' : 'text'}
        {...props}
      />
      {iconUrl && (
        <div
          style={{ backgroundImage: `url('${iconUrl}')` }}
          className='absolute left-[4%] top-[55%] h-[1.05vw] w-[1.389vw] bg-contain bg-no-repeat group-placeholder-shown:block sm:top-[60%] sm:h-[3.883vw] sm:w-[4.854vw]'
        />
      )}
      {type === 'password' && (
        <Image
          onClick={() => setIsPassword((prev) => !prev)}
          src={isPassword ? icon : iconClosed}
          alt='password toggle'
          className='absolute right-[2%] top-[40%] w-6'
        />
      )}
      <p className='h-[2vh] text-xxs text-error sm:h-[4vw]'>
        {/* @ts-ignore */}
        {error?.message && t(error.message)}
      </p>
    </div>
  );
}
