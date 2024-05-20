import {
  Button,
  DocumentToggleOperation,
  Heading,
  ResumeToggleOperation,
} from '@/components';
import { getScopedI18n } from '@/utils/locales/server';
import Link from 'next/link';
import React from 'react';

export default async function Requirement() {
  const t = await getScopedI18n('application');
  return (
    <div className='py-12 '>
      <div className='container'>
        <div className='text-secondary'>
          <Heading className='text-xm ' heading={t('Heading')} />
        </div>
        <div className='mt-8 w-full rounded-xl bg-backgroundSecondary p-4 shadow-md dark:bg-backgroundDark dark:shadow-backgroundSecondaryDark'>
          <ul className='ml-6 flex w-full flex-col gap-1'>
            <ResumeToggleOperation doc='/blanzin.pdf' title={t('resume')} />
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
        </div>
        <div className='mt-10 w-[20%] sm:w-full'>
          <Link href='/application/packages'>
            <Button
              textClassName=''
              className='w-fit px-4'
              text={t('action-btn')}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
