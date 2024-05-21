import { Heading, JobMainCard, OrderCard } from '@/components';
import { getScopedI18n } from '@/utils/locales/server';
import React from 'react';

export default async function FavouritesPage() {
  const t = await getScopedI18n('profile');
  return (
    <div className='min-h-[25vw] rounded-xl bg-backgroundSecondary p-4 dark:bg-backgroundDark'>
      <div className='text-xxm'>
        <Heading heading={t('favourites')} />
      </div>
      <Heading heading={t('favourites-orders')} />
      <div className='my-3 flex gap-3'>
        <OrderCard
          className=''
          createdAt={new Date()}
          image='/house.jpg'
          desc='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus qui ullam, placeat numquam nemo labore voluptas minima neque nihil saepe, quae at omnis recusandae mollitia sapiente aliquid fuga modi? Officiis!'
          location='Casablanca'
          orderTitle='Fix house floor'
        />
        <OrderCard
          className=''
          createdAt={new Date()}
          image='/house.jpg'
          desc='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus qui ullam, placeat numquam nemo labore voluptas minima neque nihil saepe, quae at omnis recusandae mollitia sapiente aliquid fuga modi? Officiis!'
          location='Casablanca'
          orderTitle='Fix house floor'
        />
        <OrderCard
          className=''
          createdAt={new Date()}
          image='/house.jpg'
          desc='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus qui ullam, placeat numquam nemo labore voluptas minima neque nihil saepe, quae at omnis recusandae mollitia sapiente aliquid fuga modi? Officiis!'
          location='Casablanca'
          orderTitle='Fix house floor'
        />
      </div>
      <Heading heading={t('favourites-jobs')} />
      <div className='flex gap-3'>
        <JobMainCard />
        <JobMainCard />
        <JobMainCard />
      </div>
    </div>
  );
}
