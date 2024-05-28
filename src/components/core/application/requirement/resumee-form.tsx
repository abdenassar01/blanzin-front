'use client';

import { cn } from '@/utils';
import { useI18n } from '@/utils/locales/client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { StepFour, StepOne, StepThree, StepTwo } from './resume-steps';
import { Button } from '@/components';
import { useRouter } from 'next/navigation';
import { isMobile } from 'react-device-detect';

export function ResumeeForm() {
  const t = useI18n();
  const { control } = useForm({
    defaultValues: {
      experiences: [],
      educations: [],
      personalSkills: [],
      languageSkills: [],
    },
  });
  const [currentStep, setCurrentStep] = useState<number>(1);

  const { replace } = useRouter();

  function getStep() {
    switch (currentStep) {
      case 1:
        return <StepOne control={control} />;
      case 2:
        return <StepTwo control={control} />;
      case 3:
        return <StepThree control={control} />;
      case 4:
        return <StepFour control={control} />;
    }
  }

  return (
    <>
      <div className='sm:p-0'>
        <div className='relative w-[95%] sm:w-full'>
          {getStep()}
          <div
            className={cn(
              'mb-6 flex justify-between gap-4 sm:w-full',
              currentStep === 1 ? 'justify-end' : 'justify-between'
            )}
          >
            {currentStep !== 1 && (
              <Button
                width={isMobile ? '49%' : '15%'}
                className='transition-all duration-300'
                theme='secondary'
                onClick={() => setCurrentStep((prev) => prev - 1)}
                text={t('button.prev')}
              />
            )}
            <Button
              width={isMobile ? '49%' : '15%'}
              text={currentStep === 4 ? t('button.submit') : t('button.next')}
              onClick={
                currentStep === 4
                  ? () => replace('/')
                  : () => setCurrentStep((prev) => prev + 1)
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
