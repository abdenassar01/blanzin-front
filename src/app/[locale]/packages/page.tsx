import React from 'react';
import { PackagesForm } from './packages-form';
import { Heading } from '@/components';
import { getScopedI18n } from '@/utils/locales/server';

export default async function PackagesPage() {
  const t = await getScopedI18n('application');

  return (
    <div className='my-12'>
      <div className='container '>
        <div className='my-6 text-secondary dark:text-main'>
          <Heading
            className='text-center text-xm'
            heading={t('packs-heading')}
          />
        </div>
        <div className='flex justify-center'>
          <PackagesForm />
        </div>
      </div>
    </div>
  );
}
