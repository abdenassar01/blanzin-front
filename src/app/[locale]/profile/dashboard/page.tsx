import * as React from 'react';
import { Button, Heading, ProfileProgress } from '@/components';
import { getScopedI18n } from '@/utils/locales/server';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  searchParams: { role: string | string[] | undefined };
}

export default async function UserDashboard({ searchParams: { role } }: Props) {
  const t = await getScopedI18n('dashboard');
  const isExpert = role === 'expert';

  return (
    <div className='my-6'>
      <div className='text-xxm'>
        <Heading className='text-center' heading={t('title')} />
      </div>
      <div className='mt-6 flex justify-between'>
        <div className='flex w-[30%] flex-col justify-between gap-3 rounded-xl border-[1px] border-border p-2 py-4 text-secondary shadow-lg dark:text-main dark:shadow-black'>
          <div className='text-center text-xl font-bold '>
            {t('appointment')}
          </div>
          <div className='text-center '>Your next appointment on</div>
          <div className='text-bold text-center'>24.08.2024</div>
        </div>
        <div className='flex w-[30%] flex-col justify-between gap-3 rounded-xl border-[1px] border-border p-2 py-4 text-secondary shadow-lg dark:text-main dark:shadow-black'>
          <div className='text-center text-xl font-bold '>
            {isExpert ? t('open-orders') : t('jobs')}
          </div>
          <div className='text-bold text-center'>5</div>
        </div>
        <div className='flex w-[30%] flex-col justify-between gap-3 rounded-xl border-[1px] border-border p-2 py-4 text-secondary shadow-lg dark:text-main dark:shadow-black'>
          <div className='text-center text-xl font-bold '>
            {isExpert ? t('completed-orders') : t('recommended-jobs')}
          </div>
          <div className='text-bold text-center'>2</div>
        </div>
      </div>
      <div className='mt-8 overflow-hidden rounded-lg border border-border'>
        <div className='flex items-center gap-2 border-b border-border p-2'>
          <div className='text-secondary dark:text-main'>
            {t('actions-title')}
          </div>
          <div className='flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-xs text-backgroundSecondary dark:bg-main dark:text-backgroundDark'>
            1
          </div>
        </div>
        <div className='flex items-start gap-3 bg-[#fbffa8] p-2 text-secondary'>
          <Image
            src={require('@/assets/images/icons/danger.svg')}
            alt=''
            className='mt-2 w-8'
          />
          <div className=''>
            <h3 className='text-xl font-semibold'>
              {isExpert
                ? t('expert-required-action-title')
                : t('required-action-title')}
            </h3>
            <div className='mt-2  '>
              {isExpert
                ? t('expert-required-action-content')
                : t('required-action-content')}
            </div>
          </div>
        </div>
      </div>
      <div className='mt-8 rounded-lg border border-border'>
        <div className='border-b border-border p-2 text-secondary dark:text-main'>
          {t('recommendations')}
        </div>
        <div className='flex justify-between gap-3 p-3 px-5 sm:flex-col'>
          <div className='w-[40%] rounded-md border border-border shadow-lg dark:shadow-lg dark:shadow-black sm:w-full'>
            <div className='border-b border-border p-2 text-center font-medium text-secondary dark:text-main'>
              {t('account-status')}
            </div>
            <div className='p-2 text-mainText dark:text-textdark'>
              <div className='text-center '>{t('status-explain')}</div>
              <div className='my-5'>
                <ProfileProgress value={60} />
              </div>
              <div className=''>
                <div className='flex justify-between'>
                  <p className=''>{t('status-personal')}</p>
                  <div className='font-medium'>50%</div>
                </div>
                <div className='flex justify-between'>
                  <p className=''>{t('status-professional')}</p>
                  <div className='font-medium'>80%</div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[40%] rounded-md border border-border shadow-lg dark:shadow-lg dark:shadow-black sm:w-full'>
            <div className='border-b border-border p-2 text-center font-medium text-secondary dark:text-main'>
              {isExpert
                ? t('general-recommendations-title')
                : t('increase-opportunities')}
            </div>
            <div className='p-2 text-mainText dark:text-textdark'>
              {isExpert ? (
                <div
                  className='prose mt-3 prose-li:text-mainText dark:text-white prose-li:dark:text-white'
                  dangerouslySetInnerHTML={{
                    __html: t('expert-recommendations-content'),
                  }}
                />
              ) : (
                <div className='flex w-full flex-col items-center justify-center gap-5 p-3 py-5 text-secondary dark:text-textdark'>
                  <Image
                    src={require('@/assets/images/icons/mark.webp')}
                    alt='blanzin mark'
                    className='w-20'
                  />
                  <p className='text-center'>
                    {t('increase-opportunities-text')}
                  </p>
                  <Link href='/application' className='w-[70%]'>
                    <Button
                      theme='secondary'
                      text={t('increase-opportunities-action')}
                    />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
