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
  return (
    <div className='mb-[15vh]'>
      <div className='my-3 flex flex-col items-center justify-center'>
        <label className='w-full text-base font-bold text-secondary dark:text-main'>
          Label
        </label>
        <Otp
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
