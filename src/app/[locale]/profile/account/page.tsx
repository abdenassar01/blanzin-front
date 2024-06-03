import { Heading } from '@/components';
import { getScopedI18n } from '@/utils/locales/server';
import React from 'react';
import AccountForm from './account-form';

export default async function AccountPage() {
  const t = await getScopedI18n('profile');
  return (
    <div className=''>
      <div className='text-xxm'>
        <Heading heading={t('account')} />
      </div>
      <div className=''>
        <AccountForm />
      </div>
    </div>
  );
}
