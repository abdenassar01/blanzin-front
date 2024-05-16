import React from 'react';
import { Button, Heading, PaymentCardsSelector } from '@/components';
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
        <div className='flex w-full justify-center'>
          <div className='w-[80%]'>
            <PaymentCardsSelector />
          </div>
        </div>
      </div>
    </div>
  );
}
