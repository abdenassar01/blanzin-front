import { TranslatedTitle, Translated } from '@/types'

export interface ServicePage extends Translated, TranslatedTitle {
  id?: number
  slug: string
  bulletPointsEn: string
  bulletPointsFr: string
  bulletPointsAr: string
  danger: boolean
}
