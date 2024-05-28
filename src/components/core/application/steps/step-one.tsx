import { Heading, ResumeeForm } from '@/components';
import { useScopedI18n } from '@/utils/locales/client';
import React from 'react';

export function StepOne() {
  const t = useScopedI18n('application');

  return (
    <div>
      <div className='text-xxm'>
        <Heading heading={t('resume')} />
      </div>
      <div className='mt-8 w-full rounded-xl bg-backgroundSecondary dark:bg-backgroundDark'>
        <ul className='flex w-full flex-col gap-1 overflow-x-hidden sm:pl-0'>
          <ResumeeForm />
        </ul>
      </div>
    </div>
  );
}
