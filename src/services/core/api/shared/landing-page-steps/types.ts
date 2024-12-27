import { Translated } from '@/types'

export interface LandingPageService extends Translated {
  id?: number
  slug: string
  picture: string
}
