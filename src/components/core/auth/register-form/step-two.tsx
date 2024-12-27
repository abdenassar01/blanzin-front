import { FieldText } from '@/components/common'
import { useScopedI18n } from '@/utils/locales/client'
import React from 'react'
import { Control } from 'react-hook-form'

type Props = {
  control: Control<any>
}

export function StepTwo({ control }: Props) {
  const t = useScopedI18n('forms')

  return (
    <div className='mt-5'>
      <FieldText
        control={control}
        label={t('firstname')}
        placeholder={t('firstname')}
        name='firstname'
      />
      <FieldText
        control={control}
        label={t('lastname')}
        placeholder={t('lastname')}
        name='lastname'
      />
      <FieldText
        control={control}
        label={t('username')}
        placeholder={t('username')}
        name='username'
      />
      <FieldText
        control={control}
        label={t('email')}
        placeholder={t('email')}
        name='mail'
      />
    </div>
  )
}
