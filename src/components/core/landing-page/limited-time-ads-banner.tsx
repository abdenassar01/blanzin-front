import { Button, Heading } from '@/components'
import { getScopedI18n } from '@/utils/locales/server'
import Image from 'next/image'
import React from 'react'

export async function LimitedTimeAdsBanner() {
  const t = await getScopedI18n('packages')

  return (
    <div className='main-background-gradient relative w-full bg-cover bg-no-repeat py-12 text-white'>
      <Image
        alt='Limited Offer'
        width={500}
        height={500}
        className='absolute left-0 top-0 w-80'
        src='/limited-offer.png'
      />
      <div className='container flex w-full flex-col items-center justify-center gap-10 text-center'>
        <Heading heading={t('limited-time')} className='text-2xl text-white' />
        <Heading
          heading={t('main-heading')}
          className='w-[70%] text-[45px] text-white'
        />
        <div className='text-white'>{t('main-text')}</div>
        <div className='w-[15%] sm:w-[50%]'>
          <Button theme='secondary' className=''>
            {t('action')}
          </Button>
        </div>
      </div>
    </div>
  )
}
