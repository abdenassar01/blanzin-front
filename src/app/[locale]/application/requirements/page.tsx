import { Heading, ResumeToggle } from '@/components';
import { getScopedI18n } from '@/utils/locales/server';
import React from 'react';

export default async function Requirement() {
  const t = await getScopedI18n('application');
  return (
    <div className='py-12'>
      <div className='container'>
        <div className='text-secondary'>
          <Heading className='text-center text-xm ' heading={t('Heading')} />
        </div>
        <div className='mt-8 rounded-xl bg-backgroundSecondary p-4 dark:bg-backgroundSecondaryDark'>
          <ul className='ml-6 '>
            <ResumeToggle />
          </ul>
        </div>
      </div>
    </div>
  );
}
