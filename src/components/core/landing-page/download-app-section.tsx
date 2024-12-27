import { Button, ImageShapeMakerSvg } from '@/components'
import { cn } from '@/utils'
import { getCurrentLocale, getI18n } from '@/utils/locales/server'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export async function DownloadAppSection() {
  const t = await getI18n()

  const locale = await getCurrentLocale()
  return (
    <section
      className={cn(
        'w-full bg-cover bg-no-repeat py-12',
        locale === 'ar'
          ? 'main-background-gradient-flipped'
          : 'main-background-gradient',
      )}>
      <div className='container flex items-center sm:flex-col-reverse sm:gap-6'>
        <div className='flex w-[50%] items-center justify-center sm:w-full sm:flex-wrap'>
          <ImageShapeMakerSvg
            screenshot='/screenshots/blanzin.jpg'
            id='DownloadApp'
            className='relative'>
            <>
              <Link
                className='absolute -right-28 top-[62%] flex w-[150px] items-center gap-1 rounded bg-main p-2 text-xs font-medium text-backgroundDark  sm:-right-6'
                href='https://play.google.com'
                target='_blank'>
                <Image
                  className='icon'
                  src={require('@/assets/images/icons/light/appstore.svg')}
                  alt=''
                />
                <span>{t('links.app-store')}</span>
              </Link>
              <Link
                target='_blank'
                className='absolute -right-28 top-[50%] flex w-[150px] items-center gap-1 rounded bg-main p-2 text-xs font-medium  text-backgroundDark sm:-right-6'
                href='https://play.google.com'>
                <Image
                  className='icon'
                  src={require('@/assets/images/icons/light/playstore.svg')}
                  alt=''
                />

                <span>{t('links.play-store')}</span>
              </Link>
            </>
          </ImageShapeMakerSvg>
        </div>

        <div className='flex w-[40%] flex-col items-center gap-12 sm:w-full'>
          <h3 className='text-4xl font-bold text-main sm:text-2xl sm:text-secondary'>
            {t('download-app-heading')}
          </h3>
          <Image
            src='/app-qr.png'
            className='sm:hidden'
            alt='blanzin qr code'
            width={200}
            height={200}
          />
          <div className='w-[50%] sm:w-full'>
            <Button
              theme='secondary'
              className='rounded-full hover:border-white'>
              <Link className='font-bold text-white' href='/download-app'>
                {t('download-app-btn-text')}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
