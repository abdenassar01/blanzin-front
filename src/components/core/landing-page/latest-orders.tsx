import * as React from 'react';
import { getI18n } from '@/utils/locales/server';
import { Heading, LatestOrderSlider } from '@/components';
import Link from 'next/link';

export async function LatestOrders() {
  const t = await getI18n();
  return (
    <div className='bg-background py-12 dark:bg-backgroundDark'>
      <div className='container'>
        <div className='flex items-center justify-between text-xbase'>
          <Heading className='' heading={t('expert.latest-training')} />
          <Link className='text-xs text-[#3fb0fc]' href='/orders'>
            {t('view-all')}
          </Link>
        </div>
        <div className=''>
          <LatestOrderSlider />
        </div>
      </div>
    </div>
  );
}
