import { Button, Heading, PacksFaqs } from '@/components';
import { getScopedI18n } from '@/utils/locales/server';
import Link from 'next/link';
import React from 'react';

export default async function PacksPage() {
  const t = await getScopedI18n('premium-pack');

  return (
    <div className='my-12'>
      <div className='container'>
        <div className=''>
          <Heading className='text-center text-2xl' heading={t('header')} />
          <div className='my-6 flex justify-center'>
            <div className='w-[50%] text-center text-text dark:text-textdark  sm:w-full'>
              {t('text')}
            </div>
          </div>
          <div className='flex justify-center '>
            <video
              poster='/premium-package-thumbnail.png'
              controls
              src='/premium-packages.mov'
              className='w-[70%] rounded-xl sm:w-full'
            />
          </div>
        </div>
      </div>
      <div className='main-background-gradient mx-3 mt-12 rounded-xl py-12'>
        <div className='container flex flex-col items-center justify-center'>
          <h3 className='w-[50vw] text-center text-xxm font-bold text-secondary sm:w-[95vw]'>
            {t('check-heading')}
          </h3>
          <Button width='200px' className='group mt-6' theme='secondary'>
            <Link
              href='/application/apply'
              className='text-main group-hover:text-secondary'
            >
              {t('check-btn')}
            </Link>
          </Button>
        </div>
      </div>
      <PacksFaqs />
    </div>
  );
}
