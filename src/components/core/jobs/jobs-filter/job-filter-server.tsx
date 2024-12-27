import * as React from 'react'
import { JobsFilter } from './jobs-filter'

export async function JobFilterServer() {
  const data = await fetch(
    'https://rest.arbeitsagentur.de/jobboerse/jobsuche-service/pc/v4/jobs?angebotsart=1&page=1&size=0&facetten=veroeffentlichtseit,arbeitszeit,arbeitsort,zeitarbeit,arbeitsort,branche,beruf,veroeffentlichtseit',
    { headers: { 'X-API-Key': 'jobboerse-jobsuche' } },
  ).then(res => res.json())

  return (
    <JobsFilter
      total={data.maxErgebnisse}
      cities={
        data.facetten?.arbeitsort?.counts &&
        Object.entries(data.facetten?.arbeitsort?.counts).map(item => ({
          city: item[0],
          count: item[1],
        }))
      }
      professions={
        data.facetten?.beruf?.counts &&
        Object.entries(data.facetten?.beruf?.counts).map(item => ({
          profession: item[0],
          count: item[1],
        }))
      }
    />
  )
}
