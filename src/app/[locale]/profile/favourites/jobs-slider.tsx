'use client';

import { JobMainCard } from '@/components';
import React from 'react';
import Slider from 'react-slick';

export default function JobsSlider() {
  return (
    <div className='p-2'>
      <Slider
        arrows={false}
        className='my-5'
        slidesToShow={2}
        slidesToScroll={2}
        initialSlide={2}
        autoplay
        cssEase='linear'
        responsive={[
          {
            breakpoint: 1024,
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
        {React.Children.toArray([1, 2, 3, 4].map((item) => <JobMainCard />))}
      </Slider>
    </div>
  );
}
