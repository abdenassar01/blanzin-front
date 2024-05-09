'use client';

import { useI18n } from '@/utils/locales/client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { StepThree } from './step-three';
import { Button, Link, ProgressBar } from '@/components';
import { StepOne } from './step-one';
import { StepTwo } from './step-two';
import { useRouter } from 'next/navigation';

export function ResetForm() {
  const { control } = useForm();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const { push } = useRouter();

  const t = useI18n();

  const getCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <StepOne control={control} />;
      case 2:
        return <StepTwo control={control} />;
      case 3:
        return <StepThree control={control} />;
    }
  };

  const next = () => {
    switch (currentStep) {
      case 1:
        return setCurrentStep((prev) => prev + 1);
      case 2:
        return setCurrentStep((prev) => prev + 1);
      case 3:
        push('/');
    }
  };

  return (
    <div className='flex min-h-[50vh] flex-col justify-between '>
      <ProgressBar currentStep={currentStep} />
      {getCurrentStep()}
      <div className=''>
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
            onClick={next}
          />
        </div>
        <div className='flex justify-center gap-1'>
          {t('auth.already-have-account')}
          <Link text={t('auth.login')} url='/login' />
        </div>
      </div>
    </div>
  );
}
