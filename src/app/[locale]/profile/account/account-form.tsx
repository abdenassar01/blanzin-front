'use client';

import {
  Button,
  DescriptionField,
  FieldText,
  Heading,
  PhoneField,
  TagsField,
} from '@/components';
import { useScopedI18n } from '@/utils/locales/client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';

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
  const suggestionsT = useScopedI18n('suggestions');

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
          <div className='my-5 w-full'>
            <div className='mb-3 text-xm'>
              <Heading heading={t('freelancer-details')} />
            </div>
            <DescriptionField
              control={control}
              items={watch('professionalSkills')}
              label={t('professional-skills')}
              name='professionalSkills'
              suggestions={[
                'Dev mobile',
                'Front end',
                'Database administration',
              ]}
              placeholder={suggestionsT('free-text')}
              suggestionsLabel={suggestionsT('description')}
              valuesLabel={suggestionsT('description-value')}
            />

            <DescriptionField
              control={control}
              items={watch('tools')}
              label={t('professional-skills')}
              name='tools'
              suggestions={[
                'Dev mobile',
                'Front end',
                'Database administration',
              ]}
              placeholder={suggestionsT('free-text')}
              suggestionsLabel={suggestionsT('description')}
              valuesLabel={suggestionsT('description-value')}
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
