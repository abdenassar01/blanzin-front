'use client';

import { cn } from '@/utils';
import { useScopedI18n } from '@/utils/locales/client';
import React, { useState } from 'react';
import { StepFour, StepOne, StepThree, StepTwo } from './steps';
import { useForm } from 'react-hook-form';
import { Button } from '@/components';

type Props = {};

export function ApplicationStepsForm({}: Props) {
  const t = useScopedI18n('application');

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      lang: [],
      jobs: [],
      diploma: [],
      internship: [],
      acknowledgement: [],
    },
  });

  function onSubmit(data: any) {
    console.log(data);
  }

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
        return <StepTwo control={control} />;
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
                      'relative block h-full w-[85%] whitespace-nowrap rounded-lg p-3 sm:rounded-t-lg sm:px-6 sm:py-5 ',
                      currentStep === page.step
                        ? 'board-link-active border-blue-500 sm:border-t-1 border-l-4 bg-backgroundSecondary font-normal !text-main shadow-lg prose-em:block dark:bg-backgroundDark sm:border-l-0'
                        : 'text-secondary dark:bg-backgroundSecondaryDark dark:text-textdark'
                    )}
                  >
                    <div className='flex'>{page.label}</div>
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
        <div className='relative h-[1020px] w-full rounded-xl bg-backgroundSecondary p-4 shadow-lg dark:bg-backgroundDark dark:shadow-black'>
          {getStep()}
        </div>
      </div>
      <div className='mt-10 flex w-full justify-end'>
        <div className='w-[20%] sm:w-[50%]'>
          <Button
            disabled={!!errors}
            theme='success'
            text={t('submit')}
            onClick={handleSubmit(onSubmit)}
          />
        </div>
      </div>
    </div>
  );
}
