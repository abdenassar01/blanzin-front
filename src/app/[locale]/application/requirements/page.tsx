import { Button, DocumentToggleOperation, Heading } from '@/components';
import { getScopedI18n } from '@/utils/locales/server';
import Link from 'next/link';
import React from 'react';

export default async function Requirement() {
  const t = await getScopedI18n('application');
  return (
    <div className='py-12'>
      <div className='container'>
        <div className='text-secondary'>
          <Heading className='text-center text-xm ' heading={t('Heading')} />
        </div>
        <div className='mt-8 rounded-xl bg-backgroundSecondary p-4 dark:bg-backgroundSecondaryDark'>
          <ul className='ml-6 '>
            <DocumentToggleOperation
              doc='/blanzin.pdf'
              title={t('resume')}
              url='/resume'
            />
            <DocumentToggleOperation
              doc='/blanzin.pdf'
              title={t('lang-certificate')}
              url='/resume'
            />
            <DocumentToggleOperation
              doc='/blanzin.pdf'
              title={t('diploma')}
              url='/docs'
            />
            <DocumentToggleOperation
              doc='/blanzin.pdf'
              title={t('intenship')}
              url='/docs'
            />
            <DocumentToggleOperation
              doc='/blanzin.pdf'
              title={t('job-certificates')}
              url='/docs'
            />
            <DocumentToggleOperation
              doc='/blanzin.pdf'
              title={t('acknowledgement')}
              url='/docs'
            />
          </ul>
          <div className='flex justify-center'>
            <div className='mt-6 w-[30%] sm:w-full'>
              <Link href='/application/packages'>
                <Button
                  textClassName='group-hover:text-success'
                  theme='success'
                  className=''
                  text={t('action-btn')}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
