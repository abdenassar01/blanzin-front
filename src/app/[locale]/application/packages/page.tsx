import React from 'react';
import { PackagesForm } from './packages-form';
import { Button, Heading } from '@/components';
import { getScopedI18n } from '@/utils/locales/server';
import Link from 'next/link';

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
        <div className='mt-6 flex items-center justify-center'>
          <div className='w-[20%] sm:w-full'>
            <Link className='' href='/application/book'>
              <Button text={t('book')} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
