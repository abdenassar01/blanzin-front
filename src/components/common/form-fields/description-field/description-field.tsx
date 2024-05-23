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
  suggestionsLabel?: string;
  valuesLabel?: string;
};

export function DescriptionField({
  label,
  placeholder,
  items,
  className,
  control,
  name,
  suggestionsLabel,
  valuesLabel,
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

      setFilteredItems(items);
    }
  }

  return (
    <div className='mb-2 w-full'>
      <TranslatedHeading
        className='mb-1 text-sm text-secondary dark:text-main'
        tranlationKey={label}
      />

      <div className='flex w-full justify-between sm:flex-col sm:items-center'>
        <div className='w-[47%] gap-2 sm:w-full'>
          <div
            className={cn(
              'flex h-[70px] rounded border-main bg-background px-2 shadow-lg focus:border-[1px]  dark:bg-backgroundSecondaryDark dark:shadow-black sm:w-full',
              className
            )}
          >
            <input
              className='h-full w-full bg-[transparent] focus:outline-none'
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
              className='ml-3 flex gap-1 text-nowrap p-4 px-5  sm:ml-0'
              onClick={handleAppend}
            >
              <Image
                className='w-6'
                alt=''
                src={
                  isDark
                    ? require('@/assets/images/icons/dark/plus.svg')
                    : require('@/assets/images/icons/light/plus.svg')
                }
              />
            </button>
          </div>
          <div className='mt-4 h-[200px] w-full rounded bg-background p-2 pt-1 shadow-lg dark:bg-backgroundSecondaryDark dark:shadow-black  sm:w-full'>
            <div className='rounded p-1 text-xs text-black underline dark:text-white '>
              {suggestionsLabel}
            </div>
            <div className='flex h-[90%] flex-wrap content-start gap-3 overflow-y-scroll'>
              {React.Children.toArray(
                filteredItems.map(
                  (item) =>
                    suggestions.filter((el: string) => el === item).length ===
                      0 && (
                      <button
                        className='h-fit rounded bg-backgroundSecondary p-2 dark:bg-backgroundDark'
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
        <Image
          alt=''
          className='w-6 sm:my-1 sm:rotate-90'
          src={
            isDark
              ? require('@/assets/images/icons/dark/direction-arrow.svg')
              : require('@/assets/images/icons/light/direction-arrow.svg')
          }
        />
        <div className='mt-2 h-[286px] w-[47%] rounded bg-background p-2 pt-1 shadow-lg dark:bg-backgroundSecondaryDark dark:shadow-black sm:w-full'>
          <div className='rounded p-1 text-xs text-black underline dark:text-white '>
            {valuesLabel}
          </div>
          <div className='flex h-[90%] flex-wrap content-start gap-3 overflow-y-scroll'>
            {suggestions.length > 0 &&
              React.Children.toArray(
                suggestions.map((item: string, index: number) => (
                  <div className='flex h-fit w-fit flex-row items-center justify-between rounded bg-backgroundSecondary p-2 shadow-lg dark:bg-backgroundDark'>
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
        </div>
      </div>
    </div>
  );
}
