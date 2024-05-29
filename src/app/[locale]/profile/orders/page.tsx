import { Heading, OrderCard } from '@/components';
import { getScopedI18n } from '@/utils/locales/server';
import React from 'react';

export default async function ProfileOrdersPage() {
  const t = await getScopedI18n('profile');

  return (
    <div className='min-h-[25vw] rounded-xl bg-backgroundSecondary p-4 dark:bg-backgroundDark'>
      <div className='text-xxm'>
        <Heading heading={t('my-orders')} />
      </div>
      <div className='flex flex-wrap gap-4'>
        {React.Children.toArray(
          [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <OrderCard
              className='w-[30%] shadow-lg sm:w-full'
              createdAt={new Date()}
              image='/house.jpg'
              desc='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus qui ullam, placeat numquam nemo labore voluptas minima neque nihil saepe, quae at omnis recusandae mollitia sapiente aliquid fuga modi? Officiis!'
              location='Casablanca'
              orderTitle='Fix house floor'
            />
          ))
        )}
      </div>
    </div>
  );
}
