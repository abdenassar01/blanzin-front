'use client';

import { Button, Link, ProgressBar } from '@/components';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useI18n } from '@/utils/locales/client';
import { StepThree } from './step-three';
import { StepZero } from './step-zero';
import { StepOne } from './step-one';
import { StepTwo } from './step-two';
import { useRouter } from 'next/navigation';

export function RegisterForm() {
  const { control } = useForm();
  const [currentStep, setCurrentStep] = useState<number>(0);
  const { push } = useRouter();

  const t = useI18n();

  const getCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return <StepZero control={control} />;
      case 1:
        return <StepOne control={control} />;
      case 2:
        return <StepTwo control={control} />;
      case 3:
        return <StepThree control={control} />;
    }
  };

  return (
    <div className='flex h-full flex-col justify-between '>
      <ProgressBar currentStep={currentStep + 1} steps={4} />
      <div className='h-full min-h-[500px]'>{getCurrentStep()}</div>
      <div className=''>
        <div className='flex justify-end gap-2'>
          {currentStep !== 0 && (
            <Button
              text={t('button.prev')}
              theme='secondary'
              onClick={() => setCurrentStep((prev) => prev - 1)}
            />
          )}
          <Button
            width={currentStep === 0 ? '49%' : '100%'}
            text={currentStep !== 3 ? t('button.next') : t('button.submit')}
            onClick={() =>
              currentStep === 3 ? push('/') : setCurrentStep((prev) => prev + 1)
            }
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
