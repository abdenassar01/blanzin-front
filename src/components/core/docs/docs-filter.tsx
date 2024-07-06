'use client';

import { Map } from '@/components';
import { usePathname } from '@/navigation';
import { cn } from '@/utils';
import { useScopedI18n } from '@/utils/locales/client';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

export function DocsFilter({
  noRole,
  className,
}: {
  noRole?: boolean;
  className?: string;
}) {
  const t = useScopedI18n('application');

  const searchParams = useSearchParams();
  const { push } = useRouter();
  const role = searchParams.get('role');
  const docParam = searchParams.get('doc');

  const tabs = [
    { label: t('lang-certificate'), doc: 'lang' },
    { label: t('job-certificates'), doc: 'jobs' },
    { label: t('diploma'), doc: 'diploma' },
    { label: t('internship'), doc: 'internship' },
    { label: t('acknowledgement'), doc: 'acknowledgement' },
  ];

  useEffect(() => {
    push(
      noRole ? pathname + '?doc=lang' : pathname + '?role=' + role + '&doc=lang'
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
                ? pathname + '?doc=' + item.doc
                : pathname + '?role=' + role + '&doc=' + item.doc
            }
          >
            <div
              className={cn(
                'rounded-lg p-3 shadow-md transition-all',
                docParam === item.doc
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
