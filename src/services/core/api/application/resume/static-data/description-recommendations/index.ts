'use server'

import { apiFetch } from '@/services'
import { APIResponse, PagedAPIResponse } from '@/types'
import { DescriptionRecommendation } from './types'

const BASE_ENDPOINT = 'resume/description-recommendations'

export async function searchDescriptionRecommendations(
  page: number = 0,
  query: string = '',
) {
  return await apiFetch<PagedAPIResponse<DescriptionRecommendation>>(
    `${BASE_ENDPOINT}/page/${page}?query=${query}`,
    {},
  )
}

export async function addNewDescriptionRecommendation(
  descriptionRecommendation: DescriptionRecommendation,
) {
  return await apiFetch<APIResponse<DescriptionRecommendation>>(
    `${BASE_ENDPOINT}/`,
    {
      method: 'POST',
      data: descriptionRecommendation,
    },
  )
}

export async function updateDescriptionRecommendation(
  id: number,
  descriptionRecommendation: DescriptionRecommendation,
) {
  return await apiFetch<APIResponse<DescriptionRecommendation>>(
    `${BASE_ENDPOINT}/${id}`,
    {
      method: 'POST',
      data: descriptionRecommendation,
    },
  )
}

export async function deleteDescriptionRecommendation(id: number) {
  return await apiFetch<APIResponse<DescriptionRecommendation>>(
    `${BASE_ENDPOINT}/${id}`,
    {
      method: 'DELETE',
    },
  )
}
