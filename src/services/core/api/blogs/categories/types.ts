import { Translated } from '@/types'

export interface CategoriesType extends Translated {
  id?: number
  link: string
  en: string
  fr: string
  ar: string
}
