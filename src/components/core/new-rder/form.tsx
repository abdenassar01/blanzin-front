'use client';

import { Button, ProgressBar } from '@/components';
import { useI18n, useScopedI18n } from '@/utils/locales/client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { StepFour, StepOne, StepThree, StepTwo } from './steps';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { cn } from '@/utils';
import { isMobile } from 'react-device-detect';

export function NewOrderForm() {
  const { control, watch } = useForm({
    defaultValues: {
      gallery: [],
      category: 1,
    },
  });
  const { theme } = useTheme();

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

  const t = useI18n();

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='relative h-[35vw] w-full pt-6 sm:h-[50vw] sm:w-full sm:pt-0'>
        {getStep()}
      </div>
      <div className={cn('mt-4 flex w-full justify-between gap-3 sm:w-full')}>
        {currentStep !== 1 ? (
          <Button
            onClick={() => {
              setCurrentStep(currentStep - 1);
              setIsBack(true);
            }}
            theme='secondary'
            width='48%'
            className='group relative flex items-center'
          >
            <Image
              className='icon absolute left-2'
              alt='go back'
              src={
                theme === 'dark'
                  ? require('@/assets/images/icons/dark/back-arrow.svg')
                  : require('@/assets/images/icons/light/back-arrow.svg')
              }
            />
            <div className='text-main group-hover:text-secondary'>
              {t('button.prev')}
            </div>
          </Button>
        ) : (
          <div></div>
        )}
        {isBack && currentStep <= 4 ? (
          <Button
            width='48%'
            onClick={() => {
              setCurrentStep(currentStep + 1);
              setIsBack(true);
            }}
            className='relative flex items-center'
          >
            <div className=''>{t('button.next')}</div>
            <Image
              className='icon absolute right-2 -scale-100'
              alt='go back'
              src={
                theme === 'dark'
                  ? require('@/assets/images/icons/dark/back-arrow.svg')
                  : require('@/assets/images/icons/light/back-arrow.svg')
              }
            />
          </Button>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
