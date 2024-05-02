/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { TranslatedHeading } from '..';
import { cn } from '@/utils';

type Props = {
  steps?: number;
  currentStep?: number;
  header?: string;
  className?: string;
};

export function ProgressBar({
  steps = 3,
  currentStep = 0,
  header,
  className,
}: Props) {
  return (
    <div className={cn('my-1', className)}>
      {header && (
        <TranslatedHeading
          tranlationKey={header || ''}
          className='mb-1 text-main'
        />
      )}
      <div className='relative h-2 w-full rounded-full bg-backgroundSecondary dark:bg-backgroundSecondaryDark'>
        <div
          style={{ width: `calc((100%/${steps})*${currentStep})` }}
          className={cn('absolute left-0  top-0 h-2 rounded-full bg-main')}
        />
      </div>
    </div>
  );
}
