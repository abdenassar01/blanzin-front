import { Heading } from '@/components';
import { getScopedI18n } from '@/utils/locales/server';
import React from 'react';

export default async function Requirement() {
  const t = await getScopedI18n('application');
  return (
    <div className='py-12'>
      <div className='container'>
        <Heading className='text-center text-xm' heading={t('Heading')} />
      </div>
    </div>
  );
}
