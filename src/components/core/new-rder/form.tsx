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
import { StepOne, StepThree, StepTwo } from './steps';

type Props = {};

export function NewOrderForm({}: Props) {
  const { control, watch } = useForm();

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
            label={t('select-category')}
            control={control}
          />
        );
      case 3:
        return (
          <StepThree
            setCurrentStep={setCurrentStep}
            label={t('select-category')}
            control={control}
          />
        );
      case 4:
        return (
          <StepOne
            setCurrentStep={setCurrentStep}
            label={t('select-category')}
            control={control}
          />
        );
    }
  }

  const t = useScopedI18n('forms');
  const date = new Date();
  date.setMonth(date.getMonth() + 4, date.getDay());

  return (
    <div className='flex flex-col items-center justify-center'>
      <ProgressBar className='w-[50%]' currentStep={currentStep} steps={3} />
      {getStep()}
    </div>
  );
}
