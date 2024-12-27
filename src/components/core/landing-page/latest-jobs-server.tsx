'use server'

import * as React from 'react'
import { JobMainCard, Map } from '@/components'
import { Suspense } from 'react'

type Props = {
  tab: 'trainings' | 'jobs'
}

export async function LatestJobsServer({ tab }: Props) {
  const dataJson = await fetch(
    `https://rest.arbeitsagentur.de/jobboerse/jobsuche-service/pc/v4/app/jobs?angebotsart=${tab === 'jobs' ? 1 : 4}`,
    { headers: { 'X-API-Key': 'jobboerse-jobsuche' } },
  ).then(res => res.json())

  return (
    <Suspense fallback={<div>loading...</div>}>
      {dataJson.stellenangebote && (
        <Map
          items={dataJson?.stellenangebote}
          render={item => <JobMainCard item={item} />}
        />
      )}
    </Suspense>
  )
}
