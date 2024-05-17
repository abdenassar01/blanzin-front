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
  callback?: () => void;
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
  callback,
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
        className={cn(
          'my-3 text-xbase font-bold text-secondary dark:text-main'
        )}
      >
        {label}
      </label>
      <div className='mt-3 flex flex-wrap justify-center gap-5 sm:justify-between'>
        <Map
          items={items}
          render={(item) => (
            <div
              onClick={() => {
                onChange(extractValue(item));
                callback && callback();
              }}
              className={cn(
                'flex aspect-[3/3.5] w-[30%] cursor-pointer flex-col items-center justify-center rounded-md p-4 transition-all duration-500 sm:w-[45%]',
                value === extractValue(item)
                  ? 'bg-secondary text-main dark:bg-main dark:text-secondary'
                  : 'bg-backgroundSecondary text-secondary dark:bg-backgroundSecondaryDark dark:text-main'
              )}
            >
              {extractIcon && (
                <Image
                  width={200}
                  height={200}
                  className='w-[90%]'
                  alt={extractDisplayMember(item)}
                  src={extractIcon(item)}
                />
              )}
              <h3 className='mt-5 text-center text-xl font-medium'>
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
