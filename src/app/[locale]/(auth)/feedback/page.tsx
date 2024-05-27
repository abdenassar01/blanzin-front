'use client';

import { Button, FieldText, Heading, TextArea } from '@/components';
import { useI18n } from '@/utils/locales/client';
import React from 'react';
import { useForm } from 'react-hook-form';

export default function FeedbackPage() {
  const t = useI18n();
  const { control } = useForm();

  return (
    <div className='my-4'>
      <Heading className='text-center text-2xl' heading={t('links.feedback')} />
      <p className='text-center text-text dark:text-textdark'>
        {t('feedback-text')}
      </p>

      <div className='flex flex-col gap-3'>
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
    </div>
  );
}
