'use client'

import { Button, FieldText, PhoneField } from '@/components'
import { useScopedI18n } from '@/utils/locales/client'
import React from 'react'
import { useForm } from 'react-hook-form'

export function AccountForm() {
  const { control, watch } = useForm({
    defaultValues: {
      professionalSkills: [],
      tools: [],
      phone: '',
      email: '',
    },
  })

  const t = useScopedI18n('forms')
  const buttonsT = useScopedI18n('button')

  return (
    <div>
      <div className='mt-6 flex flex-wrap justify-between gap-3 sm:flex-col'>
        <FieldText
          className='w-[32%] min-w-[300px] sm:w-full'
          control={control}
          label={t('username')}
          placeholder={t('username')}
          name='username'
        />
        <FieldText
          className='w-[32%] min-w-[300px] sm:w-full'
          control={control}
          label={t('email')}
          placeholder={t('email')}
          name='email'
        />
        <PhoneField
          className='w-[32%] min-w-[300px] sm:w-full'
          control={control}
          label={t('phone')}
          name='phone'
          placeholder='6063962973'
        />

        <div className='mt-6 flex w-full justify-end'>
          <div className='w-[20%] sm:w-[50%]'>
            <Button text={buttonsT('apply')} />
          </div>
        </div>
      </div>
    </div>
  )
}
