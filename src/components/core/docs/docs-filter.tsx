'use client';

import { Map } from '@/components';
import { usePathname } from '@/navigation';
import { cn } from '@/utils';
import { useScopedI18n } from '@/utils/locales/client';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

export function DocsFilter() {
  const t = useScopedI18n('application');

  const searchParams = useSearchParams();
  const { push } = useRouter();
  const role = searchParams.get('role');
  const docParam = searchParams.get('doc');

  const tabs = [
    { label: t('lang-certificate'), doc: 'lang' },
    { label: t('job-certificates'), doc: 'jobs' },
    { label: t('diploma'), doc: 'diploma' },
    { label: t('intenship'), doc: 'intenship' },
    { label: t('acknowledgement'), doc: 'acknowledgement' },
  ];

  useEffect(() => {
    push(pathname + '?role=' + role + '&doc=lang');
  }, []);

  const pathname = usePathname();

  return (
    <div className='w-[35vw] border-r-[1px] border-border sm:w-[50vw]'>
      <Map
        items={tabs}
        render={(item) => (
          <div
            className={cn(
              'border-[1px] border-border p-3',
              docParam === item.doc
                ? 'bg-border text-secondary dark:text-main'
                : ' text-text dark:text-textdark'
            )}
          >
            <Link href={pathname + '?role=' + role + '&doc=' + item.doc}>
              {item.label}
            </Link>
          </div>
        )}
      />
    </div>
  );
}
