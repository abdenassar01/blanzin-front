import * as React from 'react';
import { Heading } from '@/components';
import { getScopedI18n } from '@/utils/locales/server';

export default async function Page() {
  const t = await getScopedI18n('visa');

  return (
    <div className='flex h-full flex-col items-center gap-10 text-mainText'>
      <div className='text-xxm'>
        <Heading className='text-center' heading={t('header')} />
      </div>
      <p className='text-center'>{t('content')}</p>
    </div>
  );
}
