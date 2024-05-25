'use client';

import { usePathname } from '@/navigation';
import { cn } from '@/utils';
import { useScopedI18n } from '@/utils/locales/client';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

type Props = {};

export function ProfilePicker({}: Props) {
  const t = useScopedI18n('role');

  const { push } = useRouter();
  const pathname = usePathname();

  const searchParams = useSearchParams();

  const selectedTab = searchParams.get('role');

  useEffect(() => {
    push(pathname + '?role=customer');
  }, []);

  const tabs = [
    { label: t('customer'), value: 'customer' },
    { label: t('expert'), value: 'expert' },
    { label: t('trainee'), value: 'trainee' },
    { label: t('employee'), value: 'employee' },
  ];

  return (
    <div>
      <div className='flex w-full justify-end gap-5 rounded-full bg-background p-1 dark:bg-backgroundSecondaryDark sm:overflow-y-scroll'>
        {React.Children.toArray(
          tabs.map((item) => (
            <button
              onClick={() => push(pathname + '?role=' + item.value)}
              className={cn(
                'w-[15%] items-center justify-center rounded-full p-3',
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
