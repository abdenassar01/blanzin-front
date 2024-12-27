import { Platform, TranslatedTitle, Translated } from '@/types'

export interface StaticPage extends Translated, TranslatedTitle {
  id?: number
  slug: string
  titleDe?: string
  de?: string
  platform: Platform
}
