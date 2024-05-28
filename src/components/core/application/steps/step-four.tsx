import { FileUpload, Heading } from '@/components';
import { cn } from '@/utils';
import { useScopedI18n } from '@/utils/locales/client';
import React from 'react';
import { Control } from 'react-hook-form';
import { PdfViewer } from '../pdf-viewer';
import { isMobile } from 'react-device-detect';

type Props = {
  control: Control<any>;
};

export function StepFour({ control }: Props) {
  const t = useScopedI18n('contract');

  return (
    <div className={cn('absolute w-full')}>
      <div className='mt-12 flex w-full justify-between gap-5 sm:mt-6 sm:flex-col'>
        <button
          onClick={() =>
            confirm('Would you like to download the contract now?')
          }
          className='my-2 w-[49%] overflow-hidden rounded-xl sm:w-full'
        >
          <PdfViewer width={isMobile ? 300 : 450} file='/blanzin.pdf' />
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
    </div>
  );
}
