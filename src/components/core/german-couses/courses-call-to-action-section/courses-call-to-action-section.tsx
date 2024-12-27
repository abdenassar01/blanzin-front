import * as React from 'react'
import { Button, Heading } from '@/components'
import { getScopedI18n } from '@/utils/locales/server'
import { VideoPlayer } from '@/components/core/landing-page/video-player'

export async function CoursesCallToActionSection() {
  const t = await getScopedI18n('courses.action-section')
  return (
    <div className='main-background-gradient-flipped -mx-4 mt-10 p-4'>
      <div className='flex items-center justify-between p-10 sm:flex-col'>
        <div className=''>
          <div className='text-4xl'>
            <Heading heading={t('header')} className='text-white' />
          </div>
          <div className='my-7 text-xbase font-bold text-white'>
            {t('secondary-header')}
          </div>
          <div
            className='prose prose-ul:list-disc prose-ul:pl-10 prose-ul:text-white'
            dangerouslySetInnerHTML={{ __html: t('self-study-list') }}
          />
        </div>
        <div className=''>
          <div className='w-[30vw] sm:w-full'>
            <VideoPlayer
              video='trainee.mp4'
              thumbnail='/trainee-thumbnail.png'
            />
          </div>
          <div className='my-6 text-center text-xbase text-white'>
            {t('call-to-action')}
          </div>
          <div className='flex w-full justify-center'>
            <div className='w-[40%] sm:w-[70%]'>
              <Button text={t('button')} theme='secondary' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
