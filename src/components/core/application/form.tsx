'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { StepOne, StepThree, StepTwo } from './steps';
import { Button } from '@/components/common';
import { useScopedI18n } from '@/utils/locales/client';
import { isMobile } from 'react-device-detect';
import { useRouter } from 'next/navigation';

export default function ApplicationFormSteps() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isBack, setIsBack] = useState<boolean>(false);

  const { push } = useRouter();
  const { control, handleSubmit } = useForm();

  const buttonsT = useScopedI18n('button');

  function getStep() {
    switch (currentStep) {
      case 1:
        return <StepOne isBack={isBack} />;
      case 2:
        return <StepTwo isBack={isBack} control={control} />;
      case 3:
        return <StepThree isBack={isBack} control={control} />;
    }
  }

  const onSubmit = (data: any) => {
    console.log(data);
    push('/');
  };

  const getButtons = () => {
    return (
      <>
        {currentStep !== 1 ? (
          <Button
            onClick={() => {
              setCurrentStep(currentStep - 1);
              setIsBack(true);
            }}
            theme='secondary'
            width={isMobile ? '100%' : '25%'}
            className='group flex items-center'
          >
            <div className='text-main group-hover:text-secondary'>
              {buttonsT('prev')}
            </div>
          </Button>
        ) : (
          <div></div>
        )}
        {currentStep === 3 ? (
          <Button
            width={isMobile ? '100%' : '20%'}
            onClick={handleSubmit(onSubmit)}
            className=' flex items-center'
          >
            <div className=''>{buttonsT('submit')}</div>
          </Button>
        ) : (
          <Button
            width={isMobile ? '100%' : '20%'}
            onClick={() => {
              setIsBack(false);
              setCurrentStep(currentStep + 1);
            }}
            className=' flex items-center'
          >
            <div className=''>{buttonsT('next')}</div>
          </Button>
        )}
      </>
    );
  };

  return (
    <div className='container '>
      <div className='relative h-[600px] overflow-y-scroll'>{getStep()}</div>
      <div className='mt-10 w-full'>
        <div className='mt-4 flex w-full justify-between gap-3 sm:w-full '>
          {getButtons()}
        </div>
      </div>
    </div>
  );
}
