import { apiFetch } from '@/services'
import { APIResponse, PagedAPIResponse } from '@/types'
import { CourseBooking } from './types'

const BASE_ENDPOINT = 'courses'

export async function fetchAllCoursesBookingsByUserId(userId: number) {
  return await apiFetch<APIResponse<CourseBooking>>(
    `${BASE_ENDPOINT}/user/${userId}`,
    {},
  )
}

export async function fetchCourseBookingById(id: number) {
  return await apiFetch<APIResponse<CourseBooking>>(
    `${BASE_ENDPOINT}/${id}`,
    {},
  )
}

export async function fetchCoursesBookingsByCourseId(
  courseId: number,
  page: number = 0,
) {
  return await apiFetch<PagedAPIResponse<CourseBooking>>(
    `${BASE_ENDPOINT}/${courseId}/page/${page}`,
    {},
  )
}

export async function addNewCourseBooking(booking: CourseBooking) {
  return await apiFetch<PagedAPIResponse<CourseBooking>>(`${BASE_ENDPOINT}/`, {
    method: 'POST',
    data: booking,
  })
}

export async function updateCourseBooking(id: number, booking: CourseBooking) {
  return await apiFetch<PagedAPIResponse<CourseBooking>>(
    `${BASE_ENDPOINT}/${id}`,
    {
      method: 'POST',
      data: booking,
    },
  )
}

export async function deleteCourseBooking(id: number) {
  return await apiFetch<PagedAPIResponse<CourseBooking>>(
    `${BASE_ENDPOINT}/${id}`,
    {
      method: 'DELETE',
    },
  )
}
