import { PhoneField } from '@/components';
import { useI18n } from '@/utils/locales/client';
import React from 'react';
import { Control } from 'react-hook-form';

type Props = {
  control: Control<any>;
};

export function StepOne({ control }: Props) {
  const t = useI18n();
  return (
    <div className='my-3 flex flex-col gap-3'>
      <PhoneField
        control={control}
        label={t('forms.phone')}
        placeholder='0666666666'
        name='phone'
      />
      <p className='text-sm text-text dark:text-textdark'>
        {t('otp-request-text')}
      </p>
    </div>
  );
}
