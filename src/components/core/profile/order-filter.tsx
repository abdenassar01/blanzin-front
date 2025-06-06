'use client';

import * as React from 'react';
import { OrderCard } from '@/components';
import { cn } from '@/utils';
import { useScopedI18n } from '@/utils/locales/client';
import { useRouter, useSearchParams } from 'next/navigation';
import { usePathname } from '@/navigation';
import { useEffect } from 'react';

export function OrderFilter() {
  const [activeSection, setActiveSection] = React.useState<'active' | 'done'>(
    'active'
  );

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();

  useEffect(() => {
    push(`${pathname}?role=${searchParams.get('role')}&tab=active`);
  }, []);

  const t = useScopedI18n('orders-filter');

  return (
    <div className='order-filter'>
      <div className='mb-5 flex w-full justify-end'>
        <div className='flex gap-3 rounded-full bg-background p-1 dark:bg-backgroundSecondaryDark'>
          <div
            onClick={() =>
              push(`${pathname}?role=${searchParams.get('role')}&tab=active`)
            }
            className={cn(
              'cursor-pointer rounded-full p-2 px-5 transition-all duration-300',
              searchParams.get('tab') === 'active'
                ? 'bg-secondary text-main dark:bg-main dark:text-secondary'
                : 'text-secondary dark:text-main'
            )}
          >
            {t('active')}
          </div>
          <div
            onClick={() =>
              push(`${pathname}?role=${searchParams.get('role')}&tab=done`)
            }
            className={cn(
              'cursor-pointer rounded-full p-2 px-5 transition-all duration-300',
              searchParams.get('tab') === 'done'
                ? 'bg-secondary text-main dark:bg-main dark:text-secondary'
                : 'text-secondary dark:text-main'
            )}
          >
            {t('done')}
          </div>
        </div>
      </div>
      <div className='flex flex-wrap justify-between'>
        {React.Children.toArray(
          [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <OrderCard
              self
              className='w-[32%] shadow-lg sm:w-full'
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
