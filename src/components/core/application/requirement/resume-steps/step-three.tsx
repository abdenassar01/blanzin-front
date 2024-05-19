import { Button, DatePicker, FieldText } from '@/components';
import { useScopedI18n } from '@/utils/locales/client';
import React from 'react';
import { Control, useFieldArray, useForm } from 'react-hook-form';

type Props = {
  control: Control<any>;
};

export function StepThree({ control }: Props) {
  const t = useScopedI18n('education');

  const { append } = useFieldArray({ name: 'educations', control });

  const { control: innerControl, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    append(data);
  };

  return (
    <div className='overflow-y-scroll '>
      <div className='w-[40%] sm:w-full'>
        <Button
          theme='success'
          text={t('add-education')}
          onClick={handleSubmit(onSubmit)}
        />
      </div>
      <div className='mb-3 flex flex-wrap justify-between gap-2 pb-12 sm:mb-0 sm:flex-col'>
        <FieldText
          className='w-[49%] sm:w-full'
          control={innerControl}
          inputClassName='bg-background dark:bg-backgroundDark'
          label={t('specialisation')}
          placeholder={t('specialisation')}
          name='jobTitle'
        />
        <FieldText
          className='w-[49%] sm:w-full'
          control={innerControl}
          inputClassName='bg-background dark:bg-backgroundDark'
          label={t('center')}
          placeholder={t('center')}
          name='employee'
        />

        <DatePicker
          control={innerControl}
          label={t('start-date')}
          name='startDate'
          maximumDate={new Date()}
          wrapperClassName='w-[49%] sm:w-full'
          className='bg-background dark:bg-backgroundDark'
        />
        <DatePicker
          control={innerControl}
          label={t('end-date')}
          name='enddate'
          maximumDate={new Date()}
          wrapperClassName='w-[49%] sm:w-full'
          className='bg-background dark:bg-backgroundDark'
        />
      </div>
    </div>
  );
}
