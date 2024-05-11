'use client';

import { PaymentPackSelector } from '@/components';
import React from 'react';
import { useForm } from 'react-hook-form';

export function PackagesForm() {
  const { control } = useForm();
  return (
    <div>
      <PaymentPackSelector control={control} name='pack' />
    </div>
  );
}
