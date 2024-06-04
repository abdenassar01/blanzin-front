import { FieldText, PhoneField, ProfileTabSelector } from '@/components';
import { useScopedI18n } from '@/utils/locales/client';
import React from 'react';
import { Control } from 'react-hook-form';

type Props = {
  control: Control<any>;
};

export function StepOne({ control }: Props) {
  const t = useScopedI18n('forms');
  return (
    <div className='my-3 flex flex-col gap-3'>
      <PhoneField
        control={control}
        label={t('phone')}
        placeholder='0666666666'
        name='phone'
      />
      <FieldText
        control={control}
        label={t('password')}
        type='password'
        placeholder={t('password')}
        name='password'
      />
      <FieldText
        control={control}
        label={t('password-confirm')}
        type='password'
        placeholder={t('password-confirm')}
        name='repassword'
      />
    </div>
  );
}
