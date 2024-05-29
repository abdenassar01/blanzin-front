import { FileUploadDropable, Heading } from '@/components/common';
import { useScopedI18n } from '@/utils/locales/client';
import React from 'react';
import { Control, FieldValue } from 'react-hook-form';

type Props = {
  control: Control<FieldValue<any>>;
};

export function StepTwo({ control }: Props) {
  const t = useScopedI18n('application');

  return (
    <div className=''>
      <div className='text-xxm'>
        <Heading heading={t('docs-folder')} />
      </div>
      <div className='mt-5 flex flex-wrap gap-4'>
        <FileUploadDropable
          label={t('lang-certificate')}
          name='lang'
          placeholder={t('lang-certificate')}
          control={control}
        />
        <FileUploadDropable
          label={t('diploma')}
          name='diploma'
          placeholder={t('diploma')}
          control={control}
        />
        <FileUploadDropable
          label={t('job-certificates')}
          name='jobs'
          placeholder={t('job-certificates')}
          control={control}
        />
        <FileUploadDropable
          label={t('intenship')}
          name='internships'
          placeholder={t('intenship')}
          control={control}
        />
        <FileUploadDropable
          label={t('acknowledgement')}
          name='acknowledgement'
          placeholder={t('acknowledgement')}
          control={control}
        />
      </div>
    </div>
  );
}
