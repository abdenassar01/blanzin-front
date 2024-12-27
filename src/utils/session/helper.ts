import { authOptions, auth } from '@/app/api/auth/[...nextauth]/route'
import jwt from 'jwt-simple'
import * as NextAuth from 'next-auth'
import { getSession } from 'next-auth/react'
import { jwtDecode } from 'jwt-decode'
import { UserType } from '@/types'

const secret = process.env.AUTH_SECRET || ''

export const tokenFromAuthSession = (authUser: any): string | undefined => {
  if (!authUser) return undefined

  return jwt.encode(authUser, secret)
}

export const userFromToken = (token: string): UserType | undefined => {
  if (!token) return undefined

  const decodedToken = jwtDecode(token) as any

  return decodedToken?.user
}

export const getServerSessionToken = async (): Promise<string | undefined> => {
  // @ts-ignore
  const session = await NextAuth?.getServerSession(authOptions)

  if (!session) return undefined

  return tokenFromAuthSession(session.user)
}

export const getClientSessionToken = async (): Promise<string | undefined> => {
  const session = await getSession()

  if (!session) return undefined

  return tokenFromAuthSession(session.user)
}
