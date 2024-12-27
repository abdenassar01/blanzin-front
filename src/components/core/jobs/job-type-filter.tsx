'use client'

import * as React from 'react'
import { useScopedI18n } from '@/utils/locales/client'
import { Map } from '@/components'
import { cn } from '@/utils'

type Props = {
  value: string
  onChange: (value: string) => void
}

export function JobTypeFilter({ onChange, value }: Props) {
  const t = useScopedI18n('job-type')

  const tabs = [
    {
      value: '1;2',
      label: t('all'),
    },
    {
      value: '1',
      label: t('part-time'),
    },
    {
      value: '2',
      label: t('full-time'),
    },
  ]

  return (
    <div className='flex w-full gap-2 overflow-y-hidden'>
      <Map
        items={tabs}
        render={item => (
          <div
            key={`tab-item-${item.label}-${item.value}`}
            onClick={() => onChange(item.value)}
            className={cn(
              'flex w-full cursor-pointer justify-center rounded-full p-2',
              value === item.value
                ? 'bg-secondary text-white dark:bg-main'
                : 'bg-backgroundSecondary text-secondary dark:bg-backgroundDark dark:text-main',
            )}>
            {item.label}
          </div>
        )}
      />
    </div>
  )
}
