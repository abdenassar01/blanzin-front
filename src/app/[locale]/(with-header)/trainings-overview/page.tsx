import * as React from 'react'
import { Button, Heading } from '@/components'
import { getScopedI18n } from '@/utils/locales/server'
import Link from 'next/link'

export default async function Page() {
  const t = await getScopedI18n('trainings-overview')
  return (
    <div className='my-16 mt-24'>
      <div className='container'>
        <div className='flex items-center justify-center'>
          <Heading
            heading={t('header')}
            className='w-[70%] text-center text-2xl'
          />
        </div>
        <div className='my-16 flex flex-col gap-10 text-xl text-mainText dark:text-textdark'>
          <p className=''>{t('paragraph-1')}</p>
          <h3 className='text-xbase font-bold text-secondary dark:text-main'>
            {t('secondary-title')}
          </h3>
          <p className=''>{t('paragraph-2')}</p>
        </div>
        <div className='flex justify-center '>
          <Link href='/profile/jobs?tab=training' className='w-[15%] sm:w-full'>
            <Button text={t('action')} />
          </Link>
        </div>
      </div>
    </div>
  )
}
