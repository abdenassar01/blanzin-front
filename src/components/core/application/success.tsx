'use client'

import * as React from 'react'
import { useScopedI18n } from '@/utils/locales/client'
import { Button } from '@/components'

type Props = {
  message?: string
  callback?: () => void
}

export function Success({ message, callback }: Props) {
  const t = useScopedI18n('application-check')

  return (
    <div className='mt-6 text-center font-medium text-success'>
      <div className='text-xl'>{t('success-header')}</div>
      <div className='mt-5'>{message || t('success-text')}</div>
      <div className='mt-6 flex items-center justify-center'>
        <div className='w-[20%] text-white hover:text-secondary sm:w-full'>
          <Button theme='secondary' onClick={callback}>
            {t('apply')}
          </Button>
        </div>
      </div>
    </div>
  )
}
