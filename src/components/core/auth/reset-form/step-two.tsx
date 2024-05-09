import { FieldText } from '@/components/common';
import { UploadAvatar } from '@/components';
import { useI18n, useScopedI18n } from '@/utils/locales/client';
import React from 'react';
import { Control, useController } from 'react-hook-form';
import OTPInput from 'react-otp-input';

type Props = {
  control: Control<any>;
};

export function StepTwo({ control }: Props) {
  const t = useI18n();

  const {
    field: { value, onChange },
  } = useController({ control, name: 'otp' });

  return (
    <div className='mt-5'>
      <div className='my-3 flex flex-col items-center justify-center'>
        <label className='w-full text-center text-xbase font-bold text-secondary dark:text-main'>
          {t('forms.phone-verification')}
        </label>
        <OTPInput
          value={value}
          onChange={onChange}
          numInputs={4}
          inputType='number'
          placeholder='0000'
          inputStyle={{ width: '50px', margin: 5 }}
          renderInput={(props) => (
            <input
              {...props}
              className='m-2 appearance-none justify-center rounded py-3 text-text'
            />
          )}
        />
      </div>
    </div>
  );
}
