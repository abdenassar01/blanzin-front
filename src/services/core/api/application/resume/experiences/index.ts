import { apiFetch } from '@/services'
import { APIResponse, PagedAPIResponse } from '@/types'
import { Experience } from './types'

const BASE_ENDPOINT = 'resume/experience'

export async function fetchAllExperiences(page: number = 0) {
  return await apiFetch<PagedAPIResponse<Experience>>(
    `${BASE_ENDPOINT}/page/${page}`,
    {},
  )
}

export async function fetchExperienceById(id: number) {
  return await apiFetch<APIResponse<Experience>>(`${BASE_ENDPOINT}/${id}`, {})
}

export async function fetchExperienceByResumeId(resumeId: number) {
  return await apiFetch<APIResponse<Experience>>(
    `${BASE_ENDPOINT}/resume/${resumeId}`,
    {},
  )
}

export async function addNewExperience(experience: Experience) {
  console.log('EXPERIENCE: ', experience)
  const data = await apiFetch<APIResponse<Experience>>(`${BASE_ENDPOINT}/`, {
    method: 'POST',
    data: experience,
  })
  console.log('SAVED: ', data)

  return data
}

export async function updateExperience(id: number, experience: Experience) {
  return await apiFetch<APIResponse<Experience>>(`${BASE_ENDPOINT}/${id}`, {
    method: 'POST',
    data: experience,
  })
}

export async function deleteExperience(id: number) {
  return await apiFetch<APIResponse<Experience>>(`${BASE_ENDPOINT}/${id}`, {
    method: 'DELETE',
  })
}
