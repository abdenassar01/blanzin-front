'use client'

import * as React from 'react'
import { Button, InterviewDateSelector } from '@/components'
import Link from 'next/link'
import Image from 'next/image'
import { useScopedI18n } from '@/utils/locales/client'
import { useForm } from 'react-hook-form'

export default function Page() {
  const t = useScopedI18n('interview')
  const { control } = useForm()

  return (
    <div className='mt-6 flex flex-col items-center justify-center text-mainText dark:text-textdark'>
      <div className='relative flex w-full justify-between rounded-xl border border-secondary bg-secondary p-4 text-main dark:border-main dark:bg-main dark:bg-opacity-35 sm:flex-col'>
        <div
          className='ribbon prose text-xs font-normal italic prose-strong:font-bold prose-strong:uppercase prose-strong:text-white'
          dangerouslySetInnerHTML={{ __html: t('special-offer') }}
        />
        <div className='mt-24 w-[40%] text-xm font-bold text-main dark:text-secondary sm:w-full'>
          {t('gift-title')}
        </div>
        <div className='flex flex-col items-end text-center'>
          <Image
            src='/free-offer.svg'
            alt='free interview'
            width={600}
            height={279}
            className='h-[200px]'
          />
          <div className='mr-8'>
            <div className='text-4xl font-bold uppercase text-main dark:text-textdark sm:text-2xl'>
              Free
            </div>
            <div className='text-xl '>{t('gift-content-invite')}</div>
          </div>
        </div>
      </div>
      <div className='mt-6 w-full rounded-lg bg-background p-4 dark:bg-backgroundSecondaryDark'>
        <h3 className='text-xbase font-bold'>Job title</h3>
        <p className='mt-3'>Company description</p>
        <hr className='mt-3' />
        <div className='mt-5'>
          <div className='flex justify-center'>
            <h3 className='w-[80%] text-center text-xl sm:w-full'>
              {t('title')}
            </h3>
          </div>
          <div className='mt-4'>
            <h3 className='text-xbase font-bold'>Job title</h3>
            <p className='mt-3'>Company description</p>
          </div>
          <div className='mt-4'>
            <h2 className='text-xbase font-bold text-secondary dark:text-main'>
              {t('application-tasks')}
            </h2>
            <ul className='ml-6 mt-6 list-disc'>
              <li className=''>
                Maintenance and further development of existing applications
              </li>
              <li className=''>
                Coordination with external agencies and service providers
              </li>
              <li>Realisation of orders</li>
            </ul>
          </div>
          <div className='mt-4'>
            <h2 className='text-xbase font-bold text-secondary dark:text-main'>
              {t('suggested-dates-title')}
            </h2>
            <p className='mt-6'>{t('select-date')}</p>
            <InterviewDateSelector
              control={control}
              name='acceptedDate'
              items={[new Date(), new Date(2024, 12, 6), new Date(2024, 8, 12)]}
            />
          </div>
          <div className='mt-6 flex items-center justify-center'>
            <Link href='/pay' className='w-[15%] sm:w-[50%]'>
              <Button theme='secondary' text={t('pay')} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
