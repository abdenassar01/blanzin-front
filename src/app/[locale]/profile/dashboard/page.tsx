import * as React from 'react';
import { Heading } from '@/components';
import { getScopedI18n } from '@/utils/locales/server';
import Image from 'next/image';

type Props = {};

export default async function UserDashboard({}: Props) {
  const t = await getScopedI18n('dashboard');

  return (
    <div className='my-6'>
      <div className='text-xxm'>
        <Heading className='text-center' heading={t('title')} />
      </div>
      <div className='mt-6 flex justify-between'>
        <div className='flex w-[30%] flex-col gap-2 rounded-xl border-[1px] border-border p-2 py-4 text-secondary shadow-lg dark:text-main dark:shadow-black'>
          <div className='text-center text-xl font-bold '>{t('jobs')}</div>
          <div className='text-center '>Your next appointment on</div>
          <div className='text-bold text-center'>24.08.2024</div>
        </div>
        <div className='flex w-[30%] flex-col gap-2 rounded-xl border-[1px] border-border p-2 py-4 text-secondary shadow-lg dark:text-main dark:shadow-black'>
          <div className='text-center text-xl font-bold '>{t('jobs')}</div>
          <div className='text-center '>Your next appointment on</div>
          <div className='text-bold text-center'>24.08.2024</div>
        </div>
        <div className='flex w-[30%] flex-col gap-2 rounded-xl border-[1px] border-border p-2 py-4 text-secondary shadow-lg dark:text-main dark:shadow-black'>
          <div className='text-center text-xl font-bold '>{t('jobs')}</div>
          <div className='text-center '>Your next appointment on</div>
          <div className='text-bold text-center'>24.08.2024</div>
        </div>
      </div>
      <div className='mt-8 overflow-hidden rounded-lg border-[1px] border-border'>
        <div className='flex border-collapse items-center gap-2 border-b border-border p-2'>
          <div className='text-secondary dark:text-main'>
            {t('actions-title')}
          </div>
          <div className='flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-xs text-backgroundSecondary dark:bg-main dark:text-backgroundDark'>
            1
          </div>
        </div>
        <div className='flex gap-2 bg-[#fbffa8] p-2 text-secondary'>
          <Image src='' alt='' className='' />
          <div className=''>
            <h3 className='font-medium '>{t('required-action-title')}</h3>
            <div className=''>{t('required-action-content')}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
