import { apiFetch } from '@/services'
import { APIResponse } from '@/types'
import { IUser, ResponseUser } from './types'
import { RegisterFormValues } from '@/components/core/auth/register-form'
import { role } from '@stream-io/video-react-sdk'

const ENDPOINT = 'auth/'

export async function fetchAuthenticatedUser(token: string) {
  return await apiFetch<APIResponse<IUser>>(`${ENDPOINT}me`, {
    token: token,
    isSecure: true,
  })
}

export async function fetchUserByCredentials(phone: string, password: string) {
  const data = await apiFetch<APIResponse<ResponseUser>>(`${ENDPOINT}login`, {
    method: 'POST',
    data: { phone, password },
  })
  if (data.status !== 200) {
    throw new Error(data.message)
  }

  return data
}

export async function registerNewUser(user: RegisterFormValues) {
  console.log('API CALL: ')
  console.log('USER: ', user)

  const data = await apiFetch<APIResponse<ResponseUser>>(`${ENDPOINT}signup`, {
    method: 'POST',
    data: {
      ...user,
      roles: user.roles.map(item => ({ id: item === 'ROLE_TRAINEE' ? 1 : 2 })),
    },
  })
  console.log('DATA: ', data)

  if (data.status !== 200) {
    throw new Error(data.message)
  }

  return data
}
