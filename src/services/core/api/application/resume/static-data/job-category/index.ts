'use server'

import { apiFetch } from '@/services'
import { APIResponse, PagedAPIResponse } from '@/types'
import { JobCategory } from './types'

const BASE_ENDPOINT = 'resume/categories/jobs'

export async function searchJobCategories(
  page: number = 0,
  query: string = '',
) {
  return await apiFetch<PagedAPIResponse<JobCategory>>(
    `${BASE_ENDPOINT}/page/${page}?query=${query}`,
    {},
  )
}

export async function addNewJobCategory(jobCategory: JobCategory) {
  return await apiFetch<APIResponse<JobCategory>>(`${BASE_ENDPOINT}/`, {
    method: 'POST',
    data: jobCategory,
  })
}

export async function updateJobCategory(id: number, jobCategory: JobCategory) {
  return await apiFetch<APIResponse<JobCategory>>(`${BASE_ENDPOINT}/${id}`, {
    method: 'POST',
    data: jobCategory,
  })
}

export async function deleteJobCategory(id: number) {
  return await apiFetch<APIResponse<JobCategory>>(`${BASE_ENDPOINT}/${id}`, {
    method: 'DELETE',
  })
}
