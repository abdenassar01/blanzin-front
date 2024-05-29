import { ApplicationStepsForm } from '@/components/core/application/application-steps-form';

import React from 'react';

export default function Requirement() {
  return (
    <div className='py-12 '>
      <div className='min-h-[50vw] bg-background py-12 dark:bg-backgroundSecondaryDark'>
        <div className='container '>
          <ApplicationStepsForm />
        </div>
      </div>
    </div>
  );
}
