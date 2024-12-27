import { apiFetch } from '@/services'
import { APIResponse, PagedAPIResponse } from '@/types'
import { Language } from './types'

const BASE_ENDPOINT = 'resume/languages'

export async function searchLanguages(page: number = 0, query: string = '') {
  return await apiFetch<PagedAPIResponse<Language>>(
    `${BASE_ENDPOINT}/page/${page}?query=${query}`,
    {},
  )
}

export async function addNewLanguage(language: Language) {
  return await apiFetch<APIResponse<Language>>(`${BASE_ENDPOINT}/`, {
    method: 'POST',
    data: language,
  })
}

export async function updateLanguage(id: number, language: Language) {
  return await apiFetch<APIResponse<Language>>(`${BASE_ENDPOINT}/${id}`, {
    method: 'POST',
    data: language,
  })
}

export async function deleteLanguage(id: number) {
  return await apiFetch<APIResponse<Language>>(`${BASE_ENDPOINT}/${id}`, {
    method: 'DELETE',
  })
}
