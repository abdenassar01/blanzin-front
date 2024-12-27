import {
  ApplicationSection,
  DiscoverExclusivePackage,
  DownloadAppSection,
  FormConrolPopoverExplaination,
  HeroSection,
  LimitedTimeAdsBanner,
  ServicesSlider,
  WhatMakesUsSpecial,
} from '@/components'
import { getScopedI18n } from '@/utils/locales/server'
import React from 'react'

export default async function LandingPageLayout({
  searchParams,
}: {
  searchParams: Promise<{ tab: 'trainee' | 'employee' }>
}) {
  const { tab } = await searchParams
  const t = await getScopedI18n('heading')

  return (
    <>
      <div className='bg-background bg-contain bg-no-repeat dark:bg-backgroundSecondaryDark'>
        <div className='flex w-full flex-col items-center justify-center py-12 sm:py-4'>
          <ApplicationSection />
          <LimitedTimeAdsBanner />
          <h1 className='container mt-12 text-center text-4xl font-bold text-secondary dark:text-main sm:text-2xl'>
            {t('welcome')}
          </h1>
          <HeroSection tab={tab || 'trainee'} />
          <ServicesSlider />
          <DownloadAppSection />
          <div className='container'>
            <WhatMakesUsSpecial />
            <DiscoverExclusivePackage />
          </div>
        </div>
      </div>
    </>
  )
}
