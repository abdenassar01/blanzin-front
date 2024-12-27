'use client'

import { cn } from '@/utils'
import React, { HTMLProps } from 'react'
import { Control, Controller } from 'react-hook-form'
import { FormConrolPopoverExplaination } from '../form-control-popover-explaination'

type InputProps = HTMLProps<HTMLInputElement> & {
  control: Control<any>
  labelClassName?: string
  wrapperClassName?: string
  popoverText?: string
}

export function TextArea({
  control,
  name,
  label,
  placeholder,
  className,
  labelClassName,
  wrapperClassName,
  popoverText,
}: InputProps) {
  return (
    <Controller
      control={control}
      name={name ?? 'textaria'}
      render={({ field: { onChange, onBlur }, fieldState: { error } }) => (
        <div className={cn('flex w-[100%] flex-col ', wrapperClassName)}>
          <div className='flex'>
            <label
              htmlFor={name}
              className={cn('text-sm font-bold text-secondary dark:text-main')}>
              {label}
            </label>
            {popoverText && (
              <FormConrolPopoverExplaination text={popoverText} />
            )}
          </div>
          <textarea
            rows={4}
            id={name}
            onChange={onChange}
            onBlur={onBlur}
            style={{ borderRadius: 4 }}
            className={cn(
              'rounded-[10px] border-none bg-backgroundSecondary p-2 placeholder-[#A6A6A6] shadow-lg focus:outline-none dark:bg-backgroundSecondaryDark dark:shadow-black',
              className,
              error ? 'border-red-600' : '',
            )}
            placeholder={placeholder}
          />
          <p className='mb-[-1.667vw] h-[1.667vw] text-sm text-error'>
            {error?.message?.toString()}
          </p>
        </div>
      )}
    />
  )
}
