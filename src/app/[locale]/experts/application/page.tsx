import { BecomeExpertForm, Heading } from '@/components';
import { getScopedI18n } from '@/utils/locales/server';
import React from 'react';

export default async function BecomeExpert() {
  const t = await getScopedI18n('become-expert');

  return (
    <div className='my-12'>
      <div className='container'>
        <div className='text-xxm'>
          <Heading heading={t('heading')} />
        </div>
        <div className=''>
          <BecomeExpertForm />
        </div>
      </div>
    </div>
  );
}
