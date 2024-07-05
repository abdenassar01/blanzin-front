import { Heading, NewOrderForm } from '@/components';
import { getI18n } from '@/utils/locales/server';
import React from 'react';

export default async function NewOrder() {
  const t = await getI18n();
  return (
    <div className='my-12'>
      <div className='container'>
        <div className='text-xxm'>
          <Heading heading={t('update-order-header')} className='mb-3' />
        </div>
        <NewOrderForm />
      </div>
    </div>
  );
}
