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

export function StepThree({ control, isBack }: Props) {
  const t = useI18n();

  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 4, maxDate.getDay());

  return (
    <div
      className={cn(
        'absolute w-full overflow-y-scroll pt-12 sm:pt-0',
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
          className='dark:bg-backgroundDark'
          wrapperClassName='w-[49%] sm:w-full'
          dropdownClassName='dark:bg-backgroundDark'
        />
        <FieldText
          control={control}
          label={t('forms.firstname')}
          placeholder={t('forms.firstname')}
          name='name'
          className='w-[49%] sm:w-full'
          inputClassName='dark:bg-backgroundDark'
        />
        <FieldText
          control={control}
          label={t('forms.lastname')}
          placeholder={t('forms.lastname')}
          name='name'
          className='w-[49%] sm:w-full'
          inputClassName='dark:bg-backgroundDark'
        />
        <div className='w-full'>
          <ImagesGalleryField
            control={control}
            label='Gallery'
            name='gallery'
            className='mt-3'
          />
        </div>
      </div>
    </div>
  );
}
