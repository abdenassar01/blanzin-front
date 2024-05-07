'use client';

import { usePathname } from '@/navigation';
import { cn } from '@/utils';
import { useScopedI18n } from '@/utils/locales/client';
import Link from 'next/link';
import React from 'react';

export function FilterSelector() {
  const t = useScopedI18n('blog');

  const pathname = usePathname();

  const tabs = [
    { label: t('filter-all'), href: '/blog/all' },
    { label: t('filter-trainee'), href: '/blog/german-trainee' },
    { label: t('filter-jobs'), href: '/blog/german-jobs' },
    { label: t('filter-news'), href: '/blog/moroccan-news' },
  ];

  return (
    <div className='container my-10'>
      <div className='no-scrollbar flex gap-3 overflow-x-scroll'>
        {React.Children.toArray(
          tabs.map((item) => (
            <Link
              className={cn(
                'text-nowrap rounded-full px-5 py-2 font-medium',
                item.href === pathname
                  ? ' bg-secondary text-background dark:bg-main dark:text-backgroundDark'
                  : 'bg-background text-secondary dark:bg-backgroundDark  dark:text-main'
              )}
              href={item.href}
            >
              {item.label}
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
