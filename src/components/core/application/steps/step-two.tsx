import {
  FileUploadDropable,
  FileUploadDropableGallery,
  Heading,
  Map,
} from '@/components';
import { useScopedI18n } from '@/utils/locales/client';
import React, { useEffect } from 'react';
import { Control, FieldValue, useWatch } from 'react-hook-form';
import { DocsFilter } from '../../docs';
import { useSearchParams } from 'next/navigation';

type Props = {
  control: Control<FieldValue<any>>;
};

export function StepTwo({ control }: Props) {
  const t = useScopedI18n('application');

  const form = useWatch({ control });

  const searchParams = useSearchParams();
  const doc = searchParams.get('doc') || 'lang';

  useEffect(() => console.log(form), [doc]);

  function getDocTitle() {
    switch (doc) {
      case 'lang':
        return t('lang-certificate');
      case 'jobs':
        return t('job-certificates');
      case 'diploma':
        return t('diploma');
      case 'internship':
        return t('internship');
      case 'acknowledgement':
        return t('acknowledgement');
      default:
        return '';
    }
  }

  function getItems() {
    switch (doc) {
      case 'lang':
        return form.lang;
      case 'jobs':
        return form.jobs;
      case 'diploma':
        return form.diploma;
      case 'internship':
        return form.internship;
      case 'acknowledgement':
        return form.acknowledgement;
      default:
        return [];
    }
  }

  return (
    <div className='w-full'>
      <div className='text-xxm'>
        <Heading heading={t('docs-folder')} />
      </div>
      <div className='mt-5 flex w-full flex-wrap gap-4'>
        <div className='mt-4 flex w-full'>
          <DocsFilter noRole className='w-[50%]' />
          <div className='ml-4 w-full px-4'>
            <div className=''>
              <FileUploadDropableGallery
                items={getItems()}
                control={control}
                name={doc}
                label={getDocTitle()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
