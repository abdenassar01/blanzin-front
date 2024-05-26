import { Heading, JobMainCard } from '@/components';
import { getScopedI18n } from '@/utils/locales/server';
import React from 'react';

export default async function MyJobsPage() {
  const t = await getScopedI18n('profile');
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <div className='min-h-[25vw] overflow-y-scroll rounded-xl bg-backgroundSecondary p-4 dark:bg-backgroundDark sm:h-[100vh]'>
      <div className='text-xxm'>
        <Heading heading={t('favourites-orders')} />
      </div>
      <div className='flex flex-col gap-4 py-4'>
        {React.Children.toArray(arr.map((item) => <JobMainCard />))}
      </div>
    </div>
  );
}
