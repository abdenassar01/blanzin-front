'use server'

import { createI18nServer } from 'next-international/server'

export const { getI18n, getScopedI18n, getStaticParams, getCurrentLocale } =
  createI18nServer({
    en: async () => import('../../locales/en'),
    fr: async () => import('../../locales/fr'),
    ar: async () => import('../../locales/ar'),
  })

export type TranslateFunc = Awaited<ReturnType<typeof getI18n>>
