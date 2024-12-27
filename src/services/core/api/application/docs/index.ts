import { apiFetch } from '@/services'
import { APIResponse, PagedAPIResponse } from '@/types'
import { ApplicationDocument } from './types'

const BASE_ENDPOINT = 'docs'

export async function fetchAllDocumentsByApplicationFolder(
  page: number = 0,
  folderId: number,
) {
  // TODO: to be implemented in backend
  return await apiFetch<APIResponse<ApplicationDocument>>(
    `${BASE_ENDPOINT}/folder/${folderId}/${page}`,
    {},
  )
}

export async function fetchApplicationDocumentById(id: number) {
  return await apiFetch<APIResponse<ApplicationDocument>>(
    `${BASE_ENDPOINT}/${id}`,
    {},
  )
}

export async function addNewApplicationDocument(
  applicationDocument: ApplicationDocument,
) {
  return await apiFetch<APIResponse<ApplicationDocument>>(`${BASE_ENDPOINT}/`, {
    method: 'POST',
    data: applicationDocument,
  })
}

export async function updateApplicationDocument(
  id: number,
  applicationDocument: Omit<ApplicationDocument, 'uploadedAt'>,
) {
  // TODO: to be implimented
  return await apiFetch<APIResponse<ApplicationDocument>>(
    `${BASE_ENDPOINT}/${id}`,
    {
      method: 'POST',
      data: applicationDocument,
    },
  )
}

export async function deleteApplicationDocument(id: number) {
  // TODO: to be implimented

  return await apiFetch<APIResponse<ApplicationDocument>>(
    `${BASE_ENDPOINT}/${id}`,
    {
      method: 'DELETE',
    },
  )
}
