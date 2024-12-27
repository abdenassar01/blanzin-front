import { UserType } from '@/types'

export interface CourseBooking {
  id?: number
  courseId: number
  bookingDate: Date
  expirationDate: Date
  user: UserType
}
