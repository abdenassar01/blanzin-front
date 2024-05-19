'use client';

import { cn } from '@/utils';
import { useI18n } from '@/utils/locales/client';
import Image from 'next/image';
import React, { useState } from 'react';
import { PdfViewer } from '../pdf-viewer';
import { useForm } from 'react-hook-form';
import { StepFour, StepOne, StepThree, StepTwo } from './resume-steps';
import { Button } from '@/components';

type Props = {
  title: string;
  doc: string;
};

export function ResumeToggleOperation({ doc, title }: Props) {
  const t = useI18n();
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const { control } = useForm({
    defaultValues: {
      description: [],
    },
  });
  const [currentStep, setCurrentStep] = useState<number>(1);

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
      <li>
        <div
          onClick={() => setShowOptions((prev) => !prev)}
          className='group my-2 flex cursor-pointer items-center justify-between'
        >
          <div className=''>
            <div className=' font-bold capitalize text-secondary dark:text-main'>
              {title}
            </div>
            <div className='h-[2px] w-0 rounded-full bg-secondary transition-all duration-300 group-hover:w-[100px] dark:bg-main'></div>
          </div>
          <Image
            className={cn(
              'w-[1.5vw] transition-all duration-500 sm:w-[5vw]',
              showOptions ? '-rotate-90' : ''
            )}
            alt='arrow down blanzin'
            src={require('@/assets/images/icons/arrow-down.svg')}
          />
        </div>
      </li>
      <div
        className={cn(
          'grid overflow-clip transition-all',
          showOptions ? 'grid-rows-[1fr] ' : 'grid-rows-[0fr]'
        )}
      >
        <div className='min-h-0'>
          <div className='flex gap-3 p-2 sm:flex-col sm:p-0'>
            <PdfViewer file={doc} />
            <div className='w-full'>
              {getStep()}
              <div
                className={cn(
                  'flex',
                  currentStep === 1 ? 'justify-end' : 'justify-between'
                )}
              >
                {currentStep !== 1 && (
                  <Button
                    width='49.5%'
                    className='transition-all duration-300'
                    theme='secondary'
                    onClick={() => setCurrentStep((prev) => prev - 1)}
                    text={t('button.prev')}
                  />
                )}
                <Button
                  width='49.5%'
                  text={t('button.next')}
                  onClick={() => setCurrentStep((prev) => prev + 1)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
