'use client';

import { Button, FieldText, PhoneField, UploadAvatar } from '@/components';
import { useScopedI18n } from '@/utils/locales/client';
import React from 'react';
import { useForm } from 'react-hook-form';

type Props = {};

export default function AccountForm({}: Props) {
  const { control } = useForm();

  const t = useScopedI18n('forms');

  return (
    <div>
      <div className='mt-3 flex flex-wrap justify-between gap-2 overflow-y-scroll pb-3 sm:w-full sm:flex-col'>
        <div className='w-full'>
          <UploadAvatar control={control} name='avatar' />
        </div>
        <div className='flex w-full justify-between sm:flex-col'>
          <FieldText
            className='w-[47%] sm:w-full'
            control={control}
            inputClassName='bg-background dark:bg-backgroundSecondaryDark dark:shadow-black'
            label={t('username')}
            placeholder={t('username')}
            name='username'
          />
          <FieldText
            className='w-[47%] sm:w-full'
            control={control}
            inputClassName='bg-background dark:bg-backgroundSecondaryDark dark:shadow-black'
            label={t('email')}
            placeholder={t('email')}
            name='email'
          />
        </div>

        <PhoneField
          className='w-[47%] sm:w-full'
          control={control}
          label={t('phone')}
          name='phone'
          placeholder='6063962973'
        />
        <div className='mt-6 w-full'>
          <div className='w-[47%] sm:w-full'>
            <Button text='Submit' />
          </div>
        </div>
      </div>
    </div>
  );
}
