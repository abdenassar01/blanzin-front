'use server'

import { apiFetch } from '@/services'
import { APIResponse } from '@/types'
import { Resume } from './types'

const BASE_ENDPOINT = 'resume'

export async function fetchAllResumes(page: number = 0) {
  return await apiFetch<APIResponse<Resume>>(
    `${BASE_ENDPOINT}/page/${page}`,
    {},
  )
}

export async function fetchResumeById(id: number) {
  return await apiFetch<APIResponse<Resume>>(`${BASE_ENDPOINT}/${id}`, {})
}

export async function addNewResume(resume: Resume) {
  return await apiFetch<APIResponse<Resume>>(`${BASE_ENDPOINT}/`, {
    method: 'POST',
    data: resume,
  })
}

export async function updateResume(id: number, resume: Resume) {
  return await apiFetch<APIResponse<Resume>>(`${BASE_ENDPOINT}/${id}`, {
    method: 'POST',
    data: resume,
  })
}

export async function deleteResume(id: number) {
  return await apiFetch<APIResponse<Resume>>(`${BASE_ENDPOINT}/${id}`, {
    method: 'DELETE',
  })
}
