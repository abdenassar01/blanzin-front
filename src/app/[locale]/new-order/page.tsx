import { Heading, NewOrderForm } from '@/components';
import { getI18n } from '@/utils/locales/server';
import React from 'react';

type Props = {};

export default async function NewOrder({}: Props) {
  const t = await getI18n();
  return (
    <div className='my-12'>
      <div className='container flex items-center justify-center'>
        <div className='w-[80%]'>
          <div className='text-xxm'>
            <Heading heading={t('new-order-header')} className='mb-3' />
          </div>
          <NewOrderForm />
        </div>
      </div>
    </div>
  );
}
