'use server'

import { translateService } from '@/utils/helpers/translator'

export async function translateToDeutsch(
  text: string,
  lng: string = 'de',
): Promise<string> {
  return await translateService.translateText(text, lng)
}
