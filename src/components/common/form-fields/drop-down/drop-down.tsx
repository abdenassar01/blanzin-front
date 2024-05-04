'use client';

import { cn } from '@/utils';
import { useOutsideClick } from '@/utils/hooks/use-outside-click';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { Control, useController } from 'react-hook-form';

type Props<T> = {
  control: Control<any>;
  label: string;
  name: string;
  placeholder?: string;
  items: T[];
  className?: string;
  labelClassName?: string;
  wrapperClassName?: string;
  defaultValue?: any;
  extractDisplayMember: (item: T) => string;
  extractValueMember: (item: T) => any;
};

export function Dropdown<T>({
  control,
  name,
  className,
  items,
  placeholder,
  label,
  labelClassName,
  wrapperClassName,
  defaultValue,
  extractDisplayMember,
  extractValueMember,
}: Props<T>) {
  const dropdownRef = useRef(null);
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const [displayString, setDisplayString] = useState<string>(
    placeholder || label || ''
  );
  const [filtredItems, setFiltredItems] = useState<T[]>(items);

  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    control,
    name: name,
    defaultValue: defaultValue || '',
  });

  useOutsideClick(dropdownRef, () => setOpenDropdown(false));

  return (
    <div
      ref={dropdownRef}
      className={cn('relative flex w-[100%] flex-col', wrapperClassName || '')}
    >
      <label
        htmlFor={name}
        className={cn(
          'text-sm font-bold normal-case text-secondary sm:text-mb-xxs dark:text-main',
          labelClassName || ''
        )}
      >
        {label}
      </label>
      <div
        onClick={() => setOpenDropdown((prev) => !prev)}
        className={cn(
          'flex w-[100%] items-center justify-between rounded-full border-[1px]  border-[#CFD6E7] bg-backgroundSecondary text-xs text-[#A6A6A6] sm:text-mb-xxs dark:bg-backgroundSecondaryDark',
          className,
          (value || defaultValue) && 'text-text dark:text-textdark',
          (error && 'border-[1px] border-error') || ''
        )}
      >
        <input
          className='w-full rounded-md bg-[transparent] p-3 normal-case focus:border-none focus:outline-none'
          type='text'
          onFocus={() => setDisplayString('')}
          onChange={(e) => {
            setDisplayString(e.currentTarget.value);
            setFiltredItems(
              items.filter((item) =>
                extractDisplayMember(item)
                  .toLowerCase()
                  .startsWith(displayString.toLowerCase())
              )
            );
          }}
          value={displayString}
        />
        <Image
          alt=''
          className='v-6 mx-2 w-6'
          src={require('@/assets/images/icons/arrow-down.svg')}
        />
      </div>
      <p className='mb-[-1.667vw] h-[1.667vw] text-xxs text-error'>
        {error?.message}
      </p>
      <div
        className={cn(
          'absolute top-20 isolate z-10 w-full min-w-[22vw] cursor-pointer overflow-x-hidden rounded-[4px] bg-white shadow-md transition-all ease-out sm:top-[22.816vw] sm:w-[70vw]',
          openDropdown ? 'h-[200px]' : 'h-0'
        )}
      >
        <div>
          {React.Children.toArray(
            filtredItems.map((item) => (
              <div
                onClick={() => {
                  setDisplayString(extractDisplayMember(item));
                  onChange(extractValueMember(item));
                  setOpenDropdown(false);
                }}
                className='flex w-full px-[24px] py-[14px] hover:bg-[#dadadb]'
              >
                <div>{extractDisplayMember(item)}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
