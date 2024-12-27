'use client'

import * as React from 'react'
import { useScopedI18n } from '@/utils/locales/client'
import { usePathname } from '@/navigation'
import { cn } from '@/utils'
import Link from 'next/link'

export function AppointmentFilter() {
  const t = useScopedI18n('appointments')
  const pathname = usePathname()

  const [selected, setSelected] = React.useState<string>('interviews')

  const links = [
    { label: t('interviews'), value: 'interviews' },
    { label: t('coaching'), value: 'coaching' },
  ]

  return (
    <div className='text-base text-mainText dark:text-textdark'>
      <div
        className={cn(
          'flex rounded-full bg-backgroundSecondary p-1 shadow-md transition-all duration-500 dark:border-main dark:bg-backgroundDark',
        )}>
        {React.Children.toArray(
          links.map(item => (
            <Link
              onClick={() => setSelected(item.value)}
              href={`${pathname}?tab=${item.value}`}
              className={cn(
                'flex items-center gap-1 rounded-full bg-[transparent] p-3 text-text transition-all  dark:text-textdark',
                selected === item.value
                  ? 'bg-secondary text-white dark:bg-main'
                  : 'text-text  dark:text-textdark',
              )}>
              <span>{item.label}</span>
            </Link>
          )),
        )}
      </div>
    </div>
  )
}
