import { CategoriesType } from '@/services/core/api/blogs/categories/types'
import { Platform, Translated, TranslatedTitle } from '@/types'

export interface Blog extends Translated, TranslatedTitle {
  id?: number
  titleDe?: string
  de?: string
  slug: string
  createAt: Date
  updatedAt: Date
  image: string
  category: CategoriesType
  platform: Platform
}
