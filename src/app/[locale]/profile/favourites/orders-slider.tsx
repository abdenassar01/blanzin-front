'use client';

import { OrderCard } from '@/components';
import React from 'react';
import Slider from 'react-slick';

export default function OrdersSlider() {
  return (
    <div>
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
      >
        {React.Children.toArray(
          [1, 2, 3, 4].map((item) => (
            <OrderCard
              className=''
              createdAt={new Date()}
              image='/house.jpg'
              desc='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus qui ullam, placeat numquam nemo labore voluptas minima neque nihil saepe, quae at omnis recusandae mollitia sapiente aliquid fuga modi? Officiis!'
              location='Casablanca'
              orderTitle='Fix house floor'
            />
          ))
        )}
      </Slider>
    </div>
  );
}
