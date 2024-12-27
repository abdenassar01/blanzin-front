'use client'

import * as React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'

type Props = {}

export function ProfessionalLanguagesSlider(props: Props) {
  const languages = [
    {
      label: 'Logistics',
      secondaryLabel: 'German A1 21 Lessons approx. 950 Exercises',
      description:
        'German for Beginners: Absolute beginners can learn everyday German step by step.',
      image: '/slider-images/Logistics.png',
    },
    {
      label: 'Business German',
      secondaryLabel: 'German A2 12 Lessons approx. 600 Exercises',
      description:
        'Improve communication with your customers and colleagues and expand your German vocabulary for logistics.',
      image: '/slider-images/Business German.png',
    },
    {
      label: 'German Grammar A1',
      secondaryLabel: 'German A1 18 Lessons approx. 900 Exercises',
      description:
        'Learn and practice grammatical structures with this basic grammar course for beginners.',
      image: '/slider-images/German for Beginners 1.2.png',
    },
    {
      label: 'German for Upper Beginners 2.1',
      secondaryLabel: 'German A2 18 Lessons approx. 1300 Exercises',
      description:
        'Learn German online with LinguaTV: this language course prepares you for everyday situations in German.',
      image: '/slider-images/German for Upper Beginners 2.1.png',
    },
    {
      label: 'German for Upper Beginners 2.2',
      secondaryLabel: 'German A2 18 Lessons approx. 1400 Exercises',
      description:
        'Improve your German with original videos, grammatical tutorials and many exercises.',
      image: '/slider-images/German for Upper Beginners 2.2.png',
    },
    {
      label: 'German Grammar A2',
      secondaryLabel: 'German B1 20 Lessons approx. 1500 Exercises',
      description:
        'Grammar made easy: Practice german grammar on the level A2 for advanced beginners.',
      image: '/slider-images/German for Beginners 1.2.png',
    },
    {
      label: 'German for the Intermediate 3.1',
      secondaryLabel: 'German A2 18 Lessons approx. 1400 Exercises',
      description:
        'Learn through various videos and vivid grammar tutorials about everyday German life and increase your vocabulary.',
      image: '/slider-images/German for the Intermediate 3.1.png',
    },
    {
      label: 'German Grammar B1',
      secondaryLabel: 'German B1 16 Lessons approx. 800 Exercises',
      description:
        'Grammar can be exciting, too! Expand your German Grammar Competencies in this course and get to know new and interesting grammatical phenomena.',
      image: '/slider-images/German for Beginners 1.2.png',
    },
    {
      label: 'German - Advanced Intermediate 4.1',
      secondaryLabel: 'German B2 18 Lessons approx. 900 Exercises',
      description:
        'Bring your knowledge of German to a new level. Consolidate and expand your vocabulary and understanding of grammar with this entertaining video-course.',
      image: '/slider-images/German - Advanced Intermediate 4.1.png',
    },
    {
      label: 'German Grammar B2',
      secondaryLabel: 'German B2 16 Lessons approx. 800 Exercises',
      description:
        'Use this course to bring your knowledge about German grammar to an advanced level and feel confident in using grammatical structures.',
      image: '/slider-images/German for Beginners 1.2.png',
    },
    {
      label: 'German for Advanced 5',
      secondaryLabel: 'German C1 22 Lessons approx. 1100 Exercises',
      description:
        'Bring your knowledge of the german language to perfection and learn more about history and culture of the german-speaking area.',
      image: '/slider-images/German for Advanced 5.png',
    },
  ]

  return (
    <Slider
      arrows={false}
      className='my-5'
      slidesToShow={5}
      slidesToScroll={1}
      initialSlide={1}
      autoplay
      cssEase='linear'
      dots={false}
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
      ]}>
      {React.Children.toArray(
        languages.map(item => (
          <div className='w-full rounded-xl bg-backgroundSecondary p-2 text-center shadow-lg dark:bg-backgroundDark '>
            <div className='h-16  text-xl font-bold text-secondary'>
              {item.label}
            </div>
            <Image
              src={item.image}
              alt={item.label}
              className='mt-2 rounded'
              width={500}
              height={400}
            />
            <div className='my-6 h-12 font-bold'>{item.secondaryLabel}</div>
            <div className='h-32 text-sm'>{item.description}</div>
          </div>
        )),
      )}
    </Slider>
  )
}
