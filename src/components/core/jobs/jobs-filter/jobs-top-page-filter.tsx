'use client'

import * as React from 'react'
import { useScopedI18n } from '@/utils/locales/client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { cn } from '@/utils'
import Link from 'next/link'

export function JobsTopPageFilter({
  tab,
}: {
  tab?: 'jobs' | 'training' | 'favourites'
}) {
  const t = useScopedI18n('job-filter')

  const { push } = useRouter()

  useEffect(() => {
    push(`/jobs?tab=${tab || 'jobs'}`)
  }, [tab])

  const tabs = [
    { label: t('jobs'), value: 'jobs' },
    { label: t('training'), value: 'training' },
    { label: t('favourite'), value: 'favourites' },
  ]

  return (
    <div className='container flex w-full justify-end'>
      <div className='dark:shadow-dark no-scrollbar flex gap-5 rounded-full bg-backgroundSecondary p-1 shadow-lg dark:bg-backgroundDark sm:max-w-full sm:gap-2 sm:overflow-x-scroll sm:whitespace-nowrap'>
        {React.Children.toArray(
          tabs.map(item => (
            <Link
              href={`/jobs?tab=${item.value}`}
              className={cn(
                'flex w-[200px] items-center justify-center rounded-full p-3 px-4',
                tab === item.value
                  ? 'bg-secondary dark:bg-main'
                  : 'bg-background dark:bg-backgroundSecondaryDark',
              )}>
              <div
                className={cn(
                  '',
                  tab === item.value
                    ? 'text-backgroundSecondary dark:text-backgroundSecondaryDark'
                    : 'text-secondary dark:text-main',
                )}>
                {item.label}
              </div>
            </Link>
          )),
        )}
      </div>
    </div>
  )
}
