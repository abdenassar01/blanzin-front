import { Heading } from '@/components';
import { getScopedI18n } from '@/utils/locales/server';
import React from 'react';
import { NewProfileForm } from './new-profile-form';

export default async function NewProfilePage() {
  const t = await getScopedI18n('profile');
  return (
    <div className=''>
      <div className='text-xxm'>
        <Heading heading={t('new-profile')} />
      </div>
      <div className=''>
        <NewProfileForm />
      </div>
    </div>
  );
}
