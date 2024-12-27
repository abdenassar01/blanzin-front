import * as React from 'react'
import { Button, Heading, ProfileProgress } from '@/components'
import { getScopedI18n } from '@/utils/locales/server'
import Image from 'next/image'
import Link from 'next/link'

export default async function UserDashboard() {
  const t = await getScopedI18n('dashboard')

  return (
    <div className='my-6 sm:my-1'>
      <div className='text-xxm'>
        <Heading className='text-center' heading={t('title')} />
      </div>
      <div className='mt-6 flex justify-between gap-4 sm:flex-col'>
        <Link
          href={`/profile/dashboard/appointments`}
          className='flex w-[32%] flex-col justify-between gap-3 rounded-xl bg-backgroundSecondary p-2 py-4 text-secondary shadow-lg transition-all duration-300 hover:bg-border hover:shadow-xl dark:bg-backgroundDark dark:text-main dark:shadow-black dark:hover:bg-black sm:w-full'>
          <div className='text-center text-xl font-bold '>
            {t('appointment')}
          </div>
          <div className='text-center '>
            Interview on{' '}
            <span className='text-bold text-center'>24.08.2024</span>
          </div>
          <div className='text-center '>
            Couching on{' '}
            <span className='text-bold text-center'>24.08.2024</span>
          </div>
        </Link>
        <Link
          href='/profile/dashboard/jobs'
          className='flex w-[32%] flex-col justify-between gap-3 rounded-xl bg-backgroundSecondary p-2 py-4 text-secondary shadow-lg transition-all duration-300 hover:bg-border hover:shadow-xl dark:bg-backgroundDark dark:text-main dark:shadow-black dark:hover:bg-black sm:w-full'>
          <div className='text-center text-xl font-bold '>
            {t('application')}
          </div>
          <div className='text-bold text-center'>5</div>
        </Link>
        <Link
          href={`/profile/jobs`}
          className='flex w-[32%] flex-col justify-between gap-3 rounded-xl bg-backgroundSecondary p-2 py-4 text-secondary shadow-lg transition-all duration-300 hover:bg-border hover:shadow-xl dark:bg-backgroundDark dark:text-main dark:shadow-black dark:hover:bg-black sm:w-full'>
          <div className='text-center text-xl font-bold '>
            {t('recommended-jobs')}
          </div>
          <div className='text-bold text-center'>2</div>
        </Link>
      </div>
      <div className='mt-8 overflow-hidden rounded-lg bg-backgroundSecondary dark:bg-backgroundDark'>
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
              {t('required-action-title')}
            </h3>
            <div className='mt-2  '>{t('required-action-content')}</div>
          </div>
        </div>
      </div>
      <div className='mt-8 sm:mt-2'>
        <div className='flex justify-between gap-3 p-3 px-5 sm:flex-col sm:px-0'>
          <div className='w-[47%] rounded-md bg-backgroundSecondary shadow-lg dark:bg-backgroundDark dark:shadow-lg dark:shadow-black sm:w-full'>
            <div className='border-b border-border p-2 text-center font-bold text-secondary dark:text-main'>
              {t('app-folder')}
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
          <div className='w-[47%] rounded-md bg-backgroundSecondary shadow-lg dark:bg-backgroundDark dark:shadow-lg dark:shadow-black sm:w-full'>
            <div className='border-b border-border p-2 text-center font-bold text-secondary dark:text-main'>
              {t('increase-opportunities')}
            </div>
            <div className='p-2 text-mainText dark:text-textdark'>
              <div className='flex w-full flex-col items-center justify-center gap-5 p-3 py-5 text-secondary dark:text-textdark'>
                <Image
                  src={require('@/assets/images/icons/mark.webp')}
                  alt='blanzin mark'
                  className='w-20'
                />
                <p className='text-center'>
                  {t('increase-opportunities-text')}
                </p>
                <Link href='/profile/application' className='w-[70%]'>
                  <Button
                    theme='secondary'
                    text={t('increase-opportunities-action')}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
