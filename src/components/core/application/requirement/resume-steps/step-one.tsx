'use client'

import { DatePicker, FieldText, UploadAvatarResume } from '@/components'
import { useScopedI18n } from '@/utils/locales/client'
import React from 'react'
import { Control } from 'react-hook-form'

type Props = {
  control: Control<any>
}

export function StepOne({ control }: Props) {
  const t = useScopedI18n('forms')
  const resumeT = useScopedI18n('resume')

  return (
    <div className='no-scrollbar overflow-y-scroll'>
      <div className='my-3'>
        <div className='text-xm text-secondary dark:!text-main sm:text-sm sm:font-bold'>
          {resumeT('personal-infos')}
        </div>
      </div>
      <UploadAvatarResume control={control} name='avatar' className='' />
      <div className='my-4 flex flex-wrap justify-between gap-2 p-1 sm:flex-col'>
        <FieldText
          className='w-[47%] sm:w-full '
          control={control}
          label={t('firstname')}
          placeholder={t('firstname')}
          name='lastname'
        />

        <FieldText
          popoverText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repellendus nobis praesentium dicta aperiam saepe alias consequuntur debitis pariatur, maxime dolor quo mollitia corporis temporibus est. Ipsam magnam animi aperiam!'
          className='w-[47%] sm:w-full'
          control={control}
          label={t('lastname')}
          placeholder={t('lastname')}
          name='firstname'
        />
        <FieldText
          className='w-[47%] sm:w-full'
          control={control}
          label={t('email')}
          placeholder={t('email')}
          name='email'
        />

        <FieldText
          className='w-[47%] sm:w-full'
          control={control}
          label={t('phone')}
          placeholder='0696788271'
          name='phone'
        />
        <FieldText
          className='w-[47%] sm:w-full'
          control={control}
          label={t('placeBirth')}
          placeholder={t('placeBirth')}
          name='placeOfBirth'
        />
        <DatePicker
          control={control}
          label={t('dateBirth')}
          name='dateOfBirth'
          wrapperClassName='w-[47%] sm:w-full'
        />
      </div>
    </div>
  )
}
