import { FileUpload, Heading } from '@/components';
import { useScopedI18n } from '@/utils/locales/client';
import React from 'react';
import { Control } from 'react-hook-form';
import { PdfViewer } from '../pdf-viewer';
import { isMobile } from 'react-device-detect';
import Image from 'next/image';

type Props = {
  control: Control<any>;
};

export function StepFour({ control }: Props) {
  const t = useScopedI18n('contract');

  return (
    <div className='mt-12 flex w-full justify-between gap-5 sm:mt-6 sm:flex-col'>
      <button
        onClick={() => confirm('Would you like to download the contract now?')}
        className='relative my-2 w-[45%] overflow-hidden rounded-xl border-[1px] border-border sm:w-full'
      >
        <PdfViewer width={isMobile ? 300 : 450} file='/blanzin.pdf' />
        <div className='absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-[#00000078]'>
          <Image
            className='icon'
            alt=''
            src={require('@/assets/images/icons/dark/upload.svg')}
          />
        </div>
      </button>
      <div className='flex w-full flex-col'>
        <div className='text-secondary dark:text-main'>
          <Heading className='text-xxl' heading={t('header')} />
        </div>
        <div className='text-text dark:text-textdark'>{t('explain')}</div>

        <div className='mt-4 gap-5'>
          <div className='w-fit rounded-xl border-[1px] border-secondary dark:border-main'>
            <FileUpload
              accept='application/pdf'
              control={control}
              label=''
              name='contract'
              placeholder={t('upload')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
