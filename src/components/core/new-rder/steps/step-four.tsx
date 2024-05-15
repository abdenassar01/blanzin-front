'use client';

import {
  DatePicker,
  Dropdown,
  FieldText,
  ImagesGalleryField,
  TextArea,
} from '@/components';
import { useI18n } from '@/utils/locales/client';
import React from 'react';
import { Control } from 'react-hook-form';

type Props = {
  control: Control<any>;
};

export function StepFour({ control }: Props) {
  const t = useI18n();

  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 4, maxDate.getDay());

  return (
    <div className='w-[80%] animate-enter pt-12'>
      <div className='text-center text-xm text-secondary dark:text-main'>
        {/* {label} */}
      </div>
      <div className='flex w-full flex-wrap justify-between'>
        <Dropdown
          control={control}
          items={['Moroccan Wide', 'Casablanca']}
          extractDisplayMember={(item) => item}
          extractValueMember={(item) => item}
          label={t('forms.location')}
          name='location'
          wrapperClassName='w-[49%]'
        />
        <FieldText
          control={control}
          label={t('forms.title')}
          placeholder={t('forms.title')}
          name='title'
          className='w-[49%]'
        />

        <FieldText
          control={control}
          label={t('forms.budget')}
          placeholder='100'
          name='budget'
          type='number'
          className='w-[49%]'
        />
        <DatePicker
          control={control}
          name='jobPeroid'
          label={t('forms.peroid')}
          placeholder={t('forms.peroid')}
          wrapperClassName='w-[49%]'
          minimumDate={new Date()}
          maximumDate={maxDate}
          selectRange
        />
        <TextArea
          control={control}
          label={t('forms.description')}
          placeholder={t('forms.description')}
        />
        <ImagesGalleryField
          control={control}
          label='Gallery'
          name='gallery'
          className=''
        />
      </div>
    </div>
  );
}
