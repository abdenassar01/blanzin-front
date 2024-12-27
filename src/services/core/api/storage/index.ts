'use server'

import { apiFetch } from '@/services'
import { APIResponse } from '@/types'

const ENDPOINT = 'storage'

export async function uploadFile(file: FormData) {
  return await apiFetch<APIResponse<string>>(`${ENDPOINT}/upload`, {
    method: 'POST',
    isJsonContent: false,
    pureData: file,
  })
}
