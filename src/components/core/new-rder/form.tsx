'use client';

import { Button } from '@/components';
import { useI18n } from '@/utils/locales/client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { StepFour, StepOne, StepThree, StepTwo } from './steps';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { cn } from '@/utils';
import { useRouter } from 'next/navigation';
import { isMobile } from 'react-device-detect';

export function NewOrderForm() {
  const { control, watch } = useForm({
    defaultValues: {
      gallery: [],
      category: 1,
    },
  });
  const { theme } = useTheme();
  const t = useI18n();

  const { push } = useRouter();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isBack, setIsBack] = useState<boolean>(false);

  function getStep() {
    switch (currentStep) {
      case 1:
        return (
          <StepOne
            isBack={isBack}
            setIsBack={setIsBack}
            setCurrentStep={setCurrentStep}
            label={t('forms.select-category')}
            control={control}
          />
        );
      case 2:
        return (
          <StepTwo
            isBack={isBack}
            setIsBack={setIsBack}
            setCurrentStep={setCurrentStep}
            label={t('forms.select-sub-category')}
            control={control}
          />
        );
      case 3:
        if (watch('category') === 4) {
          return (
            <StepThree
              isBack={isBack}
              setIsBack={setIsBack}
              setCurrentStep={setCurrentStep}
              label={t('forms.select-child-sub-category')}
              control={control}
            />
          );
        }
        return <StepFour isBack={isBack} control={control} />;

      case 4:
        return <StepFour isBack={isBack} control={control} />;
    }
  }

  const getButtons = () => {
    return (
      <>
        {currentStep !== 1 && (
          <Button
            onClick={() => {
              setCurrentStep(currentStep - 1);
              setIsBack(true);
            }}
            theme='secondary'
            width={isMobile ? '48%' : '30%'}
            className='group flex items-center'
          >
            <div className='text-main group-hover:text-secondary'>
              {t('button.prev')}
            </div>
          </Button>
        )}
        {(watch('category') === 4 && currentStep === 4) ||
        (currentStep === 3 && watch('category') !== 4) ? (
          <Button
            width={isMobile ? '48%' : '25%'}
            onClick={() => {
              push('/');
            }}
            className=' flex items-center'
          >
            <div className=''>{t('button.submit')}</div>
          </Button>
        ) : isBack ? (
          <Button
            width={isMobile ? '48%' : '25%'}
            onClick={() => {
              setCurrentStep(currentStep + 1);
              setIsBack(true);
            }}
            className=' flex items-center'
          >
            <div className=''>{t('button.next')}</div>
          </Button>
        ) : (
          <i></i>
        )}
      </>
    );
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='relative h-[35vw] w-full pt-6 sm:h-[100vh] sm:w-full sm:pt-0'>
        {getStep()}
      </div>
      <div className={cn('mt-4 flex w-full justify-between gap-3 sm:w-full')}>
        {getButtons()}
      </div>
    </div>
  );
}
