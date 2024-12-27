'use client'

import * as React from 'react'
import { useScopedI18n } from '@/utils/locales/client'

type Props = {
  message?: string
}

export function Error({ message }: Props) {
  const t = useScopedI18n('application-check')
  return (
    <div className='mt-6 text-center font-medium text-error'>
      <div className='text-xl'>{t('error-header')}</div>
      <div className='mt-5'>{message || t('error-text')}</div>
    </div>
  )
}
