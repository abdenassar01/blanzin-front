import { Heading, LoginForm } from '@/components';
import { getI18n } from '@/utils/locales/server';
import React from 'react';

export default async function LoginPage() {
  const t = await getI18n();

  return (
    <div>
      <Heading
        className='text-center text-2xl'
        heading={t('auth.login-heading')}
      />
      <p className='mb-12 text-center'>{t('auth.login-text')}</p>
      <LoginForm />
    </div>
  );
}
