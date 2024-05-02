import * as React from 'react';
import { getI18n } from '@/utils/locales/server';
import { Heading, LatestJobsSlider } from '@/components';
import Link from 'next/link';

export async function LatestJobs() {
  const t = await getI18n();
  return (
    <div className='container'>
      <div className='bg-background py-12 dark:bg-backgroundDark'>
        <div className='container'>
          <div className='flex items-center justify-between text-xbase'>
            <Heading className='' heading={t('employee.slider-header')} />
            <Link className='text-xs text-[#3fb0fc]' href='/jobs'>
              {t('view-all')}
            </Link>
          </div>
          <div className=''>
            <LatestJobsSlider />
          </div>
        </div>
      </div>
    </div>
  );
}
