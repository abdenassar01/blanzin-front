'use client'

import * as React from 'react'
import { useScopedI18n } from '@/utils/locales/client'
import { useRouter } from 'next/navigation'
import { cn } from '@/utils'

export function ProfileJobsTopPageFilter({
  tab,
}: {
  tab: 'jobs' | 'trainings' | 'favourites'
}) {
  const t = useScopedI18n('job-filter')

  const { push } = useRouter()

  const tabs = [
    { label: t('jobs'), value: 'jobs' },
    { label: t('training'), value: 'trainings' },
    { label: t('favourite'), value: 'favourites' },
  ]

  return (
    <div className='container flex w-full'>
      <div className='dark:shadow-dark no-scrollbar flex w-full gap-5 rounded-full p-1 sm:max-w-full sm:gap-1 sm:overflow-x-scroll sm:whitespace-nowrap'>
        {React.Children.toArray(
          tabs.map(item => (
            <button
              onClick={() =>
                push(`/profile/jobs?tab=${item.value}&page=1&type=1;2`)
              }
              className={cn(
                'items-center justify-center rounded-full p-3 px-4 sm:p-2 sm:px-3',
                tab === item.value
                  ? 'bg-secondary dark:bg-main'
                  : 'bg-backgroundSecondary dark:bg-backgroundDark',
              )}>
              <div
                className={cn(
                  'text-base sm:text-sm',
                  tab === item.value
                    ? 'text-backgroundSecondary dark:text-backgroundSecondaryDark'
                    : 'text-secondary dark:text-main',
                )}>
                {item.label}
              </div>
            </button>
          )),
        )}
      </div>
    </div>
  )
}
