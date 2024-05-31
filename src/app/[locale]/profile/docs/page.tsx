import { Heading } from '@/components';
import { getScopedI18n } from '@/utils/locales/server';
import React from 'react';

export default async function MyDocumentsPage({
  searchParams: { doc },
}: {
  searchParams: { doc: string };
}) {
  const t = await getScopedI18n('profile');
  return (
    <div className='min-h-[40vw] rounded-xl bg-backgroundSecondary p-4 dark:bg-backgroundDark'>
      <div className='text-xxm'>
        <Heading heading={t('docs')} />
      </div>
      <div className=''>{doc}</div>
    </div>
  );
}
