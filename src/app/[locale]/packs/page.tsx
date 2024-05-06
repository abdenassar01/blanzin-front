import { Button, Heading, PaymentPackSelector } from '@/components';
import { getScopedI18n } from '@/utils/locales/server';
import React from 'react';

export default async function PacksPage() {
  const t = await getScopedI18n('premuim-pack');

  return (
    <div className='my-12'>
      <div className='container'>
        <div className=''>
          <Heading className='text-center text-2xl' heading={t('header')} />
          <div className='my-6 flex justify-center'>
            <div className='w-[50%] text-center text-text dark:text-textdark'>
              {t('text')}
            </div>
          </div>
          <div className='flex justify-center '>
            <video controls src='/video.mp4' className='w-[70%] rounded-xl' />
          </div>
        </div>
      </div>
      <div className='main-background-gradient mt-4 py-12'>
        <div className='container flex flex-col items-center justify-center '>
          <h3 className='w-[50vw] text-center text-xxm font-bold text-secondary sm:w-[95vw]'>
            {t('check-heading')}
          </h3>
          <Button width='200px' className='mt-6 rounded-xl' theme='secondary'>
            <span>{t('check-btn')}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
