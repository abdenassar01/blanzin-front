import { Heading, ResumeeForm } from '@/components';
import { useScopedI18n } from '@/utils/locales/client';
import React from 'react';

export function StepOne() {
  const t = useScopedI18n('application');

  return (
    <div className='h-full'>
      <div className='text-xxm'>
        <Heading heading={t('resume')} />
      </div>
      <div className='mt-8 h-full w-full rounded-xl '>
        <div className='flex h-full w-full flex-col gap-1 overflow-x-hidden sm:pl-0'>
          <ResumeeForm />
        </div>
      </div>
    </div>
  );
}
