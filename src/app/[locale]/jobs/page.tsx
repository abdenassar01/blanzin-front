import { Heading, JobCard, JobMainCard } from '@/components';
import { getI18n } from '@/utils/locales/server';
import React from 'react';

export default async function JobsPage() {
  const t = await getI18n();
  return (
    <div className="bg-backgroundSecondary bg-[url('/background.svg')] bg-contain bg-no-repeat py-12 dark:bg-backgroundSecondaryDark">
      <div className='container'>
        <div className='text-secondary'>
          <Heading
            className='text-center text-xxl'
            heading={t('heading.jobs-page')}
          />
        </div>
        <div className='mt-4 flex justify-center'>
          <div className='flex w-[80%] flex-col gap-1.5'>
            <JobMainCard />
            <JobMainCard />
            <JobMainCard />
            <JobMainCard />
            <JobMainCard />
            <JobMainCard />
            <JobMainCard />
            <JobMainCard />
          </div>
        </div>
      </div>
    </div>
  );
}
