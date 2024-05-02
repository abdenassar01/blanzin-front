'use client';

import { Button, FieldText, Link } from '@/components';
import { useI18n } from '@/utils/locales/client';
import React from 'react';
import { useForm } from 'react-hook-form';

export function LoginForm() {
  const { control } = useForm();
  const t = useI18n();

  return (
    <div className='flex flex-col gap-3'>
      <FieldText
        control={control}
        label={t('forms.phone')}
        placeholder='0666666666'
        name='phone'
      />
      <div className=''>
        <FieldText
          control={control}
          label={t('forms.password')}
          placeholder={t('forms.password')}
          type='password'
          name='password'
        />
        <div className='flex justify-end'>
          <Link
            className='text-xs'
            text={t('auth.forget-password')}
            url='/reset'
          />
        </div>
      </div>
      <Button className='mt-6' text={t('auth.login')} />
      <div className='flex justify-center gap-1'>
        {t('auth.dont-have-account')}
        <Link text={t('auth.create-account')} url='/register' />
      </div>
    </div>
  );
}
