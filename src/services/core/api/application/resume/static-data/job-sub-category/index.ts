'use server'

import { apiFetch } from '@/services'
import { APIResponse, PagedAPIResponse } from '@/types'
import { JobSubCategory } from './types'

const BASE_ENDPOINT = 'resume/sub-categories/jobs'

export async function searchJobSubCategoryByCategoryId(
  page: number = 0,
  categoryId: number,
  query: string = '',
) {
  return await apiFetch<PagedAPIResponse<JobSubCategory>>(
    `${BASE_ENDPOINT}/category/${categoryId}/page/${page}?query=${query}`,
    {},
  )
}

export async function addNewJobSubCategory(jobSubCategory: JobSubCategory) {
  return await apiFetch<APIResponse<JobSubCategory>>(`${BASE_ENDPOINT}/`, {
    method: 'POST',
    data: jobSubCategory,
  })
}

export async function updateJobSubCategory(
  id: number,
  jobSubCategory: JobSubCategory,
) {
  return await apiFetch<APIResponse<JobSubCategory>>(`${BASE_ENDPOINT}/${id}`, {
    method: 'POST',
    data: jobSubCategory,
  })
}

export async function deleteJobSubCategory(id: number) {
  return await apiFetch<APIResponse<JobSubCategory>>(`${BASE_ENDPOINT}/${id}`, {
    method: 'DELETE',
  })
}
