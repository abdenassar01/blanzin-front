import { DescriptionField, LanguagesField } from '@/components'
import { searchProfessionalSkillRecommendations } from '@/services'
import { Resume } from '@/services/core/api/application/resume/types'
import { useScopedI18n } from '@/utils/locales/client'
import React from 'react'
import { Control, useWatch } from 'react-hook-form'

type Props = {
  control: Control<any>
}

export function StepFour({ control }: Props) {
  const { personalSkills } = useWatch({ control })
  const t = useScopedI18n('forms')
  const suggestionsT = useScopedI18n('suggestions')
  const resumeT = useScopedI18n('resume')

  const { languagesWithGrades } = useWatch<Resume>({ control })

  return (
    <div className='no-scrollbar mb-10 flex flex-col gap-4 overflow-y-scroll p-1'>
      <div className='my-3'>
        <div className='text-xm text-secondary dark:text-main'>
          {resumeT('skills')}
        </div>
        <div className='text-text dark:text-textdark'>
          {resumeT('step-three-text')}
        </div>
      </div>
      <DescriptionField
        control={control}
        label={t('personal-skills')}
        name='personalSkills'
        items={personalSkills}
        fetchData={filter => searchProfessionalSkillRecommendations(0, filter)}
        placeholder={suggestionsT('free-text')}
        suggestionsLabel={suggestionsT('skill')}
        valuesLabel={suggestionsT('skill-value')}
      />
      <LanguagesField
        items={languagesWithGrades}
        extractDisplayString={item => item}
        extractLanguage={item => item.split(' ')[0]}
        control={control}
        name='languagesWithGrades'
        label={t('language-skills')}
      />
    </div>
  )
}
