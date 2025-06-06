'use client';

import { Button, FieldText, Link, PhoneField } from '@/components';
import { useI18n } from '@/utils/locales/client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/types';
import { z } from 'zod';

type FormValue = z.infer<typeof loginSchema>;

export function LoginForm() {
  const { control, handleSubmit } = useForm<FormValue>({
    resolver: zodResolver(loginSchema),
  });

  const t = useI18n();

  const onSubmit = (data: FormValue) => {
    console.log(data);
  };

  return (
    <div className='flex flex-col gap-3'>
      <PhoneField
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
      <Button
        onClick={handleSubmit(onSubmit)}
        className='mt-6'
        text={t('auth.login')}
      />
      <div className='flex justify-center gap-1 sm:flex-col'>
        {t('auth.dont-have-account')}
        <Link text={t('auth.create-account')} url='/register' />
      </div>
    </div>
  );
}
