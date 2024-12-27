'use client'

import * as React from 'react'
import { Control, useController } from 'react-hook-form'
import { cn } from '@/utils'
import { FormConrolPopoverExplaination } from '../form-control-popover-explaination'

type Props = {
  control: Control<any>
  name: string
  label: string
  placeholder?: string
  className?: string
  wrapperClassName?: string
  defaultDate?: Date
  minimumDate?: Date
  maximumDate?: Date
  selectRange?: boolean
  activeDate?: Date
  popoverText?: string
}

export function DatePicker({
  label,
  name,
  control,
  defaultDate,
  className,
  wrapperClassName,
  popoverText,
}: Props) {
  const {
    fieldState: { error },
    field: { onChange },
  } = useController({
    control,
    name: name,
    defaultValue: defaultDate,
  })

  return (
    <div
      className={cn('relative flex w-full flex-col', wrapperClassName || '')}>
      <div className='flex'>
        <label
          htmlFor={name}
          className={cn('text-sm font-bold text-secondary dark:text-main')}>
          {label}
        </label>
        {popoverText && <FormConrolPopoverExplaination text={popoverText} />}
      </div>

      <input
        type='date'
        className={cn(
          ' w-full items-center justify-between rounded-lg bg-backgroundSecondary p-3 text-base text-[#A6A6A6] placeholder-[#A6A6A6] shadow-lg focus:border-none focus:outline-none dark:bg-backgroundDark dark:shadow-black sm:text-mb-xxs',
          className,
        )}
        name={name}
        id={name}
        onChange={e => {
          onChange(new Date(e.currentTarget.value))
        }}
      />
      <p className='h-[10px] text-xxs text-error'>{error?.message}</p>
    </div>
  )
}
