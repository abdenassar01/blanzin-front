import { Heading, JobMainCard, OrderCard } from '@/components';
import { getScopedI18n } from '@/utils/locales/server';
import React from 'react';
import Slider from 'react-slick';
import JobsSlider from './jobs-slider';
import OrdersSlider from './orders-slider';

export default async function FavouritesPage() {
  const t = await getScopedI18n('profile');
  return (
    <div className='min-h-[25vw] rounded-xl bg-backgroundSecondary p-4 dark:bg-backgroundDark'>
      <div className='text-xxm'>
        <Heading heading={t('favourites')} />
      </div>
      <Heading heading={t('favourites-orders')} />
      <OrdersSlider />

      <Heading heading={t('favourites-jobs')} />
      <JobsSlider />
    </div>
  );
}
