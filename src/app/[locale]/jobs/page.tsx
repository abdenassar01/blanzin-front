import { Heading, JobCard, JobMainCard, JobsFilter } from '@/components';
import { getI18n } from '@/utils/locales/server';
import React from 'react';

export default async function JobsPage() {
  const t = await getI18n();
  return (
    <div className="bg-backgroundSecondary bg-[url('/background.svg')] bg-contain bg-no-repeat py-12 dark:bg-backgroundSecondaryDark">
      <div className='container flex flex-col items-center justify-center'>
        <div className='w-[80%]'>
          <div className='text-secondary'>
            <Heading
              className='text-center text-xxl'
              heading={t('heading.jobs-page')}
            />
            <JobsFilter />
          </div>
          <div className='mt-4 '>
            <div className='flex flex-col gap-1.5'>
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
    </div>
  );
}
