'use client';

import { cn } from '@/utils';
import { useScopedI18n } from '@/utils/locales/client';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

export function ProfilePicker() {
  const t = useScopedI18n('role');

  const { push } = useRouter();

  const searchParams = useSearchParams();

  const selectedTab = searchParams.get('role');

  useEffect(() => {
    setTimeout(
      () =>
        push(
          `/profile/${selectedTab === 'customer' ? 'account' : 'dashboard'}?role=` +
            (selectedTab || 'customer')
        ),
      100
    );
  }, [selectedTab]);

  const tabs = [
    { label: t('customer'), value: 'customer' },
    { label: t('expert'), value: 'expert' },
    { label: t('trainee'), value: 'trainee' },
    { label: t('employee'), value: 'employee' },
  ];

  return (
    <div className='flex w-full justify-end'>
      <div className='dark:shadow-dark flex gap-5 overflow-y-scroll rounded-full bg-backgroundSecondary p-1 shadow-lg dark:bg-backgroundDark sm:overflow-x-scroll'>
        {React.Children.toArray(
          tabs.map((item) => (
            <button
              onClick={() => push('/profile/dashboard?role=' + item.value)}
              className={cn(
                'w-[200px] items-center justify-center rounded-full p-3 px-4',
                selectedTab === item.value
                  ? 'bg-secondary dark:bg-main'
                  : 'bg-background dark:bg-backgroundSecondaryDark'
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
