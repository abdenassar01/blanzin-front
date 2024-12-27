import { apiFetch } from '@/services'
import { APIResponse, PagedAPIResponse } from '@/types'
import { LanguageGrade } from './types'

const BASE_ENDPOINT = 'resume/language-grades'

export async function fetchAllLanguageGrades() {
  return await apiFetch<PagedAPIResponse<LanguageGrade>>(
    `${BASE_ENDPOINT}/`,
    {},
  )
}

export async function addNewLanguageGrade(languageGrade: LanguageGrade) {
  return await apiFetch<APIResponse<LanguageGrade>>(`${BASE_ENDPOINT}/`, {
    method: 'POST',
    data: languageGrade,
  })
}

export async function updateLanguageGrade(
  id: number,
  languageGrade: LanguageGrade,
) {
  return await apiFetch<APIResponse<LanguageGrade>>(`${BASE_ENDPOINT}/${id}`, {
    method: 'POST',
    data: languageGrade,
  })
}

export async function deleteLanguageGrade(id: number) {
  return await apiFetch<APIResponse<LanguageGrade>>(`${BASE_ENDPOINT}/${id}`, {
    method: 'DELETE',
  })
}
