'use client'

import { cn } from '@/utils'
import { useOutsideClick } from '@/utils/hooks/use-outside-click'
import { useScopedI18n } from '@/utils/locales/client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { Control, useController } from 'react-hook-form'

type Props<T> = {
  control: Control<any>
  label: string
  name: string
  placeholder?: string
  items: T[]
  className?: string
  labelClassName?: string
  wrapperClassName?: string
  dropdownClassName?: string
  defaultValue?: any
  extractDisplayMember: (item: T) => string
  extractValueMember: (item: T) => any
  filter?: boolean
  onSelectChange?: (item: T) => void
}

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
  dropdownClassName,
  filter = true,
  onSelectChange,
}: Props<T>) {
  const t = useScopedI18n('errors')

  const dropdownRef = useRef(null)
  const [openDropdown, setOpenDropdown] = useState<boolean>(false)
  const [displayString, setDisplayString] = useState<string>(
    defaultValue
      ? extractDisplayMember(defaultValue)
      : placeholder || label || '',
  )
  const [filteredItems, setFilteredItems] = useState<T[]>(items)

  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    control,
    name: name,
    defaultValue: defaultValue,
  })

  useEffect(() => {
    if (value === '') {
      setDisplayString('')
    }
  }, [value])

  useOutsideClick(dropdownRef, () => setOpenDropdown(false))

  return (
    <div
      ref={dropdownRef}
      className={cn('relative flex w-full flex-col', wrapperClassName || '')}>
      <label
        htmlFor={name}
        className={cn(
          'text-sm font-bold text-secondary dark:text-main',
          labelClassName || '',
        )}>
        {label}
      </label>
      <div
        onClick={() => setOpenDropdown(prev => !prev)}
        className={cn(
          'flex w-full items-center justify-between rounded-lg bg-backgroundSecondary text-base text-[#A6A6A6] placeholder-[#A6A6A6] shadow-lg dark:bg-backgroundDark dark:shadow-black sm:text-mb-xxs',
          className,
        )}>
        {filter ? (
          <input
            className='w-full rounded-md bg-[transparent] p-2 py-3 text-base normal-case text-secondary focus:border-none focus:outline-none dark:text-main'
            type='text'
            placeholder={placeholder}
            onFocus={() => setDisplayString('')}
            onChange={e => {
              setDisplayString(e.currentTarget.value)
              if (e.currentTarget.value === '') {
                setFilteredItems(items)
              } else {
                setFilteredItems(
                  items?.filter(item =>
                    extractDisplayMember(item)
                      .toLowerCase()
                      .startsWith(displayString.toLowerCase()),
                  ),
                )
              }
            }}
            value={displayString}
          />
        ) : (
          <div className='w-full rounded-md bg-[transparent] p-2 py-3 text-base normal-case text-secondary focus:border-none focus:outline-none dark:text-main'>
            {value
              ? extractDisplayMember(
                  items?.filter(el => extractValueMember(el) === value)[0],
                )
              : extractDisplayMember(items[0])}
          </div>
        )}
        <Image
          alt=''
          className='v-6 mx-2 w-6'
          src={require('@/assets/images/icons/arrow-down.svg')}
        />
      </div>
      <p className='text-xxs text-error sm:h-[4vw]'>
        {
          // @ts-ignore
          error?.message && t(error.message)
        }
      </p>
      <div
        className={cn(
          'absolute top-20 isolate z-10 w-full cursor-pointer overflow-x-hidden rounded-xl bg-backgroundSecondary shadow-md transition-all ease-out dark:bg-backgroundDark dark:shadow-[#dadadb21]',
          dropdownClassName,
          openDropdown ? 'max-h-[200px]' : 'h-0',
        )}>
        <div>
          {React.Children.toArray(
            filteredItems.map(item => (
              <div
                key={`dropdown-item-${Math.random()}`}
                onClick={() => {
                  setDisplayString(extractDisplayMember(item))
                  onChange(extractValueMember(item))
                  setOpenDropdown(false)
                  setFilteredItems(items)
                  onSelectChange && onSelectChange(item)
                }}
                className='flex w-full px-[24px] py-[14px] font-medium text-secondary hover:bg-[#f2f2f2] dark:text-textdark dark:hover:bg-[#808080]'>
                <div>{extractDisplayMember(item)}</div>
              </div>
            )),
          )}
        </div>
      </div>
    </div>
  )
}
