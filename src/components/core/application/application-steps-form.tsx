'use client';

import { cn } from '@/utils';
import { useScopedI18n } from '@/utils/locales/client';
import React, { useState } from 'react';
import { StepFour, StepOne, StepThree, StepTwo } from './steps';
import { useForm } from 'react-hook-form';

type Props = {};

export function ApplicationStepsForm({}: Props) {
  const t = useScopedI18n('application');

  const { control } = useForm();

  const [currentStep, setCurrentStep] = useState<number>(1);

  const pages = [
    {
      step: 1,
      label: t('resume'),
    },
    {
      step: 2,
      label: t('docs-folder'),
    },
    {
      step: 3,
      label: t('packs-heading'),
    },
    {
      step: 4,
      label: t('contract'),
    },
  ];

  function getStep() {
    switch (currentStep) {
      case 1:
        return <StepOne />;
      case 2:
        return <StepTwo />;
      case 3:
        return <StepThree control={control} />;
      case 4:
        return <StepFour control={control} />;
    }
  }

  return (
    <div className=''>
      <div className='flex sm:flex-col'>
        <div className='w-[19.444vw] sm:w-[100%]'>
          <ul className='sm:no-scrollbar mt-[30px] w-full sm:mx-3 sm:flex sm:gap-[24px] sm:overflow-y-scroll'>
            {React.Children.toArray(
              pages.map((page) => (
                <li className=' text-cardText w-full text-base'>
                  <button
                    onClick={() => setCurrentStep(page.step)}
                    className={cn(
                      'relative block h-full w-full whitespace-nowrap rounded-l-lg p-3  sm:rounded-t-lg sm:px-6 sm:py-5 sm:text-mb-base',
                      currentStep === page.step
                        ? 'board-link-active border-blue-500 sm:border-t-1 border-l-4 bg-backgroundSecondary font-normal !text-main prose-em:block dark:bg-backgroundDark sm:border-l-0'
                        : 'dark:bg-backgroundSecondaryDark '
                    )}
                  >
                    <em className='absolute -top-6 right-0 hidden h-6 w-6 bg-backgroundSecondary dark:bg-backgroundDark dark:after:!bg-backgroundSecondaryDark sm:hidden' />
                    <div className='flex'>{page.label}</div>
                    <em className='absolute -bottom-6 right-0 hidden h-6 w-6 bg-backgroundSecondary dark:z-50 dark:bg-backgroundDark dark:after:!bg-backgroundSecondaryDark sm:hidden' />
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
        <div className='min-h-[500px] w-full overflow-hidden rounded-xl bg-backgroundSecondary p-4 dark:bg-backgroundDark'>
          {getStep()}
        </div>
      </div>
      <div className='mt-3 flex w-full justify-end'>
        <div className=''>hallo</div>
      </div>
    </div>
  );
}
