'use client';

import { Map } from '@/components';
import { usePathname } from '@/navigation';
import { cn } from '@/utils';
import { useScopedI18n } from '@/utils/locales/client';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

export function DocsFilter({ noRole }: { noRole?: boolean }) {
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
    push(
      noRole ? pathname + '?doc=lang' : pathname + '?role=' + role + '&doc=lang'
    );
  }, []);

  const pathname = usePathname();

  return (
    <div className='w-full border-r-[1px] border-border sm:w-[50vw]'>
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
                'border-[1px] border-border p-3',
                docParam === item.doc
                  ? 'bg-border text-secondary dark:text-main'
                  : ' text-text dark:text-textdark'
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
