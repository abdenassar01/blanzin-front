import { apiFetch } from '@/services'
import { APIResponse } from '@/types'
import { LandingPageService } from './types'

const BASE_ENDPOINT = 'landing-services'

export async function fetchAllLandingPageServices() {
  return await apiFetch<APIResponse<LandingPageService[]>>(
    `${BASE_ENDPOINT}/`,
    {},
  )
}

export async function fetchAllLandingPageServicesBySlug(slug?: string) {
  if (!slug) return fetchAllLandingPageServices()
  return await apiFetch<APIResponse<LandingPageService[]>>(
    `${BASE_ENDPOINT}/${slug}`,
    {},
  )
}

export async function addLandingPageService(service: LandingPageService) {
  return await apiFetch<APIResponse<LandingPageService>>(`${BASE_ENDPOINT}/`, {
    data: service,
    method: 'POST',
  })
}

export async function updateLandingPageService(
  service: LandingPageService,
  id: number,
) {
  return await apiFetch<APIResponse<LandingPageService>>(
    `${BASE_ENDPOINT}/${id}`,
    {
      data: service,
      method: 'POST',
    },
  )
}

export async function deleteLandingPageService(id: number) {
  return await apiFetch<APIResponse<LandingPageService>>(
    `${BASE_ENDPOINT}/${id}`,
    {
      method: 'DELETE',
    },
  )
}
