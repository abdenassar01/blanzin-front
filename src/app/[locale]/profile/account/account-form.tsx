'use client';

import { Button, FieldText, PhoneField } from '@/components';
import { useScopedI18n } from '@/utils/locales/client';
import React from 'react';
import { useForm } from 'react-hook-form';

export default function AccountForm() {
  const { control } = useForm();

  const t = useScopedI18n('forms');
  const buttonsT = useScopedI18n('button');

  return (
    <div>
      <div className='mt-3 flex flex-wrap justify-between gap-2 pb-3 sm:w-full sm:flex-col'>
        <div className='mt-6 flex w-full justify-between sm:flex-col'>
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
          inputClassName='bg-background'
          wrapperClassName='bg-backgroundSecondary'
          className='w-[47%] sm:w-full'
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
  );
}
