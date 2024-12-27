import * as React from 'react'
import { Control } from 'react-hook-form'
import { Button, YesNoQuestion } from '@/components'
import { useScopedI18n } from '@/utils/locales/client'

type Props = {
  control: Control<any>
  handler: () => void
}

export function SecondQuestions({ control, handler }: Props) {
  const t = useScopedI18n('application-check')

  return (
    <div className='flex flex-col gap-2'>
      <YesNoQuestion
        control={control}
        name='applicantLang'
        question={t('questions.german-certificate')}
      />
      <YesNoQuestion
        control={control}
        name='applicantBac'
        question={t('questions.bac')}
      />

      <div className='mt-12 flex items-center justify-center'>
        <div className='w-[20%] sm:w-full'>
          <Button text={t('check')} onClick={handler} />
        </div>
      </div>
    </div>
  )
}
