'use client';

import {
  Button,
  DatePicker,
  Dropdown,
  FieldText,
  ImagesGalleryField,
  RichTextEditor,
} from '@/components';
import { useScopedI18n } from '@/utils/locales/client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { cn } from '@/utils';

export function UpdateOrderForm() {
  const { control } = useForm({
    defaultValues: {
      gallery: [],
      category: 1,
    },
  });
  const t = useScopedI18n('forms');

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='relative w-full pt-6 sm:h-[100vh] sm:w-full sm:pt-0'>
        <div className='flex w-full flex-wrap justify-between p-3 sm:gap-3'>
          <Dropdown
            control={control}
            items={['Moroccan Wide', 'Casablanca']}
            extractDisplayMember={(item) => item}
            extractValueMember={(item) => item}
            label={t('location')}
            name='location'
            className='dark:bg-backgroundDark'
            dropdownClassName='dark:bg-backgroundDark'
            wrapperClassName='w-[49%] sm:w-full'
          />
          <Dropdown
            control={control}
            items={['Moroccan Wide', 'Casablanca']}
            extractDisplayMember={(item) => item}
            extractValueMember={(item) => item}
            label={t('location')}
            name='location'
            className='dark:bg-backgroundDark'
            dropdownClassName='dark:bg-backgroundDark'
            wrapperClassName='w-[49%] sm:w-full'
          />
          <Dropdown
            control={control}
            items={['Moroccan Wide', 'Casablanca']}
            extractDisplayMember={(item) => item}
            extractValueMember={(item) => item}
            label={t('location')}
            name='location'
            className='dark:bg-backgroundDark'
            dropdownClassName='dark:bg-backgroundDark'
            wrapperClassName='w-[49%] sm:w-full'
          />
          <Dropdown
            control={control}
            items={['Moroccan Wide', 'Casablanca']}
            extractDisplayMember={(item) => item}
            extractValueMember={(item) => item}
            label={t('location')}
            name='location'
            className='dark:bg-backgroundDark'
            dropdownClassName='dark:bg-backgroundDark'
            wrapperClassName='w-[49%] sm:w-full'
          />
          <FieldText
            control={control}
            label={t('title')}
            name='title'
            inputClassName='dark:bg-backgroundDark'
            className='w-[49%] sm:w-full'
          />

          <FieldText
            control={control}
            label={t('budget')}
            placeholder='100'
            name='budget'
            type='number'
            inputClassName='dark:bg-backgroundDark'
            className='w-[49%] sm:w-full'
          />
          <div className='flex w-[49%] gap-2 sm:w-full'>
            <DatePicker
              control={control}
              name='startDate'
              label={t('start-date')}
              placeholder={t('start-date')}
              wrapperClassName=''
              minimumDate={new Date()}
              className='dark:bg-backgroundDark'
              selectRange
            />
            <DatePicker
              control={control}
              name='endDate'
              label={t('end-date')}
              placeholder={t('end-date')}
              wrapperClassName=''
              minimumDate={new Date()}
              className='dark:bg-backgroundDark'
              selectRange
            />
          </div>
          <div className='my-4 w-full'>
            <RichTextEditor
              name='description'
              control={control}
              label={t('description')}
              placeholder={t('description')}
              className='dark:bg-backgroundDark'
            />
            <ImagesGalleryField
              control={control}
              label='Gallery'
              name='gallery'
              className='mt-3'
            />
          </div>
        </div>
      </div>
      <div className={cn('mt-4 flex w-full justify-between gap-3 sm:w-full')}>
        <Button text='submit' />
      </div>
    </div>
  );
}
