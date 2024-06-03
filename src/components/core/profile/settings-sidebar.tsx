'use client';

import { Map } from '@/components';
import { usePathname } from '@/navigation';
import { cn } from '@/utils';
import { useScopedI18n } from '@/utils/locales/client';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

export function SettingsSidebar({
  noRole,
  className,
}: {
  noRole?: boolean;
  className?: string;
}) {
  const t = useScopedI18n('settings');

  const searchParams = useSearchParams();
  const { push } = useRouter();
  const role = searchParams.get('role');
  const tab = searchParams.get('tab');

  const tabs = [
    { label: t('appearance'), tab: 'appearance' },
    { label: t('security'), tab: 'security' },
    { label: t('profile-administration'), tab: 'new-profile' },
  ];

  useEffect(() => {
    push(
      noRole
        ? pathname + '?tab=appearance'
        : pathname + '?role=' + role + '&tab=appearance'
    );
  }, []);

  const pathname = usePathname();

  return (
    <div className={cn('flex w-full flex-col gap-4', className)}>
      <Map
        items={tabs}
        render={(item) => (
          <Link
            href={
              noRole
                ? pathname + '?tab=' + item.tab
                : pathname + '?role=' + role + '&tab=' + item.tab
            }
          >
            <div
              className={cn(
                'rounded-lg bg-background p-3 shadow-md transition-all dark:bg-backgroundSecondaryDark',
                tab === item.tab
                  ? 'scale-105 bg-main text-secondary shadow-secondary dark:bg-main dark:text-secondary'
                  : ' text-black dark:text-textdark'
              )}
            >
              {item.label}
            </div>
          </Link>
        )}
      />
    </div>
  );
}
