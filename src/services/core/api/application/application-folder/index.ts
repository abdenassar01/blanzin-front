import { apiFetch } from '@/services'
import { APIResponse, PagedAPIResponse } from '@/types'
import { ApplicationFolder } from './types'

const BASE_ENDPOINT = 'application'

export async function fetchAllApplicationFolders(page: number = 0) {
  // TODO: to be implemented in backend
  return await apiFetch<PagedAPIResponse<ApplicationFolder>>(
    `${BASE_ENDPOINT}/page/${page}`,
    {},
  )
}

export async function fetchApplicationFolderByUserId(userId: number) {
  return await apiFetch<APIResponse<ApplicationFolder>>(
    `${BASE_ENDPOINT}/user/${userId}`,
    {},
  )
}

export async function fetchApplicationFolderById(id: number) {
  return await apiFetch<APIResponse<ApplicationFolder>>(
    `${BASE_ENDPOINT}/${id}`,
    {},
  )
}

export async function addNewApplicationFolder(
  applicationFolder: ApplicationFolder,
) {
  return await apiFetch<APIResponse<ApplicationFolder>>(`${BASE_ENDPOINT}/`, {
    method: 'POST',
    data: applicationFolder,
  })
}

export async function updateApplicationFolderStatus(
  id: number,
  status: 'AWAITING_INTERVIEW' | 'AWAITING_DECISION' | 'ACCEPTED' | 'REJECTED',
) {
  return await apiFetch<APIResponse<ApplicationFolder>>(
    `${BASE_ENDPOINT}/${id}/status?status=${status}`,
    {
      method: 'POST',
    },
  )
}

export async function updateApplicationFolder(
  id: number,
  ApplicationFolder: ApplicationFolder,
) {
  return await apiFetch<APIResponse<ApplicationFolder>>(
    `${BASE_ENDPOINT}/${id}`,
    {
      method: 'POST',
      data: ApplicationFolder,
    },
  )
}

export async function deleteApplicationFolder(id: number) {
  // TODO: to be implimented

  return await apiFetch<APIResponse<ApplicationFolder>>(
    `${BASE_ENDPOINT}/${id}`,
    {
      method: 'DELETE',
    },
  )
}
