'use client'

import * as React from 'react'
import { Control, useFieldArray } from 'react-hook-form'
import { useMemo, useState } from 'react'
import { useTheme } from 'next-themes'
import { cn } from '@/utils'
import Image from 'next/image'
import { PagedAPIResponse } from '@/types'
import { FormConrolPopoverExplaination } from '../form-control-popover-explaination'

type Props<T> = {
  control: Control<any>
  items: string[]
  className?: string
  label: string
  placeholder?: string
  name: string
  suggestionsLabel?: string
  valuesLabel?: string
  popoverText?: string
  fetchData: (
    filter?: string,
  ) => Promise<PagedAPIResponse<{ id?: number; label: string }>>
}

export function DescriptionField<T>({
  label,
  placeholder,
  items,
  className,
  control,
  name,
  suggestionsLabel,
  valuesLabel,
  popoverText,
  fetchData,
}: Props<T>) {
  const [filteredItems, setFilteredItems] = useState<string[]>(items)
  const [filterValue, setFilterValue] = useState<string>('')

  const { theme } = useTheme()
  const isDark = useMemo(() => theme === 'dark', [theme])

  const { append, remove } = useFieldArray({
    control,
    name,
  })

  function handleAppend() {
    if (filterValue) {
      append(filterValue)
      setFilterValue('')
      setFilteredItems(items)
    }
  }

  React.useEffect(() => {
    fetchData(filterValue).then(
      data =>
        data.data.content &&
        setFilteredItems(data.data.content.map(item => item.label)),
    )
  }, [filterValue])

  return (
    <div className='mb-2 w-full'>
      <div className='flex'>
        <label
          htmlFor={name}
          className={cn('text-sm font-bold text-secondary dark:text-main')}>
          {label}
        </label>
        {popoverText && <FormConrolPopoverExplaination text={popoverText} />}
      </div>
      <div className='flex w-full justify-between sm:flex-col sm:items-center'>
        <div className='w-[47%] gap-2 sm:w-full'>
          <div
            className={cn(
              'flex h-[70px] rounded border-main bg-backgroundSecondary px-2 shadow-lg focus:border-[1px]  dark:bg-backgroundDark dark:shadow-black sm:w-full',
              className,
            )}>
            <input
              className='h-full w-full bg-[transparent] focus:outline-none'
              onChange={e => {
                const text = e.currentTarget.value
                setFilterValue(text)
                if (text === '') {
                  setFilteredItems(items)
                } else {
                  setFilteredItems(
                    items.filter(item =>
                      item
                        .toLocaleLowerCase()
                        .includes(filterValue.toLocaleLowerCase()),
                    ),
                  )
                }
              }}
              value={filterValue}
              placeholder={placeholder}
            />
            <button
              className='ml-3 flex gap-1 text-nowrap p-4 px-5  sm:ml-0'
              onClick={handleAppend}>
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
          <div className='mt-4 h-[200px] w-full rounded bg-backgroundSecondary p-2 pt-1 shadow-lg dark:bg-backgroundDark dark:shadow-black  sm:w-full'>
            <div className='rounded p-1 text-xs text-black underline dark:text-white '>
              {suggestionsLabel}
            </div>
            <div className='no-scrollbar flex h-[90%] flex-wrap content-start gap-3 overflow-y-scroll'>
              {React.Children.toArray(
                filteredItems?.map(
                  item =>
                    items.filter((el: string) => el === item).length === 0 && (
                      <button
                        key={`selected-item-${item}`}
                        className='h-fit rounded bg-background p-1 py-2 dark:bg-backgroundSecondaryDark'
                        onClick={() => {
                          append(item)
                          setFilterValue('')
                        }}>
                        <h2 className=''>{item}</h2>
                      </button>
                    ),
                ),
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
        <div className='h-[286px] w-[47%] rounded bg-backgroundSecondary p-2 pt-1 shadow-lg dark:bg-backgroundDark dark:shadow-black sm:w-full'>
          <div className='rounded p-1 text-xs text-black underline dark:text-white '>
            {valuesLabel}
          </div>
          <div className='no-scrollbar flex h-[90%] flex-wrap content-start gap-3 overflow-y-scroll'>
            {items.length > 0 &&
              React.Children.toArray(
                items?.map((item: string, index: number) => (
                  <div
                    key={`value-index-${item}`}
                    className='flex h-fit w-fit flex-row items-center justify-between rounded bg-background p-2 shadow-lg dark:bg-backgroundSecondaryDark'>
                    <h2 className=''>{item}</h2>
                    <button
                      onClick={() => {
                        remove(index)
                      }}>
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
                )),
              )}
          </div>
        </div>
      </div>
    </div>
  )
}
