import * as React from 'react'
import { getScopedI18n } from '@/utils/locales/server'
import { Button, Heading } from '@/components'
import Link from 'next/link'
import { VideoPlayer } from '@/components/core/landing-page/video-player'

export async function ApplicationSection() {
  const t = await getScopedI18n('application-section')

  return (
    <div className='container my-5 mb-8 flex w-full gap-10 sm:flex-col'>
      <Heading
        className='hidden text-4xl sm:flex sm:text-2xl'
        heading={t('title')}
      />
      <div className='w-full'>
        <VideoPlayer
          video='/premium-packages.mov'
          thumbnail='/premium-package-thumbnail.jpeg'
        />
      </div>
      <div className='flex w-full flex-col justify-start text-secondary  dark:text-main sm:gap-3'>
        <Heading
          className='text-4xl sm:hidden sm:text-2xl'
          heading={t('title')}
        />
        <div className='text-xbase sm:text-xl'>{t('text')}</div>
        <div className=''>
          <div
            className='prose text-xbase text-secondary prose-strong:font-bold prose-strong:text-secondary dark:text-main'
            dangerouslySetInnerHTML={{ __html: t('call-to-action') }}
          />
          <div className='my-2 w-[60%] sm:w-full'>
            <Link href='/profile/application' className=''>
              <Button
                theme='secondary'
                textClassName='text-white'
                text={t('action-btn')}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
