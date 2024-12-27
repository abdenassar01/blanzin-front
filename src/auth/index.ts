import { NextAuthConfig } from 'next-auth'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { UserType } from '@/types'
import { JWT } from 'next-auth/jwt'
import { createUser } from '@/lib'
import { fetchAuthenticatedUser, fetchUserByCredentials } from '@/services'
import { IUser } from '@/services/core/api/auth/types'

declare module 'next-auth' {
  interface User extends UserType {}
}

declare module 'next-auth/jwt' {
  interface JWT extends UserType {}
}

declare module 'next-auth' {
  interface User extends UserType {}
  interface Session {
    name: string
    user?: IUser
    token?: string
  }
}

export const authOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        phone: { type: 'text' },
        password: { type: 'text' },
      },
      id: 'credentials',
      name: 'Credentials',
      type: 'credentials',
      authorize: async (credentials, req) => {
        if (credentials === null) return null
        const data = await fetchUserByCredentials(
          credentials?.phone?.toString() || '',
          credentials?.password?.toString() || '',
        )

        return createUser(data.data)
      },
    }),
  ],

  callbacks: {
    async session({ token, session }) {
      const res = await fetchAuthenticatedUser(token.token || '')

      session.user = {
        ...res.data,
        roles: [],
        token: token.token,
        id: res.data.id?.toString() || '',
        emailVerified: new Date(),
      }

      return session
    },
    async jwt({ token, user, account, trigger }) {
      if (account && (trigger === 'signIn' || trigger === 'signUp')) {
        token.token = user.token
      }
      return token
    },
  },

  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: '/login',
    error: '/auth/error',
  },
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions)
