import { SelectedProfile } from '@/components';
import { LayoutProps } from '@/types';
import { getI18n } from '@/utils/locales/server';
import React, { Suspense } from 'react';

export default async function LandingPageLayout({ children }: LayoutProps) {
  const t = await getI18n();

  return (
    <div className='bg-background  bg-contain bg-no-repeat dark:bg-backgroundSecondaryDark'>
      <div className='flex flex-col items-center justify-center py-12'>
        <h1 className='text-4xl font-bold text-secondary'>
          {t('heading.welcome')}
        </h1>
        <SelectedProfile />
        <Suspense fallback={<div>loading...</div>}>{children}</Suspense>
      </div>
    </div>
  );
}
