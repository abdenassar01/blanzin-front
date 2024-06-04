'use client';

import { Button, FieldText, Heading } from '@/components';
import { useScopedI18n } from '@/utils/locales/client';
import React from 'react';
import { useForm } from 'react-hook-form';

export function SecurityTab() {
  const { control, handleSubmit } = useForm();
  const t = useScopedI18n('security');

  function onSubmit(data: any) {
    console.log('data', data);
  }

  return (
    <div className=''>
      <div className='mb-6 text-xxm'>
        <Heading heading={t('title')} />
      </div>
      <div className='flex flex-col gap-3'>
        <FieldText
          control={control}
          label={t('old')}
          placeholder={t('old')}
          name='oldPassword'
          type='password'
        />
        <FieldText
          control={control}
          label={t('new')}
          placeholder={t('new')}
          name='newPassword'
          type='password'
        />
        <FieldText
          control={control}
          label={t('confirm-new')}
          placeholder={t('confirm-new')}
          name='confirmPassword'
          type='password'
        />
        <Button text={t('submit')} onClick={handleSubmit(onSubmit)} />
      </div>
    </div>
  );
}
