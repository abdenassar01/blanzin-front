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
        <div className='flex w-full gap-3 sm:flex-col'>
          <PdfViewer file='/blanzin.pdf' />
          <div className='w-full'>
            <div className='text-secondary dark:text-main'>
              <Heading className='text-xxl' heading={t('header')} />
            </div>
            <div className='text-text dark:text-textdark'>{t('explain')}</div>
            <div className='mt-4 flex gap-4'>
              <button className='w-full'>
                <Button theme='secondary' text={t('download')} />
              </button>
              <div className='w-full'>
                <FileUpload
                  control={control}
                  label=''
                  name='contract'
                  placeholder={t('upload')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-4 flex w-full items-center justify-center'>
        <div className='w-[40%] sm:w-full'>
          <Button
            onClick={handleSubmit(onSubmit)}
            theme='success'
            text={t('submit')}
          />
        </div>
      </div>
    </div>
  );
}
