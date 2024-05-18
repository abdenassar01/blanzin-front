'use client';

import { PaymentCardsSelector, PaymentPackSelector } from '@/components';
import React from 'react';
import { useForm } from 'react-hook-form';

export function PackagesForm() {
  const { control } = useForm();
  return (
    <div className='w-full'>
      <div className='sm:hidden'>
        <PaymentCardsSelector control={control} name='pack' />
      </div>
      <div className='hidden sm:block'>
        <PaymentPackSelector control={control} name='pack' />
      </div>
    </div>
  );
}
