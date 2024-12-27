import { APIError } from '@/types'

type Options = RequestInit & {
  data?: Record<any, any>
  pureData?: any
  params?: URLSearchParams
  serverSide?: boolean
  token?: string
  fullErrorResponse?: boolean
  isSecure?: boolean
  isJsonContent?: boolean
}

export const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_URL || ''

export async function apiFetch<T, E = APIError>(
  url: string,
  options: Options = {},
): Promise<T | never> {
  const {
    data,
    pureData,
    params,
    serverSide = true,
    token: initialToken,
    fullErrorResponse,
    isSecure,
    isJsonContent = true,
    ...restOptions
  } = options
  const newUrl = `${BASE_API_URL}/${url}${params ? `?${params.toString()}` : ''}`

  let headers: any = {
    ...options.headers,
  }

  if (isJsonContent) {
    headers = {
      'Content-type': 'application/json',
      ...headers,
    }
  }

  let token = initialToken

  /*   if (!token && isSecure) {
    token = serverSide
      ? await getServerSessionToken()
      : await getClientSessionToken()
  } */

  if (token) {
    headers = {
      ...headers,
      Authorization: `Bearer ${token}`,
    }
  }

  try {
    const result = await fetch(newUrl, {
      headers,
      body: pureData || (data ? JSON.stringify(data) : undefined),
      // credentials: 'include',
      ...restOptions,
    })

    const body = await result.json()

    if (!serverSide && !body?.success) {
      // eslint-disable-next-line no-throw-literal
      throw {
        ...(fullErrorResponse && body),
        error: body?.error || body?.message || 'Something went wrong!',
      } as E
    }

    return {
      status: result.status,
      ...body,
    }
  } catch (e: any) {
    // eslint-disable-next-line no-throw-literal
    throw { ...e } as E
  }
}

function getCookie(name: string) {
  const cookieArr = document.cookie.split(';')

  for (let i = 0; i < cookieArr.length; i++) {
    const cookiePair = cookieArr[i].split('=')

    if (name === cookiePair[0].trim()) {
      return decodeURIComponent(cookiePair[1])
    }
  }

  return null
}
