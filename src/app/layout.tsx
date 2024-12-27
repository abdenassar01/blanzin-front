import { SessionProvider } from '@/utils/session'
import React from 'react'
import { auth } from './api/auth/[...nextauth]/route'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <SessionProvider session={await auth()}>{children}</SessionProvider>
}
