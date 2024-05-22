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
  defaultValue?: unknown[];
  extractDisplayMember: (item: T) => string;
  extractValueMember: (item: T) => any;
};

export function DropdownMultipleSelect<T>({
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
    defaultValue: defaultValue || [],
  });

  useOutsideClick(dropdownRef, () => setOpenDropdown(false));

  function appendItem(item: any) {
    if (value.filter((i: any) => i === item).length !== 0) {
      onChange(value.filter((i: any) => i !== item));
    } else {
      onChange([...value, item]);
    }
  }

  function isSelected(item: any) {
    return value.filter((i: any) => i === item).length !== 0;
  }

  return (
    <div
      ref={dropdownRef}
      className={cn('relative flex w-full flex-col', wrapperClassName || '')}
    >
      <label
        htmlFor={name}
        className={cn(
          'text-sm font-bold normal-case text-secondary dark:text-main sm:text-mb-xxs',
          labelClassName || ''
        )}
      >
        {label}
      </label>
      <div
        onClick={() => setOpenDropdown((prev) => !prev)}
        className={cn(
          'no-scrollbar flex w-full items-center justify-between rounded-xl bg-backgroundSecondary text-xs text-[#A6A6A6] shadow-lg dark:bg-backgroundSecondaryDark sm:text-mb-xxs',
          className,
          (value || defaultValue) && 'text-text dark:text-textdark',
          (error && 'border-[1px] border-error') || ''
        )}
      >
        <input
          className='w-full rounded-md bg-[transparent] p-3 normal-case focus:border-none focus:outline-none'
          type='text'
          placeholder={placeholder || label}
          onFocus={() => setDisplayString('')}
          onChange={(e) => {
            setDisplayString(e.currentTarget.value);
            if (e.currentTarget.value === '') {
              setFiltredItems(items);
            } else {
              setFiltredItems(
                items.filter((item) =>
                  extractDisplayMember(item)
                    .toLowerCase()
                    .startsWith(displayString.toLowerCase())
                )
              );
            }
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
          'no-scrollbar absolute top-[75px] isolate z-10 w-full  cursor-pointer overflow-x-hidden rounded-xl bg-backgroundSecondary transition-all ease-out dark:bg-backgroundSecondaryDark',
          openDropdown ? 'h-[200px]' : 'h-0'
        )}
      >
        <div>
          {React.Children.toArray(
            filtredItems.map((item) => (
              <div
                onClick={() => {
                  setDisplayString(extractDisplayMember(item));
                  appendItem(extractValueMember(item));
                }}
                className={cn(
                  'flex w-full px-[24px] py-[14px] font-medium text-secondary transition-all hover:bg-[#dadadb] dark:text-main dark:hover:bg-[#00000050]',
                  isSelected(item) ? 'bg-[#dadadb] dark:text-secondary' : ''
                )}
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
