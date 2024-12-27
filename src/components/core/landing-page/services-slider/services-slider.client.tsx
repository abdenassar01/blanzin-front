'use client'

import * as React from 'react'
import { useState } from 'react'
import Slider from 'react-slick'
import { SliderDotIndicator } from '@/components/core/sliders/slider-dots-indicator'
import Image from 'next/image'
import { useCurrentLocale, useScopedI18n } from '@/utils/locales/client'
import { Heading } from '@/components'
import Link from 'next/link'
import { LandingPageService } from '@/services/core/api/shared/landing-page-steps/types'

interface Props {
  services: LandingPageService[]
}

export function ServicesSliderClient({ services }: Props) {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const t = useScopedI18n('services')

  const locale = useCurrentLocale()

  return (
    <div className='container my-12'>
      <div className='my-6 text-4xl sm:text-2xl'>
        <Heading className='text-center' heading={t('title')} />
      </div>
      <Slider
        arrows={false}
        className='my-5'
        slidesToShow={2}
        slidesToScroll={1}
        initialSlide={1}
        autoplay
        cssEase='linear'
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2.5,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]}
        dots
        beforeChange={(_: number, nextSlide: number) => {
          setActiveIndex(nextSlide)
        }}
        dotsClass='dots-indicators'
        customPaging={index => (
          <div key={index} className='mt-10'>
            <SliderDotIndicator index={index} activeIndex={activeIndex} />
          </div>
        )}>
        {React.Children.toArray(
          services.map(item => (
            <div className='flex w-full flex-col items-center justify-center gap-3'>
              <Image
                alt={item.en}
                src={item.picture}
                width={200}
                height={200}
                className='aspect-square w-[70%] rounded-full object-cover'
              />
              <Link
                href='services/visa'
                className='flex items-center justify-center'>
                <div className='mt-3 w-fit rounded-lg bg-secondary p-3 text-center font-bold text-white'>
                  {item[locale]}
                </div>
              </Link>
            </div>
          )),
        )}
      </Slider>
    </div>
  )
}
