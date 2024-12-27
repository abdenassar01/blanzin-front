'use server'

import { apiFetch } from '@/services'
import { APIResponse } from '@/types'
import { CategoriesType } from './types'

const BASE_ENDPOINT = 'blogs/categories/'

export async function fetchAllBlogCategories() {
  return await apiFetch<APIResponse<CategoriesType[]>>(`${BASE_ENDPOINT}`, {})
}

export async function addNewBlogCategory(category: CategoriesType) {
  return await apiFetch<APIResponse<CategoriesType>>(`${BASE_ENDPOINT}`, {
    method: 'POST',
    data: category,
  })
}

export async function updateBlogCategory(category: CategoriesType, id: number) {
  return await apiFetch<APIResponse<CategoriesType>>(`${BASE_ENDPOINT}${id}`, {
    method: 'POST',
    data: category,
  })
}

export async function deleteBlogCategory(id: number) {
  return await apiFetch<APIResponse<CategoriesType>>(`${BASE_ENDPOINT}${id}`, {
    method: 'DELETE',
  })
}

export async function fetchBlogCategoryById(id: number) {
  return await apiFetch<APIResponse<CategoriesType>>(
    `${BASE_ENDPOINT}${id}`,
    {},
  )
}
