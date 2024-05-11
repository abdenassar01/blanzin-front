import {
  Button,
  Heading,
  Map,
  ProfileOptions,
  ProfileRating,
  RatingStars,
} from '@/components';
import { getI18n } from '@/utils/locales/server';
import Image from 'next/image';
import React from 'react';

type Props = {
  params: {
    name: string;
  };
};

const feedbacks = [
  {
    user: {
      name: 'Customer 1',
      avatar: require('@/assets/images/job-image.jpg'),
    },
    rating: 3.5,
    message:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis rem molestias sapiente, magnam ab maxime qui quam nesciunt quibusdam. Nobis amet vitae repudiandae',
  },
  {
    user: {
      name: 'Customer 2',
      avatar: require('@/assets/images/avatar.png'),
    },
    rating: 4,
    message:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis rem molestias sapiente, magnam ab maxime qui quam nesciunt quibusdam. Nobis amet vitae repudiandae',
  },
  {
    user: {
      name: 'Customer 3',
      avatar: require('@/assets/images/avatar.png'),
    },
    rating: 1.5,
    message:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis rem molestias sapiente, magnam ab maxime qui quam nesciunt quibusdam. Nobis amet vitae repudiandae',
  },
  {
    user: {
      name: 'Customer 4',
      avatar: require('@/assets/images/avatar.png'),
    },
    rating: 5,
    message:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis rem molestias sapiente, magnam ab maxime qui quam nesciunt quibusdam. Nobis amet vitae repudiandae',
  },
];

export default async function ExpertProfile({ params: { name } }: Props) {
  const t = await getI18n();

  return (
    <div className='my-12'>
      <div className='container flex items-start gap-2 text-text dark:text-textdark sm:flex-col'>
        <div className='mt-16 flex w-[30%] flex-col items-center rounded-xl bg-backgroundSecondary p-2 dark:bg-backgroundSecondaryDark sm:mt-2 sm:w-full'>
          <Image
            width={200}
            height={200}
            className='-mt-16 aspect-square w-[8vw] rounded-full border-[3px] border-background object-cover shadow-md dark:border-backgroundDark sm:-mt-10 sm:w-[20vw]'
            alt={name}
            src='/auth-bg.png'
          />
          <h3 className='mt-2 font-semibold capitalize text-secondary dark:text-main'>
            {name.replace('-', ' ')}
          </h3>
          <p className=''>Menuisier</p>
          <div className='mt-2 flex w-full flex-col items-center justify-center'>
            <div className='w-full'>
              <ProfileRating rating={4.5} />
            </div>

            <div className='my-3 w-[80%] border-b-[1px] border-t-[1px]  border-textdark py-2 dark:border-text '>
              <div className='my-2 flex items-center gap-2 text-main'>
                <Image
                  alt=''
                  className='w-[1.5vw] sm:w-[5vw]'
                  src={require('@/assets/images/icons/dark/location.svg')}
                />
                <div className='text-xs font-bold'>Rabat</div>
              </div>
            </div>
            <ProfileOptions />
          </div>
        </div>
        <div className='w-full rounded-xl bg-backgroundSecondary p-2 dark:bg-backgroundSecondaryDark'>
          <Heading heading={t('forms.description')} />
          <div className='text-sm'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis rem
            molestias sapiente, magnam ab maxime qui quam nesciunt quibusdam.
            Nobis amet vitae repudiandae ut est libero aliquam deleniti
            voluptate minima!Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Quis rem molestias sapiente, magnam ab maxime qui quam
            nesciunt quibusdam. Nobis amet vitae repudiandae ut est libero
            aliquam deleniti voluptate minima! minima!
          </div>
          <Heading className='mt-4' heading={t('reviews')} />
          <div className='flex flex-col gap-3'>
            <Map
              items={feedbacks}
              render={(item) => (
                <div className='rounded-xl bg-background p-2 dark:bg-backgroundDark'>
                  <div className='flex items-start gap-2'>
                    <Image
                      alt={item.user.name}
                      src={item.user.avatar}
                      className='aspect-square w-[4vw] rounded-full object-cover'
                    />
                    <div className=''>
                      <h2 className='font-medium '>{item.user.name}</h2>
                      <RatingStars rating={item.rating} />
                      <div className='mt-2 rounded bg-backgroundSecondary p-2 text-sm dark:bg-backgroundSecondaryDark'>
                        {item.message}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
