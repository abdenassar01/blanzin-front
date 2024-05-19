import {
  DatePicker,
  DescriptionField,
  Dropdown,
  FieldText,
} from '@/components';
import { useScopedI18n } from '@/utils/locales/client';
import React from 'react';
import { Control } from 'react-hook-form';

type Props = {
  control: Control<any>;
};

export function StepTwo({ control }: Props) {
  const t = useScopedI18n('experience');

  return (
    <div className='flex flex-wrap justify-between gap-2 overflow-y-scroll pb-3 sm:flex-col'>
      <FieldText
        className='w-[49%] sm:w-full'
        control={control}
        inputClassName='bg-background dark:bg-backgroundDark'
        label={t('title')}
        placeholder={t('title')}
        name='jobTitle'
      />
      <FieldText
        className='w-[49%] sm:w-full'
        control={control}
        inputClassName='bg-background dark:bg-backgroundDark'
        label={t('employee')}
        placeholder={t('employee')}
        name='employee'
      />

      <DatePicker
        control={control}
        label={t('start-date')}
        name='startDate'
        maximumDate={new Date()}
        wrapperClassName='w-[49%] sm:w-full'
        className='bg-background dark:bg-backgroundDark'
      />
      <DatePicker
        control={control}
        label={t('end-date')}
        name='enddate'
        maximumDate={new Date()}
        wrapperClassName='w-[49%] sm:w-full'
        className='bg-background dark:bg-backgroundDark'
      />
      <DescriptionField
        control={control}
        items={['This is a test text', 'second']}
        label={t('description')}
        name='description'
      />

      <Dropdown
        control={control}
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
  );
}
