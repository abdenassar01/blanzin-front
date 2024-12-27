import { getToken } from 'next-auth/jwt'
import { createI18nMiddleware } from 'next-international/middleware'
import { NextRequest, NextResponse } from 'next/server'

const I18nMiddleware = createI18nMiddleware({
  locales: ['en', 'fr', 'ar'],
  defaultLocale: 'en',
})

async function authCheck(req: NextRequest): Promise<URL | null> {
  const { pathname } = req.nextUrl
  const segments = pathname.split('/')

  const session = await getToken({
    req,
    secret: process.env.AUTH_SECRET,
    raw: true,
  })

  if (segments.length > 2) {
    if (segments[2].startsWith('profile')) {
      if (!session) {
        return new URL(`/login?callback=${pathname}`, req.url)
      }
    } else if (
      segments[2].includes('login') ||
      segments[2].includes('register') ||
      segments[2].includes('reset')
    ) {
      if (session) return new URL('/profile', req.url)
    }
  }

  return null
}

export async function middleware(request: NextRequest) {
  const checkUrl = await authCheck(request)
  if (checkUrl) return NextResponse.redirect(checkUrl)

  return I18nMiddleware(request)
}

export const config = {
  matcher: ['/((?!api|shared|.*\\..*|_next|favicon.ico|robots.txt).*)'],
}
