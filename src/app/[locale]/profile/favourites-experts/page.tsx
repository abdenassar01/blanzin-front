import { ExpertCard, Heading } from '@/components';
import { getScopedI18n } from '@/utils/locales/server';
import React from 'react';

export default async function FavouritesExpertsPage() {
  const t = await getScopedI18n('profile');

  return (
    <>
      <div className='text-xxm'>
        <Heading heading={t('favourites-orders')} />
      </div>
      <div className='flex flex-wrap gap-4'>
        <ExpertCard className='w-[49%]' />
        <ExpertCard className='w-[49%]' />
        <ExpertCard className='w-[49%]' />
        <ExpertCard className='w-[49%]' />
      </div>
    </>
  );
}
