'use client'

import { Session } from 'next-auth'
import { SessionProvider as SessionP } from 'next-auth/react'
import { PropsWithChildren } from 'react'

type SessionProviderProps = PropsWithChildren & { session: Session | null }

export const SessionProvider = ({
  children,
  session,
}: SessionProviderProps) => {
  return <SessionP session={session}>{children}</SessionP>
}
