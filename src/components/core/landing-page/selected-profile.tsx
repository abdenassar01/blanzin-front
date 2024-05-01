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
    {
      label: t('titles.service-placement'),
      items: [
        { label: t('profiles.customer'), link: '/overview/customer' },
        { label: t('profiles.expert'), link: '/overview/expert' },
      ],
    },
    {
      label: t('titles.jobs-in-germany'),
      items: [
        { label: t('profiles.trainee'), link: '/overview/trainee' },
        { label: t('profiles.employee'), link: '/overview/employee' },
      ],
    },
  ];

  return (
    <div className='container flex w-full justify-evenly'>
      <Map
        items={profiles}
        render={(item) => (
          <div className='mt-8'>
            <h3 className='my-4 text-center text-xl font-bold text-secondary dark:text-main'>
              {item.label}
            </h3>
            <div className='flex justify-between gap-4'>
              <Map
                items={item.items}
                render={(profile) => (
                  <Link
                    href={profile.link}
                    className={cn(
                      'flex h-[50px] w-[200px] items-center justify-center rounded font-semibold text-secondary shadow-md shadow-secondary transition-all ease-in-out',
                      profile.link === pathname
                        ? 'bg-main hover:bg-main hover:text-secondary'
                        : 'bg-backgroundSecondary hover:bg-secondary hover:text-main dark:bg-backgroundSecondaryDark'
                    )}
                  >
                    {profile.label}
                  </Link>
                )}
              />
            </div>
          </div>
        )}
      />
    </div>
  );
}
