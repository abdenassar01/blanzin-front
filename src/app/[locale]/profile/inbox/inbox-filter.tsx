'use client';

import { usePathname } from '@/navigation';
import { cn } from '@/utils';
import { useScopedI18n } from '@/utils/locales/client';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function InboxFilter() {
  const t = useScopedI18n('inbox');

  const { push } = useRouter();
  const pathname = usePathname();

  const searchParams = useSearchParams();

  const selectedTab = searchParams.get('tab');
  const role = searchParams.get('role');

  useEffect(() => {
    push(pathname + '?role=' + role + '&tab=all');
  }, []);

  const tabs = [
    { id: 1, label: t('all'), value: 'all' },
    { id: 1, label: t('unread'), value: 'unread' },
    { id: 1, label: t('stars'), value: 'stars' },
  ];

  return (
    <div>
      <div className='mt-3 flex w-full justify-between gap-5 rounded-full bg-background p-1 dark:bg-backgroundSecondaryDark'>
        {React.Children.toArray(
          tabs.map((item) => (
            <button
              onClick={() =>
                push(pathname + '?role=' + role + '&tab=' + item.value)
              }
              className={cn(
                'w-[32%] items-center justify-center rounded-full p-3',
                selectedTab === item.value
                  ? 'bg-secondary dark:bg-main'
                  : 'bg-backgroundSecondary dark:bg-backgroundDark'
              )}
            >
              <div
                className={cn(
                  'capitalize',
                  selectedTab === item.value
                    ? 'text-backgroundSecondary dark:text-backgroundSecondaryDark'
                    : 'text-secondary dark:text-main'
                )}
              >
                {item.label}
              </div>
            </button>
          ))
        )}
      </div>
    </div>
  );
}
