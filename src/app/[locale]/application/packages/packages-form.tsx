'use client';

import { PaymentCardsSelector } from '@/components';
import React from 'react';
import { useForm } from 'react-hook-form';

export function PackagesForm() {
  const { control } = useForm();
  return (
    <div className='w-full'>
      <PaymentCardsSelector control={control} name='pack' />
    </div>
  );
}
