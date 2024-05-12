'use client';

import { OrderCard } from '@/components/common/cards';
import React, { useState } from 'react';
import Slider from 'react-slick';
import { SliderDotIndicator } from './slider-dots-indicator';

export function LatestOrderSlider() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <Slider
      arrows={false}
      className='my-5'
      slidesToShow={3.5}
      slidesToScroll={2}
      initialSlide={2}
      centerMode
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
      beforeChange={(currentSlide: number, nextSlide: number) => {
        setActiveIndex(nextSlide);
      }}
      dotsClass='dots-indicators'
      customPaging={(index) => (
        <div key={index}>
          <SliderDotIndicator index={index} activeIndex={activeIndex} />
        </div>
      )}
    >
      {React.Children.toArray(
        [1, 2, 3, 4].map((item) => (
          <OrderCard
            className='mr-3'
            createdAt={new Date()}
            image='/house.jpg'
            desc='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus qui ullam, placeat numquam nemo labore voluptas minima neque nihil saepe, quae at omnis recusandae mollitia sapiente aliquid fuga modi? Officiis!'
            location='Casablanca'
            orderTitle='Fix house floor'
          />
        ))
      )}
    </Slider>
  );
}
