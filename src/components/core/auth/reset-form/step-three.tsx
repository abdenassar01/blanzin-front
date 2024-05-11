import { FieldText } from '@/components';
import { useScopedI18n } from '@/utils/locales/client';
import React from 'react';
import { Control } from 'react-hook-form';

type Props = {
  control: Control<any>;
};

export function StepThree({ control }: Props) {
  const t = useScopedI18n('forms');
  return (
    <div className=''>
      <FieldText
        control={control}
        label={t('password')}
        placeholder={t('password')}
        name='password'
      />
      <FieldText
        control={control}
        label={t('password-confirm')}
        placeholder={t('password-confirm')}
        name='repassword'
      />
    </div>
  );
}
