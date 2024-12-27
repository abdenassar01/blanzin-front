import { apiFetch } from '@/services'
import { APIResponse, PagedAPIResponse } from '@/types'
import { Blog } from './types'

export {
  addNewBlogCategory,
  fetchBlogCategoryById,
  fetchAllBlogCategories,
  deleteBlogCategory,
  updateBlogCategory,
} from './categories'

const BASE_ENDPOINT = 'blogs'

export async function fetchAllBlogs(page: number = 0) {
  return await apiFetch<PagedAPIResponse<Blog>>(
    `${BASE_ENDPOINT}/blanzin/page/${page}`,
    {},
  )
}

export async function fetchAllBlogsByCategoryLink(
  link: string,
  page: number = 0,
) {
  if (link === 'all') {
    return fetchAllBlogs(page)
  }
  return await apiFetch<PagedAPIResponse<Blog>>(
    `${BASE_ENDPOINT}/blanzin/page/${page}/category-link/${link}`,
    {},
  )
}

export async function addNewBlog(blog: Blog) {
  return await apiFetch<APIResponse<Blog>>(`${BASE_ENDPOINT}`, {
    method: 'POST',
    data: blog,
  })
}

export async function updateBlog(blog: Blog, id: number) {
  return await apiFetch<APIResponse<Blog>>(`${BASE_ENDPOINT}/update/${id}`, {
    method: 'POST',
    data: blog,
  })
}

export async function deleteBlog(id: number) {
  return await apiFetch<APIResponse<Blog>>(`${BASE_ENDPOINT}/${id}`, {
    method: 'DELETE',
  })
}

export async function fetchBlogById(id: number) {
  return await apiFetch<APIResponse<Blog>>(`${BASE_ENDPOINT}/${id}`, {})
}
export async function fetchBlogBySlug(slug: string) {
  return await apiFetch<APIResponse<Blog>>(`${BASE_ENDPOINT}/slug/${slug}`, {})
}

export async function searchBlogsByTitle(title: string, page: number = 0) {
  return await apiFetch<PagedAPIResponse<Blog>>(
    `${BASE_ENDPOINT}/title/${title}/${page}`,
    {},
  )
}
