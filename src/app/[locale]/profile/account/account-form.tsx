'use client';

import { FieldText, PhoneField } from '@/components';
import { useScopedI18n } from '@/utils/locales/client';
import React from 'react';
import { useForm } from 'react-hook-form';

type Props = {};

export default function AccountForm({}: Props) {
  const { control } = useForm();

  const t = useScopedI18n('forms');

  return (
    <div>
      <div className='mt-3 flex  flex-wrap justify-between gap-2 pb-3 sm:w-full sm:flex-col'>
        <FieldText
          className='w-[47%] sm:w-full'
          control={control}
          inputClassName='bg-background dark:bg-backgroundSecondaryDark dark:shadow-black'
          label={t('firstname')}
          placeholder={t('firstname')}
          name='firstname'
        />
        <FieldText
          className='w-[47%] sm:w-full'
          control={control}
          inputClassName='bg-background dark:bg-backgroundSecondaryDark dark:shadow-black'
          label={t('lastname')}
          placeholder={t('lastname')}
          name='lastname'
        />
        <PhoneField
          className='w-[47%] sm:w-full'
          control={control}
          label='Label'
          name='phone'
          placeholder='6063962973'
        />
        <FieldText
          className='w-[47%] sm:w-full'
          control={control}
          inputClassName='bg-background dark:bg-backgroundSecondaryDark dark:shadow-black'
          label={t('lastname')}
          placeholder={t('lastname')}
          name='lastname'
        />
        <FieldText
          className='w-[47%] sm:w-full'
          control={control}
          inputClassName='bg-background dark:bg-backgroundSecondaryDark dark:shadow-black'
          label={t('lastname')}
          placeholder={t('lastname')}
          name='lastname'
        />
        <FieldText
          className='w-[47%] sm:w-full'
          control={control}
          inputClassName='bg-background dark:bg-backgroundSecondaryDark dark:shadow-black'
          label={t('lastname')}
          placeholder={t('lastname')}
          name='lastname'
        />
      </div>
    </div>
  );
}
