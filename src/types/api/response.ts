export interface APIResponse<T> {
  data: T
  message: string
  status: number
}

export interface PagedAPIResponse<T> {
  data: {
    content: T[]
    page: {
      size: number
      number: number
      totalElements: number
      totalPages: number
    }
  }
  message: string
  status: number
}
