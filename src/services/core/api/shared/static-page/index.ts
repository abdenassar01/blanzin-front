import { apiFetch } from '@/services'
import { APIResponse, PagedAPIResponse } from '@/types'
import { StaticPage } from './types'

const BASE_ENDPOINT = 'static'

export async function fetchAllStaticPages(page: number = 0) {
  return await apiFetch<PagedAPIResponse<StaticPage>>(
    `${BASE_ENDPOINT}/page/${page}`,
    {},
  )
}

export async function fetchStaticPageBySlug(slug: string) {
  return await apiFetch<APIResponse<StaticPage>>(
    `${BASE_ENDPOINT}/slug/${slug}`,
    {},
  )
}

export async function fetchStaticPageById(id: number) {
  return await apiFetch<APIResponse<StaticPage>>(`${BASE_ENDPOINT}/${id}`, {})
}

export async function addStaticPage(staticPage: StaticPage) {
  return await apiFetch<APIResponse<StaticPage>>(`${BASE_ENDPOINT}/`, {
    data: staticPage,
    method: 'POST',
  })
}

export async function updateStaticPage(staticPage: StaticPage, id: number) {
  return await apiFetch<APIResponse<StaticPage>>(`${BASE_ENDPOINT}/${id}`, {
    data: staticPage,
    method: 'POST',
  })
}

export async function deleteStaticPage(id: number) {
  return await apiFetch<APIResponse<StaticPage>>(`${BASE_ENDPOINT}/${id}`, {
    method: 'DELETE',
  })
}
