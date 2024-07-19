'use client';

import * as React from 'react';
import Slider from 'react-slick';
import { VisaCard } from '@/components';
import { SliderDotIndicator } from '@/components/core/sliders/slider-dots-indicator';
import { useState } from 'react';

const visas = [
  {
    img: '/visa/blue-card.svg',
    title: 'EU Blue Card',
    description:
      'The EU Blue Card is one of the most popular residence permits for highly qualified professionals and offers numerous advantages. It is best to check directly whether you can obtain an EU Blue Card.',
  },
  {
    img: '/visa/professional.svg',
    title: 'Work visa for qualified professionals',
    description:
      'A work visa for skilled workers gives you direct access to the German labour market. Find out here what requirements you need to fulfil in order to work as a skilled worker in Germany.',
  },
  {
    img: '/visa/job-search.svg',
    title: 'Job search opportunity card',
    description:
      'Job seekers from abroad can enter Germany in order to look for a job. In some cases, a visa might be necessary. We will explain how it works.',
  },
  {
    img: '/visa/it-professional.svg',
    title: 'Visa options for IT professionals',
    description:
      'In Germany, qualified and experienced skilled workers in IT are in high demand. Coming from abroad, there are a lot of options to receive a work visa – with or without a formal qualification certificate',
  },
];

export function VisaEmployeeSlider() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <Slider
      arrows={false}
      className=''
      slidesToShow={3}
      slidesToScroll={2}
      dots
      beforeChange={(_: number, nextSlide: number) => {
        setActiveIndex(nextSlide);
      }}
      dotsClass='dots-indicators'
      customPaging={(index) => (
        <div key={index} className='mt-4'>
          <SliderDotIndicator index={index} activeIndex={activeIndex} />
        </div>
      )}
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
    >
      {React.Children.toArray(visas.map((item) => <VisaCard visa={item} />))}
    </Slider>
  );
}
