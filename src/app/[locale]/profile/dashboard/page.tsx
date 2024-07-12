import * as React from 'react';
import { Heading, ProfileProgress } from '@/components';
import { getScopedI18n } from '@/utils/locales/server';
import Image from 'next/image';
import ReactSpeedometer from 'react-d3-speedometer';

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
            <h3 className='text-xbase font-semibold'>
              {t('required-action-title')}
            </h3>
            <div className='mt-2 text-xl '>{t('required-action-content')}</div>
          </div>
        </div>
      </div>
      <div className='mt-8 rounded-lg border border-border'>
        <div className='border-b border-border p-2 text-secondary dark:text-main'>
          {t('recommendations')}
        </div>
        <div className='flex justify-between gap-3 p-3 px-5 sm:flex-col'>
          <div className='w-[40%] rounded-md border border-border shadow-lg dark:shadow-lg dark:shadow-black sm:w-full'>
            <div className=' border-b border-border p-2 text-secondary dark:text-main'>
              {t('account-status')}
            </div>
            <div className='p-2 text-mainText dark:text-textdark'>
              <div className='text-center '>{t('status-explain')}</div>
              <div className='my-5'>
                <ProfileProgress value={40} />
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
            <div className='border-b border-border p-2 text-secondary dark:text-main'>
              {t('general-recommendations-title')}
            </div>
            <div className='p-2 text-mainText dark:text-textdark'>
              <div className='text-center'>
                For a better workflow, you need to consider these points
              </div>
              <div
                className='prose mt-3 prose-li:text-mainText dark:text-white prose-li:dark:text-white'
                dangerouslySetInnerHTML={{
                  __html:
                    '<ul>' +
                    '    <li><span>switch on the push notifications so that you are always up to date</span></li>\n' +
                    '    <li><span>complete the orders so that you can optimise your work processes at the end</span></li>\n' +
                    '    <li><span>react quickly to messages from customers so that your competitors do not take advantage of the opportunity</span></li>\n' +
                    '</ul>',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
