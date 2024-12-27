import { useSession as useAuthSession } from 'next-auth/react'
import { tokenFromAuthSession } from './helper'
import { IUser } from '@/services/core/api/auth/types'

export type Session = {
  status: 'unauthenticated' | 'loading' | 'authenticated'
  token?: string
  user?: IUser
  update: (data?: any) => void
}

export const useSession = (): Session => {
  const { data, status, update } = useAuthSession()

  const newData: any = data

  return {
    status,
    user: newData?.user?.user,
    token: tokenFromAuthSession(data?.user),
    update,
  }
}
