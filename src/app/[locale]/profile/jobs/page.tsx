import { JobFilterServer, JobsList, Loader } from '@/components'
import React, { Suspense } from 'react'
import { ProfileJobsTopPageFilter } from '@/components/core/jobs/jobs-filter/profile-jobs-top-page-filter'
import { JOBS_PAGE_SIZE } from '@/configs/jobs'

type Props = {
  searchParams: Promise<{
    tab: 'jobs' | 'trainings' | 'favourites'
    page?: string
    city?: string
    profession?: string
    published?: string
    type?: string
  }>
  params: Promise<{ locale: string }>
}

export default async function JobsPage(props: Props) {
  const params = await props.params

  const { locale } = params

  const searchParams = await props.searchParams

  const {
    tab = 'jobs',
    page = '1',
    city,
    profession,
    published,
    type = '1;2',
  } = searchParams

  const dataJson = await fetch(
    `https://rest.arbeitsagentur.de/jobboerse/jobsuche-service/pc/v4/app/jobs?angebotsart=${tab === 'jobs' ? 1 : 4}${city && city !== 'German wide' ? `&wo=${city}` : ''}${published ? `&veroeffentlichtseit=${published}` : ''}&pav=false${type === '1;2' ? '' : `&befristung=${type}`}${profession ? `&beruf=${profession}` : ''}&page=${page}&size=${JOBS_PAGE_SIZE}&facetten=false`,
    { headers: { 'X-API-Key': 'jobboerse-jobsuche' } },
  ).then(res => res.json())

  return (
    <div className='mt-12 bg-background bg-contain bg-no-repeat py-8 dark:bg-backgroundSecondaryDark sm:mt-0 sm:py-0'>
      <ProfileJobsTopPageFilter tab={tab} />
      <div className='container mt-10 flex items-center justify-center sm:mt-0'>
        <div className='w-full'>
          <div className='flex w-full flex-row-reverse items-start gap-8 sm:flex-col sm:gap-2'>
            <Suspense
              key={`job-list-loader-${dataJson.maxErgebnisse}`}
              fallback={
                <div className='flex w-full items-center justify-center py-10'>
                  <div className='w-full max-w-40'>
                    <Loader />
                  </div>
                </div>
              }>
              <JobFilterServer />
              <JobsList
                totalCount={dataJson.maxErgebnisse}
                jobs={dataJson.stellenangebote}
                tab={tab}
                page={page}
                locale={locale}
              />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}
