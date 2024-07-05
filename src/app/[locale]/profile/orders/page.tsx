import { Heading, OrderFilter } from '@/components';
import { getScopedI18n } from '@/utils/locales/server';
import React from 'react';

export default async function ProfileOrdersPage() {
  const t = await getScopedI18n('profile');

  return (
    <div className=''>
      <div className='text-xxm'>
        <Heading heading={t('my-orders')} />
      </div>
      <OrderFilter />
    </div>
  );
}
