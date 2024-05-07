'use client';

import { cn } from '@/utils';
import { useScopedI18n } from '@/utils/locales/client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';

export function FaqFilter() {
  const t = useScopedI18n('profiles');

  const searchParams = useSearchParams();

  const currentTab = searchParams.get('tab');

  const tabs = [
    { label: t('customer'), tab: 'customer' },
    { label: t('expert'), tab: 'expert' },
    { label: t('trainee'), tab: 'trainee' },
    { label: t('employee'), tab: 'employee' },
  ];

  return (
    <div className='no-scrollbar container my-3 flex gap-3 overflow-scroll'>
      {React.Children.toArray(
        tabs.map((item) => (
          <Link
            className={cn(
              'rounded-full px-5 py-2 font-medium',
              item.tab === currentTab
                ? ' bg-secondary text-background dark:bg-main dark:text-backgroundDark'
                : 'bg-backgroundSecondary text-secondary dark:bg-backgroundSecondaryDark  dark:text-main'
            )}
            href={`/faq?tab=${item.tab}`}
          >
            {item.label}
          </Link>
        ))
      )}
    </div>
  );
}
