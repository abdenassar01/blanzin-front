import { apiFetch } from '@/services'
import { APIResponse, PagedAPIResponse } from '@/types'
import { ServicePage } from './types'

const BASE_ENDPOINT = 'pages/services'

export async function fetchAllServicePages(page: number = 0) {
  return await apiFetch<PagedAPIResponse<ServicePage>>(
    `${BASE_ENDPOINT}/page/${page}`,
    {},
  )
}

export async function fetchServicePageBySlug(slug: string) {
  return await apiFetch<APIResponse<ServicePage>>(
    `${BASE_ENDPOINT}/slug/${slug}`,
    {},
  )
}

export async function fetchServicePageById(id: number) {
  return await apiFetch<APIResponse<ServicePage>>(`${BASE_ENDPOINT}/${id}`, {})
}

export async function addServicePage(ServicePage: ServicePage) {
  return await apiFetch<APIResponse<ServicePage>>(`${BASE_ENDPOINT}/`, {
    data: ServicePage,
    method: 'POST',
  })
}

export async function updateServicePage(ServicePage: ServicePage, id: number) {
  return await apiFetch<APIResponse<ServicePage>>(`${BASE_ENDPOINT}/${id}`, {
    data: ServicePage,
    method: 'POST',
  })
}

export async function deleteServicePage(id: number) {
  return await apiFetch<APIResponse<ServicePage>>(`${BASE_ENDPOINT}/${id}`, {
    method: 'DELETE',
  })
}
