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

export function UploadAvatarResemee({
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
    <div>
      <div className='w-fit '>
        <div className='mb-4'>
          <TranslatedText
            tranlationKey={label || 'Personal photo'}
            className='font-bold text-secondary dark:text-main'
          />
        </div>
        <label
          htmlFor={name}
          className={cn('relative flex items-center justify-center', className)}
        >
          <Image
            width={100}
            height={100}
            alt=''
            className={cn(
              'aspect-[3.2/4] w-40 rounded',
              imgClassName,
              value ? 'border-2 border-success' : ''
            )}
            src={require('@/assets/images/icons/avatar.png')}
          />

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
      </div>
      <TranslatedText
        tranlationKey={error?.message || ''}
        className='h-[15px] pl-1 text-[10px] text-error'
      />
    </div>
  );
}
