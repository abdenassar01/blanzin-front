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

  const searchParams = useSearchParams();
  const doc = searchParams.get('doc');

  useEffect(() => console.log(form), [doc]);

  function getDocTitle() {
    switch (doc) {
      case 'lang':
        return t('lang-certificate');
      case 'jobs':
        return t('job-certificates');
      case 'diploma':
        return t('diploma');
      case 'intenship':
        return t('intenship');
      case 'acknowledgement':
        return t('acknowledgement');
      default:
        return '';
    }
  }

  const form = useWatch({ control });

  function getItems() {
    switch (doc) {
      case 'lang':
        return form.lang;
      case 'jobs':
        return form.jobs;
      case 'diploma':
        return form.diploma;
      case 'intenship':
        return form.intenship;
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
        <div className='mt-4 flex w-full border-[1px] border-border'>
          <div className='w-[50%]'>
            <DocsFilter noRole />
          </div>
          <div className='w-full p-3'>
            <div className=''>
              <FileUploadDropableGallery
                items={getItems()}
                control={control}
                name={doc || 'doc'}
                label={getDocTitle()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
