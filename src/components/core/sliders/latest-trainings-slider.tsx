'use client';

import React, { useState } from 'react';
import Slider from 'react-slick';
import { SliderDotIndicator } from './slider-dots-indicator';
import { JobMainCard } from '@/components';

export function LatestTrainingsSlider() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const date = new Date();
  return (
    <Slider
      arrows={false}
      className='my-5'
      slidesToShow={3}
      slidesToScroll={2}
      initialSlide={2}
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
        setActiveIndex(nextSlide);
      }}
      dotsClass='dots-indicators'
      customPaging={(index) => (
        <div key={index} className='mt-4'>
          <SliderDotIndicator index={index} activeIndex={activeIndex} />
        </div>
      )}
    >
      {React.Children.toArray([1, 2, 3, 4].map((item) => <JobMainCard />))}
    </Slider>
  );
}
