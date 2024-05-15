'use client';

import {
  CategorySelector,
  DatePicker,
  Dropdown,
  FieldText,
  ProgressBar,
  TextArea,
} from '@/components';
import { useScopedI18n } from '@/utils/locales/client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { StepFour, StepOne, StepThree, StepTwo } from './steps';
import Image from 'next/image';
import { useTheme } from 'next-themes';

type Props = {};

export function NewOrderForm({}: Props) {
  const { control, watch } = useForm({
    defaultValues: {
      gallery: [],
    },
  });
  const { theme } = useTheme();

  const [currentStep, setCurrentStep] = useState<number>(1);

  function getStep() {
    switch (currentStep) {
      case 1:
        return (
          <StepOne
            setCurrentStep={setCurrentStep}
            label={t('select-category')}
            control={control}
          />
        );
      case 2:
        return (
          <StepTwo
            setCurrentStep={setCurrentStep}
            label={t('select-sub-category')}
            control={control}
          />
        );
      case 3:
        if (watch('category') === 4) {
          return (
            <StepThree
              setCurrentStep={setCurrentStep}
              label={t('select-child-sub-category')}
              control={control}
            />
          );
        }
        return <StepFour control={control} />;

      case 4:
        return <StepFour control={control} />;
    }
  }

  const t = useScopedI18n('forms');

  return (
    <div className='flex flex-col items-center justify-center'>
      <ProgressBar
        className='w-[50%]'
        currentStep={currentStep}
        steps={watch('category') === 4 ? 4 : 3}
      />
      {currentStep !== 1 && (
        <div className='mt-4 w-[80%]'>
          <button onClick={() => setCurrentStep(currentStep - 1)}>
            <Image
              className='icon'
              alt='go back'
              src={
                theme === 'dark'
                  ? require('@/assets/images/icons/dark/back-arrow.svg')
                  : require('@/assets/images/icons/light/back-arrow.svg')
              }
            />
          </button>
        </div>
      )}
      {getStep()}
    </div>
  );
}
