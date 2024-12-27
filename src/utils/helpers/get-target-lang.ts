export const getTargetLang = (locale: string) => {
  switch (locale) {
    case 'en':
      return 'en-US'
    case 'ar':
      return 'ar'
    case 'fr':
      return 'fr'
  }
}
