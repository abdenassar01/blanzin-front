'use client';

import { truncateString } from '@/utils';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

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

  const { theme } = useTheme();

  return (
    <Link
      href={`/jobs/job-details-slug`}
      className='rounded-xl border-[1px] border-[#CFD6E7] bg-backgroundSecondary p-4 dark:bg-backgroundSecondaryDark'
    >
      <div className='flex gap-2'>
        <Image
          width={300}
          height={200}
          className='aspect-[3/4] w-[10vw] rounded object-cover'
          src={require('@/assets/images/job-image.jpg')}
          alt=''
        />
        <div className='flex flex-col justify-between'>
          <div className='text-mainText font-bold'>
            Select Hotel Erlangen logo Cook / Koch - „Der Lebensmittel-Artist
          </div>
          <div className='my-2 flex flex-wrap gap-3'>
            {React.Children.toArray(
              tabs.map((tab) => (
                <div className='flex items-center gap-1'>
                  <Image
                    className='w-[1.5vw] sm:w-[6vw]'
                    alt=''
                    src={theme === 'dark' ? tab.darkIcon : tab.icon}
                  />
                  <p className='text-mainText text-sm'>{tab.text}</p>
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
            <p className='text-text'>in 12 days</p>
            <Image
              alt=''
              className='w-[2vw]'
              src={require('@/assets/images/icons/dark/organisation.svg')}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
