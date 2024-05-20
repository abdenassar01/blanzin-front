'use client';

import { truncateString } from '@/utils';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

type Props = {};

export function JobMainCard({}: Props) {
  const tabs = [
    {
      icon: require('@/assets/images/icons/light/organisation.svg'),
      darkIcon: require('@/assets/images/icons/dark/organisation.svg'),
      text: 'Select Hotel Erlangen',
    },
    {
      icon: require('@/assets/images/icons/light/location.svg'),
      darkIcon: require('@/assets/images/icons/dark/location.svg'),
      text: 'Erlangen',
    },
    {
      icon: require('@/assets/images/icons/light/time.svg'),
      darkIcon: require('@/assets/images/icons/dark/time.svg'),
      text: 'Full Time',
    },
    {
      icon: require('@/assets/images/icons/light/money.svg'),
      darkIcon: require('@/assets/images/icons/dark/money.svg'),
      text: '30000 €',
    },
  ];

  const [favourite, setFavourite] = useState<boolean>(false);

  const { theme } = useTheme();

  return (
    <div className='rounded-xl bg-backgroundSecondary p-4 shadow-md dark:bg-backgroundDark sm:p-2'>
      <div className='flex gap-2 sm:flex-col'>
        <Link href={`/jobs/job-details-slug`}>
          <Image
            width={300}
            height={200}
            className='aspect-[3/4] w-[10vw] rounded object-cover sm:aspect-video sm:h-full sm:w-[100%]'
            src={require('@/assets/images/job-image.jpg')}
            alt=''
          />
        </Link>
        <div className='flex flex-col justify-between'>
          <Link
            href={`/jobs/job-details-slug`}
            className='cursor-pointer font-bold text-mainText hover:underline dark:text-textdark'
          >
            Select Hotel Erlangen logo Cook / Koch - „Der Lebensmittel-Artist
          </Link>
          <div className='my-2 flex flex-wrap gap-3'>
            {React.Children.toArray(
              tabs.map((tab) => (
                <div className='flex items-center gap-1'>
                  <Image
                    className='w-[1.5vw] sm:w-[6vw]'
                    alt=''
                    src={theme === 'dark' ? tab.darkIcon : tab.icon}
                  />
                  <p className='text-sm text-mainText dark:text-textdark'>
                    {tab.text}
                  </p>
                </div>
              ))
            )}
          </div>
          <div className='text-text dark:text-textdark'>
            {truncateString(
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque fugiat, eaque, rem unde illum sit, soluta nostrum sint nisi quo alias quisquam ea debitis optio culpa labore? Explicabo, cumque!',
              200
            )}
          </div>
          <div className='flex items-center justify-between'>
            <p className='text-xs text-text'>in 12 days</p>
            <button onClick={() => setFavourite((prev) => !prev)}>
              <Image
                alt=''
                className='w-[2vw] sm:w-[6vw]'
                src={
                  favourite
                    ? theme === 'dark'
                      ? require('@/assets/images/icons/dark/favourite-fill.svg')
                      : require('@/assets/images/icons/light/favourite-fill.svg')
                    : theme === 'dark'
                      ? require('@/assets/images/icons/dark/favourite.svg')
                      : require('@/assets/images/icons/light/favourite.svg')
                }
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
