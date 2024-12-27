'use client';

import { Button, FieldText, Heading, TextArea } from '@/components';
import { useI18n } from '@/utils/locales/client';
import React from 'react';
import { useForm } from 'react-hook-form';

export default function Contact() {
  const { control } = useForm();

  const t = useI18n();

  return (
    <>
      <Heading
        className='text-center text-2xl'
        heading={t('contact.heading')}
      />
      <p className='text-center text-text dark:text-textdark'>
        {t('contact.text')}
      </p>

      <div className='flex flex-col gap-3'>
        <FieldText
          control={control}
          label={t('forms.email')}
          placeholder={t('forms.email')}
          name='email'
        />
        <FieldText
          control={control}
          label={t('forms.fullname')}
          placeholder={t('forms.fullname')}
          name='fullname'
        />
        <TextArea
          control={control}
          label={t('forms.message')}
          placeholder={t('forms.message')}
          name='message'
        />
        <Button text={t('contact.send')} />
      </div>
    </>
  );
}
