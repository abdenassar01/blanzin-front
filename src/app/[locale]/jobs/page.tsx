import { Button, Heading, JobMainCard, JobsFilter } from '@/components';
import { getI18n } from '@/utils/locales/server';
import React from 'react';

export default async function JobsPage() {
  const t = await getI18n();
  return (
    <div className=' bg-background bg-contain bg-no-repeat py-12 dark:bg-backgroundSecondaryDark'>
      <div className='container flex items-center justify-center'>
        <div className='sm:w-full'>
          <div className='my-3 text-secondary'>
            <Heading
              className='text-center text-xxl font-normal'
              heading={t('heading.jobs-page')}
            />
          </div>
          <div className=' flex  items-start gap-8 sm:flex-col'>
            <JobsFilter />
            <div className='no-scrollbar h-[90vh] w-full overflow-y-scroll'>
              <div className='flex flex-col gap-10 overflow-y-scroll'>
                <JobMainCard />
                <JobMainCard />
                <JobMainCard />
                <JobMainCard />
                <JobMainCard />
                <JobMainCard />
                <JobMainCard />
                <JobMainCard />
                <div className='flex justify-center'>
                  <Button width='20%' className='' text='Load More' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
