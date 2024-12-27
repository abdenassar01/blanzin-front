import { apiFetch } from '@/services'
import { APIResponse, PagedAPIResponse } from '@/types'
import { LanguageWithGrade } from './types'

const BASE_ENDPOINT = 'resume/languages-with-grades'

export async function fetchAllLanguagesWithGrades(page: number = 0) {
  return await apiFetch<PagedAPIResponse<LanguageWithGrade>>(
    `${BASE_ENDPOINT}/page/${page}`,
    {},
  )
}

export async function fetchLanguagesWithGradesByResume(
  page: number = 0,
  resumeId: number,
) {
  return await apiFetch<PagedAPIResponse<LanguageWithGrade>>(
    `${BASE_ENDPOINT}/resume/${resumeId}/page/${page}`,
    {},
  )
}

export async function addNewLanguageWithGrade(
  languageWithGrade: LanguageWithGrade,
) {
  return await apiFetch<APIResponse<LanguageWithGrade>>(`${BASE_ENDPOINT}/`, {
    method: 'POST',
    data: languageWithGrade,
  })
}

export async function updateLanguageWithGrade(
  id: number,
  languageWithGrade: LanguageWithGrade,
) {
  return await apiFetch<APIResponse<LanguageWithGrade>>(
    `${BASE_ENDPOINT}/${id}`,
    {
      method: 'POST',
      data: languageWithGrade,
    },
  )
}

export async function deleteLanguageWithGrade(id: number) {
  return await apiFetch<APIResponse<LanguageWithGrade>>(
    `${BASE_ENDPOINT}/${id}`,
    {
      method: 'DELETE',
    },
  )
}
