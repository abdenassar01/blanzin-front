'use client';

import { Button, Link, ProgressBar } from '@/components';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import StepOne from './step-one';
import { useI18n } from '@/utils/locales/client';
import StepTwo from './step-two';

export function RegisterForm() {
  const { control } = useForm();
  const [currentStep, setCurrentStep] = useState<number>(1);

  const t = useI18n();

  const getCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <StepOne control={control} />;
      case 2:
        return <StepTwo control={control} />;
    }
  };

  return (
    <div>
      <ProgressBar currentStep={currentStep} />
      {getCurrentStep()}
      <div className='flex justify-end gap-2'>
        {currentStep !== 1 && (
          <Button
            text={t('button.prev')}
            theme='secondary'
            onClick={() => setCurrentStep((prev) => prev - 1)}
          />
        )}
        <Button
          width={currentStep === 1 ? '49%' : '100%'}
          text={t('button.next')}
          onClick={() => setCurrentStep((prev) => prev + 1)}
        />
      </div>
      <div className='flex justify-center gap-1'>
        {t('auth.dont-have-account')}
        <Link text={t('auth.create-account')} url='/register' />
      </div>
    </div>
  );
}
