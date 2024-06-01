import { Heading, ResumeeViewer } from '@/components';
import { getScopedI18n } from '@/utils/locales/server';
import React from 'react';

export default async function ProfileResume() {
  const t = await getScopedI18n('application');

  return (
    <div className='min-h-[25vw] rounded-xl bg-backgroundSecondary p-4 dark:bg-backgroundDark'>
      {/* <div className='text-xxm'>
        <Heading heading={t('resume')} />
      </div> */}
      <ResumeeViewer />
    </div>
  );
}
