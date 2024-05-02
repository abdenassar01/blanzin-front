import { FieldText } from '@/components/common';
import { UploadAvatar } from '@/components';
import { useScopedI18n } from '@/utils/locales/client';
import React from 'react';
import { Control } from 'react-hook-form';

type Props = {
  control: Control<any>;
};

export default function StepTwo({ control }: Props) {
  const t = useScopedI18n('forms');

  return (
    <div className='mt-5'>
      <UploadAvatar
        imgClassName='border-[1px] border-secondary rounded-full'
        control={control}
        name='avatar'
      />
      <FieldText
        control={control}
        label={t('username')}
        placeholder={t('username')}
        name='username'
      />
      <FieldText
        control={control}
        label={t('email')}
        placeholder={t('email')}
        name='email'
      />
    </div>
  );
}
