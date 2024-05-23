'use client';

import * as React from 'react';
import { Control, useFieldArray } from 'react-hook-form';
import { TranslatedHeading } from '../../translated-text';
import { useMemo, useState } from 'react';
import { useTheme } from 'next-themes';
import { cn } from '@/utils';
import Image from 'next/image';
import { useScopedI18n } from '@/utils/locales/client';

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

      <div>
        <div className='flex w-full items-center gap-2 '>
          <input
            className={cn(
              'h-[70px] w-[47%] rounded border-main bg-background px-2 shadow-lg focus:border-[1px] focus:outline-none dark:bg-backgroundSecondaryDark dark:shadow-black sm:w-full',
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
            className='ml-3 flex gap-1 text-nowrap rounded-xl border-[1px] border-secondary p-4 px-5 dark:border-main sm:ml-0'
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
        <div className='mt-4 flex items-center justify-between sm:flex-col'>
          <div className='relative mt-1 flex h-[200px] w-[47%] flex-wrap content-start gap-3 overflow-y-scroll rounded bg-background p-2 pt-9 align-top shadow-lg dark:bg-backgroundSecondaryDark dark:shadow-black sm:h-[36.5vw] sm:w-full'>
            <div className='absolute left-0.5  top-0.5 rounded bg-border p-1 text-xs text-secondary dark:text-main '>
              {suggestionsLabel}
            </div>
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
          <Image
            alt=''
            className='w-6 sm:my-1 sm:rotate-90'
            src={
              isDark
                ? require('@/assets/images/icons/dark/direction-arrow.svg')
                : require('@/assets/images/icons/light/direction-arrow.svg')
            }
          />
          <div className='relative mt-1 flex h-[200px] w-[47%] flex-wrap content-start gap-3 gap-y-1 overflow-y-scroll rounded bg-background p-2 pt-9 shadow-lg dark:bg-backgroundSecondaryDark dark:shadow-black sm:h-[36.5vw] sm:w-full'>
            <div className='absolute left-0.5 top-0.5 rounded bg-border p-1 text-xs text-secondary dark:text-main '>
              {valuesLabel}
            </div>
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
