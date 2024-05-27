import {
  Heading,
  PaymentCardsSelector,
  PaymentPackSelector,
} from '@/components/common';
import { cn } from '@/utils';
import { useScopedI18n } from '@/utils/locales/client';
import React from 'react';
import { Control } from 'react-hook-form';

type Props = {
  control: Control<any>;
  isBack: boolean;
};

export function StepTwo({ control, isBack }: Props) {
  const t = useScopedI18n('application');

  return (
    <div
      className={cn(
        'absolute w-full',
        isBack ? 'animate-leave' : 'animate-enter'
      )}
    >
      <div className='my-6 text-secondary dark:text-main'>
        <Heading className='text-center text-xm' heading={t('packs-heading')} />
      </div>
      <div className='mt-14 flex w-full justify-center'>
        <div className='w-[80%] sm:w-full'>
          <div className='sm:hidden'>
            <PaymentCardsSelector control={control} name='pack' />
          </div>
          <div className='hidden sm:block'>
            <PaymentPackSelector control={control} name='pack' />
          </div>
        </div>
      </div>
    </div>
  );
}
