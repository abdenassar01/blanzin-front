'use client'

import { Button, FieldText, Heading } from '@/components'
import { useScopedI18n } from '@/utils/locales/client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { isMobile } from 'react-device-detect'

export function UpdatePassword() {
  const { control, handleSubmit } = useForm()
  const t = useScopedI18n('security')

  function onSubmit(data: any) {
    console.log('data', data)
  }

  return (
    <div className=''>
      <div className='mb-6 text-xxm'>
        <Heading heading={t('title')} />
      </div>
      <div className='flex flex-wrap justify-between gap-3 sm:flex-col'>
        <FieldText
          control={control}
          label={t('old')}
          placeholder={t('old')}
          name='oldPassword'
          type='password'
          className='w-[32%] min-w-[300px] sm:w-full'
        />
        <FieldText
          control={control}
          label={t('new')}
          placeholder={t('new')}
          name='newPassword'
          type='password'
          className='w-[32%] min-w-[300px] sm:w-full'
        />
        <FieldText
          control={control}
          label={t('confirm-new')}
          placeholder={t('confirm-new')}
          name='confirmPassword'
          type='password'
          className='w-[32%] min-w-[300px] sm:w-full'
        />
        <div className='flex w-full justify-end'>
          <Button
            width={isMobile ? '100%' : '20%'}
            text={t('submit')}
            onClick={handleSubmit(onSubmit)}
          />
        </div>
      </div>
    </div>
  )
}
