'use client';

import { cn } from '@/utils';
import React from 'react';
import { Control, useController } from 'react-hook-form';
import { Map } from '@/components';
import Image from 'next/image';

type Props<T> = {
  items: T[];
  extractValue: (item: T) => any;
  extractDisplayMember: (item: T) => any;
  extractIcon?: (item: T) => any;
  name: string;
  control: Control<any>;
  label: string;
};

export function CategorySelector<T>({
  control,
  extractDisplayMember,
  extractValue,
  items,
  label,
  name,
  extractIcon,
}: Props<T>) {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <div>
      <label
        htmlFor={name}
        className={cn('text-base font-bold text-secondary dark:text-main')}
      >
        {label}
      </label>
      <div className='mt-3 flex flex-wrap gap-2'>
        <Map
          items={items}
          render={(item) => (
            <div
              onClick={() => onChange(extractValue(item))}
              className={cn(
                'rounded-md p-4  transition-all duration-500',
                value === extractValue(item)
                  ? 'bg-secondary text-main dark:bg-main dark:text-secondary'
                  : 'bg-backgroundSecondary text-secondary dark:bg-backgroundSecondaryDark dark:text-main'
              )}
            >
              {extractIcon && (
                <Image
                  width={100}
                  height={100}
                  className=''
                  alt={extractDisplayMember(item)}
                  src={extractIcon(item)}
                />
              )}
              <h3 className='mt-4 text-center font-medium'>
                {extractDisplayMember(item)}
              </h3>
            </div>
          )}
        />
      </div>
      <div className='text-xs text-error'>{error?.message}</div>
    </div>
  );
}
