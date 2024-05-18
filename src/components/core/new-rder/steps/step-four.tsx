'use client';

import {
  DatePicker,
  Dropdown,
  FieldText,
  ImagesGalleryField,
  TextArea,
} from '@/components';
import { cn } from '@/utils';
import { useI18n } from '@/utils/locales/client';
import React from 'react';
import { Control } from 'react-hook-form';

type Props = {
  control: Control<any>;
  isBack: boolean;
};

export function StepFour({ control, isBack }: Props) {
  const t = useI18n();

  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 4, maxDate.getDay());

  return (
    <div
      className={cn(
        'pt-12 sm:pt-0',
        isBack ? 'animate-leave' : 'animate-enter'
      )}
    >
      <div className='text-center text-xm text-secondary dark:text-main'>
        {/* {label} */}
      </div>
      <div className='flex w-full flex-wrap justify-between sm:gap-3'>
        <Dropdown
          control={control}
          items={['Moroccan Wide', 'Casablanca']}
          extractDisplayMember={(item) => item}
          extractValueMember={(item) => item}
          label={t('forms.location')}
          name='location'
          wrapperClassName='w-[49%] sm:w-full'
        />
        <FieldText
          control={control}
          label={t('forms.title')}
          name='title'
          className='w-[49%] sm:w-full'
        />

        <FieldText
          control={control}
          label={t('forms.budget')}
          placeholder='100'
          name='budget'
          type='number'
          className='w-[49%] sm:w-full'
        />
        <DatePicker
          control={control}
          name='jobPeroid'
          label={t('forms.peroid')}
          placeholder={t('forms.peroid')}
          wrapperClassName='w-[49%] sm:w-full'
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
          className='mt-3'
        />
      </div>
    </div>
  );
}
