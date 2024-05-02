'use client';

import { Button, FieldText, Link } from '@/components';
import { useScopedI18n } from '@/utils/locales/client';
import React from 'react';
import { useForm } from 'react-hook-form';

export function LoginForm() {
  const { control } = useForm();
  const t = useScopedI18n('auth');

  return (
    <div className='flex flex-col gap-3'>
      <FieldText
        control={control}
        label={t('username-label')}
        name='username'
      />
      <div className=''>
        <FieldText
          control={control}
          label={t('password-label')}
          type='password'
          name='username'
        />
        <div className='flex justify-end'>
          <Link className='text-xs' text={t('forget-password')} url='/reset' />
        </div>
      </div>
      <Button className='mt-6' text={t('login')} />
      <div className='flex justify-center gap-1'>
        {t('dont-have-account')}
        <Link text={t('create-account')} url='/reset' />
      </div>
    </div>
  );
}
