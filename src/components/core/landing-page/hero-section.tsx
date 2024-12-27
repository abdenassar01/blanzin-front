import { Button, Heading, LatestJobsSlider, Map } from '@/components'
import Link from 'next/link'
import React from 'react'
import { VideoPlayer } from './video-player'
import { cn } from '@/utils'
import { getI18n, getScopedI18n } from '@/utils/locales/server'

export async function HeroSection({ tab }: { tab: 'trainee' | 'employee' }) {
  const t = await getI18n()

  const profiles = [
    { label: t('role.trainee'), value: 'TRAINEE' },
    { label: t('role.employee'), value: 'EMPLOYEE' },
  ]
  const scopedT = await getScopedI18n(tab)

  const jobs = await fetch(
    `https://rest.arbeitsagentur.de/jobboerse/jobsuche-service/pc/v4/app/jobs?angebotsart=${tab === 'trainee' ? 4 : 1}&page=1&size=6&facetten=false`,
    { headers: { 'X-API-Key': 'jobboerse-jobsuche' } },
  ).then(res => res.json())

  return (
    <div>
      <div className='no-scrollbar container mt-12 flex w-full justify-center gap-8 md:flex-col sm:mt-4 sm:flex-col sm:justify-between sm:gap-1 sm:p-1 sm:py-3'>
        <Map
          items={profiles}
          render={profile => (
            <Link
              href={`/?tab=${profile.value.toLowerCase()}`}
              className={cn(
                'mb-5 flex h-[50px] items-center justify-center rounded-xl px-16 font-semibold text-secondary shadow-md shadow-secondary transition-all ease-in-out dark:text-main dark:shadow-main',
                profile.value.toLowerCase() === tab
                  ? 'bg-main hover:bg-main hover:text-secondary dark:text-backgroundDark'
                  : 'bg-backgroundSecondary hover:bg-secondary hover:text-main dark:bg-backgroundDark dark:hover:bg-main dark:hover:text-backgroundDark',
              )}>
              {profile.label}
            </Link>
          )}
        />
      </div>
      <div
        dir='ltr'
        className={cn(
          'main-background-gradient container my-12 mb-6 flex w-full flex-col items-center justify-center rounded-3xl bg-main py-12 shadow-lg shadow-secondary dark:shadow-main sm:py-3',
        )}>
        <div
          className={cn(
            'flex w-full flex-row gap-10 px-12 sm:flex-col sm:px-3',
          )}>
          <VideoPlayer
            thumbnail={
              tab === 'trainee'
                ? '/trainee-thumbnail.png'
                : '/employee-thumbnail.png'
            }
            video={tab === 'trainee' ? '/trainee.mp4' : '/employee.mp4'}
          />
          <div className='flex w-full flex-col items-center justify-center gap-10 text-white'>
            <h3
              className={cn(
                'whitespace-pre-line text-center text-xm font-medium',
              )}>
              {scopedT('hero-text')}
            </h3>
            <div className='w-[50%] md:w-full sm:w-full'>
              <Link
                className='group font-semibold text-main '
                href={`/profile/jobs?tab=${tab === 'trainee' ? 'trainee' : 'jobs'}`}>
                <Button
                  className='group-hover:text-secondary'
                  theme='secondary'>
                  {t('packages.apply')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className='container mt-5'>
          <div className='px-6 sm:px-1'>
            <div className='ml-2 flex items-center justify-between text-xbase'>
              <Heading
                className='text-main'
                heading={scopedT('slider-header')}
              />
            </div>
            <div className=''>
              <LatestJobsSlider jobs={jobs?.stellenangebote} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
