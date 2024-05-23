'use client';

import {
  Button,
  FileUpload,
  Heading,
  PaymentCardsSelector,
  PaymentPackSelector,
  PdfViewer,
} from '@/components';
import { useScopedI18n } from '@/utils/locales/client';
import React from 'react';
import { useForm } from 'react-hook-form';

export function PackagesForm() {
  const { control, handleSubmit } = useForm();

  const t = useScopedI18n('contract');

  const onSubmit = (dark: any) => {
    console.log(dark);
  };

  return (
    <div className='w-full'>
      <div className='sm:hidden'>
        <PaymentCardsSelector control={control} name='pack' />
      </div>
      <div className='hidden sm:block'>
        <PaymentPackSelector control={control} name='pack' />
      </div>
      <div className='mt-12 w-full sm:mt-6'>
        <div className='text-secondary dark:text-main'>
          <Heading className='text-xxl' heading={t('header')} />
        </div>
        <div className='text-text dark:text-textdark'>{t('explain')}</div>

        <div className='flex w-full flex-col items-center justify-center'>
          <button
            onClick={() =>
              confirm('Would you like to download the contract now?')
            }
            className='my-2 w-[30%] overflow-hidden rounded-xl sm:w-full'
          >
            <PdfViewer width={300} file='/blanzin.pdf' />
          </button>
          <div className='w-full'>
            <div className='mt-4 flex justify-center gap-5'>
              <div className='w-fit rounded-xl border-[1px] border-secondary dark:border-main'>
                <FileUpload
                  control={control}
                  label=''
                  name='contract'
                  placeholder={t('upload')}
                />
              </div>
            </div>
            <div className='mt-12 flex w-full justify-start'>
              <div className=''>
                <Button
                  onClick={handleSubmit(onSubmit)}
                  theme='success'
                  text={t('submit')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
