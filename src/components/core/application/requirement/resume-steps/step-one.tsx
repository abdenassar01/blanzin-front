'use client';

import { DatePicker, Dropdown, FieldText, UploadAvatar } from '@/components';
import { useScopedI18n } from '@/utils/locales/client';
import React from 'react';
import { Control } from 'react-hook-form';

type Props = {
  control: Control<any>;
};

export function StepOne({ control }: Props) {
  const t = useScopedI18n('forms');

  return (
    <div className='overflow-y-scroll'>
      <UploadAvatar control={control} name='avatar' className='' />
      <div className='flex flex-wrap justify-between gap-2 sm:flex-col'>
        <FieldText
          className='w-[49%] sm:w-full'
          control={control}
          inputClassName='bg-background dark:bg-backgroundDark '
          label={t('lastname')}
          placeholder={t('lastname')}
          name='lastname'
        />
        <FieldText
          className='w-[49%] sm:w-full'
          control={control}
          inputClassName='bg-background dark:bg-backgroundDark'
          label={t('lastname')}
          placeholder={t('lastname')}
          name='firstname'
        />
        <FieldText
          className='w-[49%] sm:w-full'
          control={control}
          inputClassName='bg-background dark:bg-backgroundDark '
          label={t('email')}
          placeholder={t('email')}
          name='email'
        />

        <FieldText
          className='w-[49%] sm:w-full'
          control={control}
          inputClassName='bg-background dark:bg-backgroundDark'
          label={t('phone')}
          placeholder='0696788271'
          name='phone'
        />
        <FieldText
          className='w-[49%] sm:w-full'
          control={control}
          inputClassName='bg-background dark:bg-backgroundDark'
          label={t('placeBirth')}
          placeholder={t('placeBirth')}
          name='placeBirth'
        />
        <DatePicker
          control={control}
          label={t('dateBirth')}
          name='dateOfBirth'
          wrapperClassName='w-[49%] sm:w-full'
          className='bg-background dark:bg-backgroundDark'
        />
        <Dropdown
          control={control}
          name='country'
          items={['Morocco', 'Algeria', 'Germany']}
          extractDisplayMember={(item) => item}
          extractValueMember={(item) => item}
          label={t('country')}
          className='bg-background dark:bg-backgroundDark'
          dropdownClassName='bg-background dark:bg-backgroundDark'
          wrapperClassName='w-[49%] sm:w-full '
        />
      </div>
    </div>
  );
}
