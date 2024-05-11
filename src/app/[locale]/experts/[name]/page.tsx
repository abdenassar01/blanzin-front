import { ProfileRating, RatingStars } from '@/components';
import Image from 'next/image';
import React from 'react';

type Props = {
  params: {
    name: string;
  };
};

export default function ExpertProfile({ params: { name } }: Props) {
  return (
    <div className='my-12'>
      <div className='container flex gap-2 text-text dark:text-textdark'>
        <div className='mt-16 flex w-[30%] flex-col items-center rounded-xl bg-backgroundSecondary p-2 dark:bg-backgroundSecondaryDark sm:w-full'>
          <Image
            width={200}
            height={200}
            className='-mt-16 aspect-square w-[8vw] rounded-full border-[3px] border-background object-cover shadow-md dark:border-backgroundDark sm:w-[15vw]'
            alt={name}
            src='/auth-bg.png'
          />
          <h3 className='mt-2 font-semibold capitalize text-secondary dark:text-main'>
            {name.replace('-', ' ')}
          </h3>
          <p className=''>Menuisier</p>
          <div className='mt-2 w-full'>
            <ProfileRating rating={4.5} />
            <div className='mt-1 flex items-center gap-2 text-main'>
              <Image
                alt=''
                className='w-[1.5vw] sm:w-[5vw]'
                src={require('@/assets/images/icons/dark/location.svg')}
              />
              <div className='text-xs font-bold'>Rabat</div>
            </div>
          </div>
        </div>
        <div className='w-full rounded-xl bg-backgroundSecondary p-2 dark:bg-backgroundSecondaryDark'>
          ExpertProfile {name}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis rem
          molestias sapiente, magnam ab maxime qui quam nesciunt quibusdam.
          Nobis amet vitae repudiandae ut est libero aliquam deleniti voluptate
          minima!
        </div>
      </div>
    </div>
  );
}
