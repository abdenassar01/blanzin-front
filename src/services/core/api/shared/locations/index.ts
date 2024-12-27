import { apiFetch } from '@/services'
import { APIResponse, PagedAPIResponse } from '@/types'
import { ILocation } from './types'

const BASE_ENDPOINT = 'location'

export async function fetchAllLocations() {
  return await apiFetch<PagedAPIResponse<ILocation>>(`${BASE_ENDPOINT}/`, {})
}

export async function fetchLocationById(id: number) {
  return await apiFetch<APIResponse<ILocation>>(`${BASE_ENDPOINT}/${id}`, {})
}

export async function addLocation(location: ILocation) {
  return await apiFetch<APIResponse<ILocation>>(`${BASE_ENDPOINT}/`, {
    data: location,
    method: 'POST',
  })
}

export async function updateLocation(location: ILocation, id: number) {
  return await apiFetch<APIResponse<ILocation>>(`${BASE_ENDPOINT}/${id}`, {
    data: location,
    method: 'POST',
  })
}

export async function deleteLocation(id: number) {
  return await apiFetch<APIResponse<ILocation>>(`${BASE_ENDPOINT}/${id}`, {
    method: 'DELETE',
  })
}
