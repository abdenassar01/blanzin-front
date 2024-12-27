'use client'

import React, { useState } from 'react'
import Slider from 'react-slick'
import { SliderDotIndicator } from './slider-dots-indicator'
import { JobMainCard } from '@/components'

type Props = {
  jobs: {
    beruf: string
    titel: string
    refnr: string
    arbeitsort: { region: string; land: string }
    arbeitgeber: string
    aktuelleVeroeffentlichungsdatum: string
    modifikationsTimestamp: string
    eintrittsdatum: string
    kundennummerHash: string
  }[]
}

export function LatestJobsSlider({ jobs }: Props) {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  return (
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
        <div key={index} className='mt-4'>
          <SliderDotIndicator index={index} activeIndex={activeIndex} />
        </div>
      )}>
      {React.Children.toArray(
        jobs.map(item => (
          <JobMainCard
            key={`job-main-card-${item.arbeitsort}-${item.refnr}`}
            item={item}
          />
        )),
      )}
    </Slider>
  )
}
