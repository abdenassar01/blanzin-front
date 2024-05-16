import { Button, ImageShapeMakerSvg } from '@/components';
import { getI18n } from '@/utils/locales/server';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export async function DownloadAppSection() {
  const t = await getI18n();
  return (
    <section className="bg-[url('/download-app-background.svg')] bg-cover bg-no-repeat py-12">
      <div className='container flex items-center sm:flex-col-reverse sm:gap-6'>
        <div className='flex w-[50%] items-center justify-center sm:w-full sm:flex-wrap'>
          <ImageShapeMakerSvg
            screenshot='/screenshots/blanzin.svg'
            id='DownloadApp'
            className='relative'
          >
            <>
              <Link
                className='absolute -right-16 top-[60%] flex w-[150px] items-center gap-1 rounded bg-main p-2 text-xs font-medium text-backgroundDark  sm:-right-6'
                href='https://play.google.com'
                target='_blank'
              >
                <Image
                  className='icon'
                  src={require('@/assets/images/icons/apple.svg')}
                  alt=''
                />
                <span>{t('links.app-store')}</span>
              </Link>
              <Link
                target='_blank'
                className='absolute -right-16 top-[50%] flex w-[150px] items-center gap-1 rounded bg-main p-2 text-xs font-medium  text-backgroundDark sm:-right-6'
                href='https://play.google.com'
              >
                <Image
                  className='icon'
                  src={require('@/assets/images/icons/play-store.svg')}
                  alt=''
                />

                <span>{t('links.play-store')}</span>
              </Link>
            </>
          </ImageShapeMakerSvg>
        </div>

        <div className='flex w-[40%] flex-col items-center gap-12 sm:w-full'>
          <h3 className='text-4xl font-bold text-main'>
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
            <Button theme='secondary' className='group '>
              <Link
                className='text-main group-hover:text-secondary'
                href='/download-app'
              >
                {t('download-app-btn-text')}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
