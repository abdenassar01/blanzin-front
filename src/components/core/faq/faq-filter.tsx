'use client';

import { cn } from '@/utils';
import { useScopedI18n } from '@/utils/locales/client';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

export function FaqFilter() {
  const t = useScopedI18n('role');

  const searchParams = useSearchParams();

  const currentTab = searchParams.get('tab');
  const { push } = useRouter();

  useEffect(() => {
    push('/faq?tab=customer');
  }, []);

  const tabs = [
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
