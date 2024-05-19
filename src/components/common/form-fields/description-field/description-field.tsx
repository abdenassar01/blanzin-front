'use client';

import * as React from 'react';
import { Control, useFieldArray } from 'react-hook-form';
import { TranslatedHeading } from '../../translated-text';
import { useMemo, useState } from 'react';
import { useTheme } from 'next-themes';
import { cn } from '@/utils';
import Image from 'next/image';

type Props = {
  control: Control<any>;
  items: string[];
  className?: string;
  label: string;
  placeholder?: string;
  name: string;
  suggestions: string[];
};

export function DescriptionField({
  label,
  placeholder,
  items,
  className,
  control,
  name,
  suggestions,
}: Props) {
  const [filteredItems, setFilteredItems] = useState<string[]>(items);
  const [filterValue, setFilterValue] = useState<string>('');

  const { theme } = useTheme();
  const isDark = useMemo(() => theme === 'dark', [theme]);

  const { append, remove } = useFieldArray({
    control,
    name,
  });

  function handleAppend() {
    if (filterValue) {
      append(filterValue);
      setFilterValue('');
    }
  }

  return (
    <div className='mb-2 w-full'>
      <TranslatedHeading
        className='mb-1 text-sm text-secondary dark:text-main'
        tranlationKey={label}
      />

      <div
        className={cn(
          'mb-1 flex h-[100px] flex-wrap gap-1 overflow-y-scroll rounded bg-background p-2 dark:bg-backgroundDark sm:h-[36.5vw]',
          className
        )}
      >
        {suggestions.length > 0 &&
          React.Children.toArray(
            suggestions.map((item: string, index: number) => (
              <div className='flex h-fit w-fit flex-row items-center justify-between rounded bg-backgroundSecondary p-2 dark:bg-backgroundSecondaryDark'>
                <h2 className=''>{item}</h2>
                <button
                  onClick={() => {
                    remove(index);
                  }}
                >
                  <Image
                    className='m-1 h-3 w-3'
                    alt='close'
                    src={
                      isDark
                        ? require('@/assets/images/icons/dark/close.svg')
                        : require('@/assets/images/icons/light/close.svg')
                    }
                  />
                </button>
              </div>
            ))
          )}
      </div>

      <div>
        <div className='flex flex-row justify-between gap-2'>
          <input
            className={cn(
              'h-[50px] w-full rounded border-main bg-background px-2 focus:border-[1px] focus:outline-none dark:bg-backgroundDark',
              className
            )}
            onChange={(e) => {
              const text = e.currentTarget.value;
              setFilterValue(text);
              if (text === '') {
                setFilteredItems(items);
              } else {
                setFilteredItems(
                  items.filter((item) =>
                    item
                      .toLocaleLowerCase()
                      .includes(filterValue.toLocaleLowerCase())
                  )
                );
              }
            }}
            value={filterValue}
            placeholder={placeholder}
          />
          <button
            onClick={handleAppend}
            className='flex h-auto w-[4vw] items-center justify-center rounded bg-background  dark:bg-backgroundDark sm:w-[15vw]'
          >
            <Image
              alt='plus'
              className='h-5 w-5'
              src={
                isDark
                  ? require('@/assets/images/icons/dark/plus.svg')
                  : require('@/assets/images/icons/dark/plus.svg')
              }
            />
          </button>
        </div>
        <div className='mt-1 flex h-[100px] w-full flex-wrap gap-1 overflow-y-scroll rounded bg-background p-2 dark:bg-backgroundDark sm:h-[36.5vw]'>
          {React.Children.toArray(
            filteredItems.map(
              (item) =>
                suggestions.filter((el: string) => el === item).length ===
                  0 && (
                  <button
                    className='h-fit rounded bg-backgroundSecondary p-2 dark:bg-backgroundSecondaryDark'
                    onClick={() => {
                      append(item);
                      setFilterValue('');
                      setFilteredItems(items);
                    }}
                  >
                    <h2 className=''>{item}</h2>
                  </button>
                )
            )
          )}
        </div>
      </div>
    </div>
  );
}
