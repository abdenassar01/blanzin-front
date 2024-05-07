import * as React from 'react';
import { getI18n } from '@/utils/locales/server';
import { Heading, LatestTrainingsSlider } from '@/components';
import Link from 'next/link';

export async function LatestTrainings() {
  const t = await getI18n();
  return (
    <div className='container'>
      <div className='bg-background py-12 dark:bg-backgroundSecondaryDark'>
        <div className='container'>
          <div className='flex items-center justify-between text-xbase'>
            <Heading className='' heading={t('trainee.slider-header')} />
            <Link className='text-xs text-[#3fb0fc]' href='/orders'>
              {t('view-all')}
            </Link>
          </div>
          <div className=''>
            <LatestTrainingsSlider />
          </div>
        </div>
      </div>
    </div>
  );
}
