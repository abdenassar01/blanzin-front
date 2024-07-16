import * as React from 'react';
import { getScopedI18n } from '@/utils/locales/server';
import { Heading } from '@/components';

export async function TraineeVisaSection() {
  const t = await getScopedI18n('trainee.visa');
  return (
    <div className='bg-backgroundSecondary py-12 dark:bg-backgroundDark'>
      <div className='container'>
        <div className='px-12 text-xm sm:px-1'>
          <Heading heading={t('title')} className='text-center' />
        </div>
        <div
          className='prose mt-12 min-w-full prose-li:w-full prose-li:list-disc prose-li:text-xl'
          dangerouslySetInnerHTML={{ __html: t('content') }}
        />
      </div>
    </div>
  );
}
