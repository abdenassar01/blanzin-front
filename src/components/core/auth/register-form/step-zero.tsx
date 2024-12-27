import { ProfileTypeSelector } from '@/components/common'
import { useScopedI18n } from '@/utils/locales/client'
import React from 'react'
import { Control } from 'react-hook-form'

type Props = {
  control: Control<any>
}

export function StepZero({ control }: Props) {
  const t = useScopedI18n('forms')

  return (
    <div>
      <ProfileTypeSelector name='role' control={control} label={t('profile')} />
    </div>
  )
}
