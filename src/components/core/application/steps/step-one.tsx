import { Heading, ResumeForm } from '@/components';
import { useScopedI18n } from '@/utils/locales/client';
import React from 'react';

export function StepOne() {
  return (
    <div className='h-full'>
      <div className=' h-full w-full rounded-xl '>
        <div className='flex h-full w-full flex-col gap-1 overflow-x-hidden sm:pl-0'>
          <ResumeForm />
        </div>
      </div>
    </div>
  );
}
