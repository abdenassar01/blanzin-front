'use client';

import { DatePicker, FieldText, UploadAvatarResemee } from '@/components';
import { useScopedI18n } from '@/utils/locales/client';
import React from 'react';
import { Control } from 'react-hook-form';

type Props = {
  control: Control<any>;
};

export function StepOne({ control }: Props) {
  const t = useScopedI18n('forms');
  const resumeT = useScopedI18n('resume');

  return (
    <div className='overflow-y-scroll'>
      <div className='my-3'>
        <div className='text-xm text-secondary'>
          {resumeT('work-experience')}
        </div>
        <div className='text-text dark:text-textdark'>
          {resumeT('step-one-text')}
        </div>
      </div>
      <UploadAvatarResemee control={control} name='avatar' className='' />
      <div className='my-4 flex flex-wrap justify-between gap-2 sm:flex-col'>
        <FieldText
          className='w-[47%] sm:w-full '
          control={control}
          inputClassName='bg-background dark:bg-backgroundSecondaryDark dark:shadow-black'
          label={t('firstname')}
          placeholder={t('firstname')}
          name='lastname'
        />
        <FieldText
          className='w-[47%] sm:w-full'
          control={control}
          inputClassName='bg-background dark:bg-backgroundSecondaryDark dark:shadow-black'
          label={t('lastname')}
          placeholder={t('lastname')}
          name='firstname'
        />
        <FieldText
          className='w-[47%] sm:w-full'
          control={control}
          inputClassName='bg-background dark:bg-backgroundSecondaryDark dark:shadow-black'
          label={t('email')}
          placeholder={t('email')}
          name='email'
        />

        <FieldText
          className='w-[47%] sm:w-full'
          control={control}
          inputClassName='bg-background dark:bg-backgroundSecondaryDark dark:shadow-black'
          label={t('phone')}
          placeholder='0696788271'
          name='phone'
        />
        <FieldText
          className='w-[47%] sm:w-full'
          control={control}
          inputClassName='bg-background dark:bg-backgroundSecondaryDark dark:shadow-black'
          label={t('placeBirth')}
          placeholder={t('placeBirth')}
          name='placeBirth'
        />
        <DatePicker
          control={control}
          label={t('dateBirth')}
          name='dateOfBirth'
          wrapperClassName='w-[47%] sm:w-full'
          className='bg-background dark:bg-backgroundSecondaryDark dark:shadow-black'
        />
      </div>
    </div>
  );
}
