'use client';

import { DocsFilter, FileUploadDropableGallery, Heading } from '@/components';
import { useScopedI18n } from '@/utils/locales/client';

import { useSearchParams } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';

export default function MyDocumentsPage() {
  const t = useScopedI18n('profile');

  const applicationT = useScopedI18n('application');

  const saerchParams = useSearchParams();
  const doc = saerchParams.get('doc');

  const { control, watch, handleSubmit } = useForm({
    defaultValues: {
      lang: [],
      jobs: [],
      diploma: [],
      intenship: [],
      acknowledgement: [],
    },
  });

  function getGallery() {
    switch (doc) {
      case 'lang':
        return (
          <FileUploadDropableGallery
            items={watch('lang')}
            control={control}
            name={'lang'}
            label={applicationT('lang-certificate')}
          />
        );
      case 'jobs':
        return (
          <FileUploadDropableGallery
            items={watch('jobs')}
            control={control}
            name={'lang'}
            label={applicationT('job-certificates')}
          />
        );
      case 'diploma':
        return (
          <FileUploadDropableGallery
            items={watch('diploma')}
            control={control}
            name='diploma'
            label={applicationT('diploma')}
          />
        );
      case 'intenship':
        return (
          <FileUploadDropableGallery
            items={watch('intenship')}
            control={control}
            name='internship'
            label={applicationT('intenship')}
          />
        );
      case 'acknowledgement':
        return (
          <FileUploadDropableGallery
            items={watch('acknowledgement')}
            control={control}
            name='acknowledgement'
            label={applicationT('acknowledgement')}
          />
        );
      default:
        return [];
    }
  }
  // TODO: Fix

  return (
    <div className='min-h-[40vw] rounded-xl bg-backgroundSecondary p-4 dark:bg-backgroundDark'>
      <div className='text-xxm'>
        <Heading heading={t('docs')} />
      </div>
      <button onClick={handleSubmit((data) => console.log(data))}>Hello</button>
      <div className='mt-4 flex'>
        <DocsFilter className='w-[50%]' />
        <div className='ml-4 w-full px-4'>
          <div className=''>{getGallery()}</div>
        </div>
      </div>
    </div>
  );
}
