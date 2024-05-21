import { Heading } from '@/components';
import { getScopedI18n } from '@/utils/locales/server';
import React from 'react';

export default async function MyInboxPage() {
  const t = await getScopedI18n('profile');
  return (
    <div className='min-h-[25vw] rounded-xl bg-backgroundSecondary p-4 dark:bg-backgroundDark'>
      <div className='text-xxm'>
        <Heading heading={t('inbox')} />
      </div>
    </div>
  );
}
