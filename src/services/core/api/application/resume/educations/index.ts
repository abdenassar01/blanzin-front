import { apiFetch } from '@/services'
import { APIResponse, PagedAPIResponse } from '@/types'
import { Education } from './types'

const BASE_ENDPOINT = 'resume/education'

export async function fetchAllEducations(page: number = 0) {
  return await apiFetch<PagedAPIResponse<Education>>(
    `${BASE_ENDPOINT}/page/${page}`,
    {},
  )
}

export async function fetchEducationById(id: number) {
  return await apiFetch<APIResponse<Education>>(`${BASE_ENDPOINT}/${id}`, {})
}

export async function fetchEducationByResumeId(resumeId: number) {
  return await apiFetch<APIResponse<Education>>(
    `${BASE_ENDPOINT}/resume/${resumeId}`,
    {},
  )
}

export async function addNewEducation(education: Education) {
  return await apiFetch<APIResponse<Education>>(`${BASE_ENDPOINT}/`, {
    method: 'POST',
    data: education,
  })
}

export async function updateEducation(id: number, education: Education) {
  return await apiFetch<APIResponse<Education>>(`${BASE_ENDPOINT}/${id}`, {
    method: 'POST',
    data: education,
  })
}

export async function deleteEducation(id: number) {
  return await apiFetch<APIResponse<Education>>(`${BASE_ENDPOINT}/${id}`, {
    method: 'DELETE',
  })
}
