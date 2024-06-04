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
      <div className=' w-full '>
        <TranslatedText
          tranlationKey={label || ''}
          className='font-bold capitalize text-secondary dark:text-main'
        />
      </div>
      <label htmlFor={name} className={cn('relative flex', className)}>
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
          <div className='absolute bottom-0 right-[40%] rounded-full bg-[rgb(34,46,49)] p-1.5'>
            <Image
              alt=''
              className={cn('aspect-square w-[20px]')}
              src={require('@/assets/images/icons/edit.svg')}
            />
          </div>
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
