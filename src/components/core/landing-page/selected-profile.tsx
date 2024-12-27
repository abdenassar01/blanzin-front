'use client';

import { Map } from '@/components/';
import { usePathname } from '@/navigation';
import { cn } from '@/utils';
import { useI18n } from '@/utils/locales/client';
import Link from 'next/link';
import React from 'react';

export function SelectedProfile() {
  const t = useI18n();
  const pathname = usePathname();

  const profiles = [
    { label: t('role.trainee'), link: '/trainee' },
    { label: t('role.employee'), link: '/employee' },
  ];

  return (
    <div className='container mt-12 flex w-full justify-center gap-8 md:flex-col sm:flex-col'>
      <Map
        items={profiles}
        render={(profile) => (
          <Link
            href={profile.link}
            className={cn(
              'flex h-[50px] items-center justify-center rounded-xl px-16 font-semibold text-secondary shadow-md shadow-secondary transition-all ease-in-out dark:text-main dark:shadow-main',
              profile.link === pathname
                ? 'bg-main hover:bg-main hover:text-secondary dark:text-backgroundDark'
                : 'bg-backgroundSecondary hover:bg-secondary hover:text-main dark:bg-backgroundDark dark:hover:bg-main dark:hover:text-backgroundDark'
            )}
          >
            {profile.label}
          </Link>
        )}
      />
    </div>
  );
}
