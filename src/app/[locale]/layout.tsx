import type { Metadata } from 'next'
import 'rodal/lib/rodal.css'
import '../globals.css'
import { InternationalisationParams } from '@/types'
import { cn } from '@/utils'
import { I18nProvider } from '@/utils/locales/provider'
import { ThemeProvider } from 'next-themes'
import React, { ReactNode } from 'react'
import { Toast } from '@/components'

export const metadata: Metadata = {
  title: 'Blanzin',
  description: 'blanzin web app',
}

export default async function RootLayout(
  props: Readonly<
    {
      children: ReactNode
    } & InternationalisationParams
  >,
) {
  const params = await props.params

  const { locale } = params

  const { children } = props

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={cn(locale === 'ar' ? 'font-cairo' : 'font-montserrat')}>
        <Toast />
        <I18nProvider locale={locale}>
          <ThemeProvider attribute='class'>
            <main className='overflow-x-hidden bg-background transition-all dark:bg-backgroundSecondaryDark'>
              {children}
            </main>
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  )
}
