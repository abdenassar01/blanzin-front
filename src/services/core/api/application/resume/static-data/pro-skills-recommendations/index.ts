'use server'

import { apiFetch } from '@/services'
import { APIResponse, PagedAPIResponse } from '@/types'
import { ProfessionalSkillRecommendation } from './types'

const BASE_ENDPOINT = 'resume/pro-skills-recommendations'

export async function searchProfessionalSkillRecommendations(
  page: number = 0,
  query: string = '',
) {
  const data = await apiFetch<
    PagedAPIResponse<ProfessionalSkillRecommendation>
  >(`${BASE_ENDPOINT}/page/${page}?query=${query}`, {})

  console.log('DATA: ', JSON.stringify(data))
  return data
}

export async function fetchAllProfessionalSkillRecommendations() {
  return await apiFetch<PagedAPIResponse<ProfessionalSkillRecommendation>>(
    `${BASE_ENDPOINT}/`,
    {},
  )
}

export async function addNewProfessionalSkillRecommendation(
  professionalSkillRecommendation: ProfessionalSkillRecommendation,
) {
  return await apiFetch<APIResponse<ProfessionalSkillRecommendation>>(
    `${BASE_ENDPOINT}/`,
    {
      method: 'POST',
      data: professionalSkillRecommendation,
    },
  )
}

export async function updateProfessionalSkillRecommendation(
  id: number,
  professionalSkillRecommendation: ProfessionalSkillRecommendation,
) {
  return await apiFetch<APIResponse<ProfessionalSkillRecommendation>>(
    `${BASE_ENDPOINT}/${id}`,
    {
      method: 'POST',
      data: professionalSkillRecommendation,
    },
  )
}

export async function deleteProfessionalSkillRecommendation(id: number) {
  return await apiFetch<APIResponse<ProfessionalSkillRecommendation>>(
    `${BASE_ENDPOINT}/${id}`,
    {
      method: 'DELETE',
    },
  )
}
