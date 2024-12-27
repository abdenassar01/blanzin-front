import * as React from 'react'
import { Heading } from '@/components'
import { getScopedI18n } from '@/utils/locales/server'
import { LanguageSlider } from './language-slider'
import { ProfessionalLanguagesSlider } from './professional-languages-slider'

export async function CoursesOverview() {
  const t = await getScopedI18n('courses.overview')
  return (
    <div className='p-10 sm:p-4'>
      <div className='text-center text-4xl text-mainText dark:text-main'>
        <Heading heading={t('header')} />
      </div>
      <div className='text-center text-xxl text-mainText dark:text-main'>
        {t('secondary')}
      </div>
      <div className='mt-6 text-xbase font-bold text-secondary dark:text-main'>
        {t('slider-one-title')}
      </div>
      <LanguageSlider />
      <div className='mt-6 text-xbase font-bold text-secondary dark:text-main'>
        {t('slider-two-title')}
      </div>
      <ProfessionalLanguagesSlider />
    </div>
  )
}
