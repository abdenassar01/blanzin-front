import * as React from 'react'
import { JobMainCard, Map, Pagination } from '@/components'
import { getScopedI18n } from '@/utils/locales/server'
import { JOBS_PAGE_SIZE } from '@/configs/jobs'

type Props = {
  jobs: any
  tab: string
  page: string
  locale: string
  totalCount: number
}

export async function JobsList({ jobs, tab, page, locale, totalCount }: Props) {
  const t = await getScopedI18n('job-filter')

  return (
    <>
      <div className='min-h-[90vh] w-full'>
        <div className='mb-5 font-bold text-mainText dark:text-main'>
          {t('total', { total: totalCount || '0' })}
        </div>
        <div className='flex flex-col gap-10 '>
          {jobs ? (
            <>
              <Map items={jobs} render={item => <JobMainCard item={item} />} />
              <Pagination
                currentPage={parseInt(page, 10) || 1}
                total={totalCount}
                size={JOBS_PAGE_SIZE}
              />
            </>
          ) : (
            <div className='w-full text-center'>{"can't find more jobs"}</div>
          )}
        </div>
      </div>
    </>
  )
}
