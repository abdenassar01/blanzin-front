import {
  DocumentToggleOperation,
  Heading,
  ResumeToggleOperation,
} from '@/components';
import { cn } from '@/utils';
import { useScopedI18n } from '@/utils/locales/client';
import React from 'react';

type Props = {
  isBack: boolean;
};

export function StepOne({ isBack }: Props) {
  const t = useScopedI18n('application');

  return (
    <div
      className={cn(
        'absolute w-full',
        isBack ? 'animate-leave' : 'animate-enter'
      )}
    >
      <div className='text-secondary'>
        <Heading className='text-xm font-normal ' heading={t('Heading')} />
      </div>
      <div className='mt-8 w-full rounded-xl bg-backgroundSecondary p-4 shadow-md dark:bg-backgroundDark dark:shadow-backgroundSecondaryDark'>
        <ul className='flex w-full flex-col gap-1 overflow-x-hidden pl-6 sm:pl-0'>
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
    </div>
  );
}
