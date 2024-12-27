import * as deepl from 'deepl-node'
import { TargetLanguageCode } from 'deepl-node'

export interface Translation {
  translateText: (
    text: string,
    targetLang: TargetLanguageCode,
  ) => Promise<string>
}
export class TranslateService implements Translation {
  authKey = process?.env?.DEEPL_API_KEY || 'non-empty'
  translator: deepl.Translator

  constructor() {
    this.translator = new deepl.Translator(this.authKey)
  }

  translateText = async (text: string, targetLang: string): Promise<string> => {
    if (targetLang === 'en') {
      targetLang = 'en-US'
    }
    const results = await this.translator.translateText(
      text,
      null,
      targetLang as TargetLanguageCode,
    )
    return results.text
  }
}

const translateService = new TranslateService()

export async function mirrorObject(obj: any, targetLang: string) {
  const _obj = {}

  for (const [key, value] of Object?.entries(obj)) {
    if (typeof value === 'object') {
      // @ts-ignore
      _obj[key] = await mirrorObject(value, targetLang)
    } else {
      // @ts-ignore
      _obj[key] = await translateService.translateText(
        value?.toString() as string,
        targetLang,
      )
    }
  }

  return _obj
}

export { translateService }
