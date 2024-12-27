'use client'

import * as React from 'react'
import { Map } from '@/components'
import { Control, useController } from 'react-hook-form'
import { cn } from '@/utils'

type Props = {
  items: Date[]
  control: Control<any>
  name: string
}

export function InterviewDateSelector({ items, control, name }: Props) {
  const {
    field: { value, onChange },
  } = useController({ control, name, defaultValue: items[0].toLocaleString() })

  return (
    <ul className='mt-5 flex w-full gap-2 sm:flex-col'>
      <Map
        items={items}
        render={item => (
          <li
            className={cn(
              'flex w-[300px] cursor-pointer items-center justify-center rounded-lg border border-secondary p-3 px-5 text-white transition-all dark:border-border',
              value === item.toLocaleString()
                ? 'bg-secondary text-white dark:bg-border dark:text-secondary'
                : 'bg-backgroundSecondary text-secondary dark:bg-backgroundDark dark:text-border',
            )}>
            <button onClick={() => onChange(item.toLocaleString())}>
              {item.toLocaleString()}
            </button>
          </li>
        )}
      />
    </ul>
  )
}
