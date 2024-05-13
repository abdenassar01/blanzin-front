'use client';

import { Map } from '@/components';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';

type Props = {
  price: number;
  date: string;
  location: string;
};

export function OrderStats({ date, location, price }: Props) {
  const { theme } = useTheme();

  const details = [
    {
      icon:
        theme === 'dark'
          ? require('@/assets/images/icons/dark/money.svg')
          : require('@/assets/images/icons/light/money.svg'),
      label: `${price} DH`,
    },
    {
      icon:
        theme === 'dark'
          ? require('@/assets/images/icons/dark/calendar.svg')
          : require('@/assets/images/icons/light/calendar.svg'),
      label: date,
    },
    {
      icon:
        theme === 'dark'
          ? require('@/assets/images/icons/dark/location.svg')
          : require('@/assets/images/icons/light/location.svg'),
      label: location,
    },
  ];

  return (
    <Map
      items={details}
      render={(item) => (
        <div className='flex items-center gap-1'>
          <Image className='icon' alt={item.label} src={item.icon} />
          <div className='text-sm font-medium text-secondary dark:text-main'>
            {item.label}
          </div>
        </div>
      )}
    />
  );
}
