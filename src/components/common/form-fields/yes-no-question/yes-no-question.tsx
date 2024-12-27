'use client'

import * as React from 'react'
import { Control, useController } from 'react-hook-form'
import { cn } from '@/utils'
import { useScopedI18n } from '@/utils/locales/client'

type Props = {
  control: Control<any>
  name: string
  question: string
  defaultValue?: boolean
}

export function YesNoQuestion({
  control,
  question,
  name,
  defaultValue,
}: Props) {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({
    control,
    name,
    defaultValue,
  })

  const t = useScopedI18n('forms')

  return (
    <div className='my-2 w-full'>
      <div className='flex flex-wrap items-center justify-between gap-2'>
        <h4 className='text-xl font-medium text-mainText dark:text-textdark sm:text-sm'>
          {question}
        </h4>
        <div className='flex items-center gap-2'>
          <label
            onClick={() => onChange('YES')}
            htmlFor={`${name}-1`}
            className={cn(
              'rounded-lg bg-backgroundSecondary p-2 px-4 shadow-lg dark:border-border dark:bg-backgroundDark dark:text-border sm:text-sm',
              value === 'YES'
                ? 'bg-secondary text-white dark:bg-border dark:text-secondary'
                : 'text-secondary',
            )}>
            <input
              type='radio'
              className='hidden'
              name={name}
              id={`${name}-1`}
            />
            {t('yes')}
          </label>
          <label
            onClick={() => onChange('NO')}
            htmlFor={`${name}-2`}
            className={cn(
              'rounded-lg bg-backgroundSecondary p-2 px-4 shadow-lg dark:border-border dark:bg-backgroundDark dark:text-border sm:text-sm',
              value === 'NO'
                ? 'bg-secondary text-white dark:bg-border dark:text-secondary'
                : 'text-secondary',
            )}>
            <input
              type='radio'
              className='hidden'
              name={name}
              id={`${name}-2`}
            />
            {t('no')}
          </label>
        </div>
      </div>
      <div className='text-xs text-error'>{error?.message}</div>
    </div>
  )
}
