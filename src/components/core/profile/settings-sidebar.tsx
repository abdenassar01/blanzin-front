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
    { label: t('security'), tab: 'security' },
    { label: t('add-profile'), tab: 'new' },
  ];

  useEffect(() => {
    push(
      noRole ? pathname + '?tab=lang' : pathname + '?role=' + role + '&tab=lang'
    );
  }, []);

  const pathname = usePathname();

  return (
    <div className={cn('flex w-full flex-col gap-4 sm:w-[50vw]', className)}>
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
                'rounded-lg p-3 shadow-md transition-all',
                tab === item.tab
                  ? 'scale-105 bg-main text-secondary shadow-secondary dark:shadow-main'
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
