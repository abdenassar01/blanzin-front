import { useScopedI18n } from '@/utils/locales/client';
import React from 'react';
import { Control, useController } from 'react-hook-form';
import Otp from 'react-otp-input';

type Props = {
  control: Control<any>;
};

export function StepThree({ control }: Props) {
  const {
    field: { value, onChange },
  } = useController({ control, name: 'otp' });

  const t = useScopedI18n('auth');

  return (
    <div className=''>
      <div className='my-3  items-center justify-center'>
        <label className='w-full text-base font-bold text-secondary dark:text-main'>
          {t('otp-label')}
        </label>
        <div className='text-center'>{t('otp-text')}</div>
        <div className=' flex h-[400px] flex-col items-center justify-center'>
          <Otp
            value={value}
            onChange={onChange}
            numInputs={4}
            inputType='number'
            placeholder='0000'
            inputStyle={{ width: '70px', margin: 5 }}
            renderInput={(props) => (
              <input
                {...props}
                className='m-2 appearance-none justify-center rounded py-3 text-text'
              />
            )}
          />
        </div>
      </div>
    </div>
  );
}
