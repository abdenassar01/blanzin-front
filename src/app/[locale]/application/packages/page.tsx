import React from 'react';
import { Heading } from '@/components';
import { getScopedI18n } from '@/utils/locales/server';
import { PackagesForm } from './packages-form';

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
        <div className='flex w-full justify-center'>
          <div className='w-[80%]'>
            <PackagesForm />
          </div>
        </div>
      </div>
    </div>
  );
}
