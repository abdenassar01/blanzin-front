import {
  Button,
  DatePicker,
  DescriptionField,
  Dropdown,
  FieldText,
} from '@/components';
import { useScopedI18n } from '@/utils/locales/client';
import React from 'react';
import { Control, useFieldArray, useForm, useWatch } from 'react-hook-form';

type Props = {
  control: Control<any>;
};

export function StepTwo({ control }: Props) {
  const t = useScopedI18n('experience');

  const { append } = useFieldArray({ name: 'experiences', control });

  const {
    control: innerControl,
    handleSubmit,
    watch,
  } = useForm({
    defaultValues: { description: [] },
  });

  const onSubmit = (data: any) => {
    append(data);
  };

  return (
    <div className='overflow-y-scroll '>
      <div className='w-[40%] sm:w-full'>
        <Button
          theme='success'
          text={t('add-experience')}
          onClick={handleSubmit(onSubmit)}
        />
      </div>
      <div className='flex flex-wrap justify-between gap-2 pb-3 sm:flex-col'>
        <FieldText
          className='w-[49%] sm:w-full'
          control={innerControl}
          inputClassName='bg-background dark:bg-backgroundDark'
          label={t('title')}
          placeholder={t('title')}
          name='jobTitle'
        />
        <FieldText
          className='w-[49%] sm:w-full'
          control={innerControl}
          inputClassName='bg-background dark:bg-backgroundDark'
          label={t('employee')}
          placeholder={t('employee')}
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
        <DescriptionField
          control={innerControl}
          items={['This is a test text', 'second']}
          label={t('description')}
          name='description'
          suggestions={watch('description')}
        />

        <Dropdown
          control={innerControl}
          name='country'
          items={['Morocco', 'Algeria', 'Germany']}
          extractDisplayMember={(item) => item}
          extractValueMember={(item) => item}
          label={t('category')}
          className='bg-background dark:bg-backgroundDark'
          dropdownClassName='bg-background dark:bg-backgroundDark'
          wrapperClassName='w-[49%] sm:w-full '
        />
      </div>
    </div>
  );
}
