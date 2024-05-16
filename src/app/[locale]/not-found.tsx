export const dynamic = 'force-dynamic';

import React from 'react';
import '../globals.css';
import { getI18n } from '@/utils/locales/server';
import { I18nProviderClient } from '@/utils/locales/client';
import { InternationalisationParams } from '@/types';

export default async function notFound({
  params: { locale },
}: InternationalisationParams) {
  const t = await getI18n();

  return (
    <html lang={locale}>
      <head>
        <title>Blanzin | not found</title>
      </head>
      <body>
        <I18nProviderClient locale={locale}>
          <div className='bg-background dark:bg-backgroundDark '>
            <div className='font-monserat container flex min-h-[100vh] items-center justify-center'>
              <div className="ml-20 flex h-[90vh] w-full items-center justify-center bg-[url('/page_not_found.svg')] bg-no-repeat">
                <span className='rounded bg-main p-3 text-xl font-bold text-secondary dark:text-main'>
                  {t('errors.page-not-found')}
                </span>
              </div>
            </div>
          </div>
        </I18nProviderClient>
      </body>
    </html>
  );
}
