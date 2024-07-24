'use client';

import { Button, FieldText, Heading, PhoneField, TextArea } from '@/components';
import { useScopedI18n } from '@/utils/locales/client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';
import { TasksField } from '@/components/common/form-fields/tasks-field';

export default function AccountForm() {
  const { control, watch } = useForm({
    defaultValues: {
      professionalSkills: [],
      tools: [],
      phone: '',
      email: '',
    },
  });

  const t = useScopedI18n('forms');
  const buttonsT = useScopedI18n('button');

  const searchParams = useSearchParams();
  const role = searchParams.get('role');

  return (
    <div>
      <div className='mt-3 flex flex-wrap justify-between gap-2 pb-3 sm:w-full sm:flex-col'>
        <div className='mt-6 flex w-full justify-between sm:flex-col'>
          <FieldText
            className='w-[47%] sm:w-full'
            control={control}
            inputClassName='bg-background dark:bg-backgroundSecondaryDark dark:shadow-black'
            label={t('username')}
            placeholder={t('username')}
            name='username'
          />
          <FieldText
            className='w-[47%] sm:w-full'
            control={control}
            inputClassName='bg-background dark:bg-backgroundSecondaryDark dark:shadow-black'
            label={t('email')}
            placeholder={t('email')}
            name='email'
          />
        </div>
        <PhoneField
          inputClassName='bg-background'
          wrapperClassName='bg-backgroundSecondary'
          className='w-[47%] sm:w-full'
          control={control}
          label={t('phone')}
          name='phone'
          placeholder='6063962973'
        />
        {role === 'expert' && (
          <div className='my-5 flex w-full flex-col gap-2'>
            <div className='mb-3 text-xm'>
              <Heading heading={t('freelancer-details')} />
            </div>
            <TasksField
              control={control}
              name='professionalSkills'
              label={t('professional-skills')}
            />
            <TasksField control={control} name='tools' label={t('tools')} />
            <TextArea
              className='bg-background dark:bg-backgroundSecondaryDark'
              control={control}
              name='description'
              label='Description'
            />
          </div>
        )}
        <div className='mt-6 flex w-full justify-end'>
          <div className='w-[20%] sm:w-[50%]'>
            <Button text={buttonsT('apply')} />
          </div>
        </div>
      </div>
    </div>
  );
}
