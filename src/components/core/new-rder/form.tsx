'use client';

import {
  CategorySelector,
  DatePicker,
  Dropdown,
  FieldText,
  ItemsTabSelector,
  TextArea,
} from '@/components';
import { useScopedI18n } from '@/utils/locales/client';
import React from 'react';
import { useForm } from 'react-hook-form';

type Props = {};

export function NewOrderForm({}: Props) {
  const { control, watch } = useForm();
  const t = useScopedI18n('forms');
  const date = new Date();
  date.setMonth(date.getMonth() + 4, date.getDay());
  return (
    <div className=' rounded-xl bg-backgroundSecondary p-4 dark:bg-backgroundSecondaryDark'>
      <div className='flex gap-2 sm:flex-col'>
        <div className='w-full rounded-lg bg-background p-2 dark:bg-backgroundDark'>
          <CategorySelector
            control={control}
            items={[
              { id: 1, label: 'Category1', icon: '/category.png' },
              { id: 2, label: 'Category1', icon: '/category.png' },
              { id: 3, label: 'Category1', icon: '/category.png' },
              { id: 4, label: 'Category1', icon: '/category.png' },
              { id: 5, label: 'Category1', icon: '/category.png' },
            ]}
            extractDisplayMember={(item) => item.label}
            extractValue={(item) => item.id}
            extractIcon={(item) => item.icon}
            label={t('category')}
            name='category'
          />
        </div>
        {watch('category') && (
          <div className='w-full rounded-lg bg-background p-2 dark:bg-backgroundDark'>
            <CategorySelector
              control={control}
              items={[
                { id: 1, label: 'Category1', icon: '/category.png' },
                { id: 2, label: 'Category1', icon: '/category.png' },
                { id: 3, label: 'Category1', icon: '/category.png' },
                { id: 4, label: 'Category1', icon: '/category.png' },
                { id: 5, label: 'Category1', icon: '/category.png' },
              ]}
              extractDisplayMember={(item) => item.label}
              extractValue={(item) => item.id}
              extractIcon={(item) => item.icon}
              label={t('sub-category')}
              name='subCategory'
            />
          </div>
        )}
        {watch('category') === 4 && watch('subCategory') && (
          <div className='w-full rounded-lg bg-background p-2 dark:bg-backgroundDark'>
            <CategorySelector
              control={control}
              items={[
                { id: 1, label: 'Category1', icon: '/category.png' },
                { id: 2, label: 'Category1', icon: '/category.png' },
                { id: 3, label: 'Category1', icon: '/category.png' },
                { id: 4, label: 'Category1', icon: '/category.png' },
                { id: 5, label: 'Category1', icon: '/category.png' },
              ]}
              extractDisplayMember={(item) => item.label}
              extractValue={(item) => item.id}
              extractIcon={(item) => item.icon}
              label={t('child-su-category')}
              name='childCategory'
            />
          </div>
        )}
      </div>

      <div className='mt-3 flex flex-wrap justify-between gap-2 sm:flex-col'>
        <Dropdown
          control={control}
          name='location'
          wrapperClassName='w-[49%] sm:w-full'
          className='bg-background dark:bg-backgroundDark'
          dropdownClassName='top-[70px] shadow-none bg-background dark:bg-backgroundDark'
          label={t('location')}
          items={[
            { id: 1, label: 'Moroccan wide' },
            { id: 1, label: 'Tanger' },
            { id: 1, label: 'Casablanca' },
          ]}
          extractDisplayMember={(item) => item.label}
          extractValueMember={(item) => item.id}
        />
        <FieldText
          className='w-[49%] sm:w-full'
          control={control}
          inputClassName='bg-background dark:bg-backgroundDark'
          label={t('title')}
          placeholder={t('title')}
          name='title'
        />
        <TextArea
          control={control}
          label={t('description')}
          placeholder={t('description')}
          className='bg-background dark:bg-backgroundDark'
          wrapperClassName='w-[49%] sm:w-full'
        />
        <div className='w-[49%] sm:w-full'>
          <FieldText
            className=''
            control={control}
            inputClassName='bg-background dark:bg-backgroundDark'
            label={t('budget')}
            placeholder={t('budget')}
            name='price'
            type='number'
          />
          <DatePicker
            maximumDate={date}
            minimumDate={new Date()}
            selectRange
            control={control}
            label={t('peroid')}
            name='jobPeroid'
            className='bg-background dark:bg-backgroundDark'
          />
        </div>
      </div>
    </div>
  );
}
