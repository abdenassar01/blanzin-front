'use client';

import { truncateString } from '@/utils';
import { useI18n } from '@/utils/locales/client';
import moment from 'moment';
import Image from 'next/image';
import React from 'react';

type Props = {
  image: string;
  orderTitle: string;
  desc: string;
  createdAt: string;
  location: string;
};

export function OrderCard({
  createdAt,
  desc,
  image,
  location,
  orderTitle,
}: Props) {
  const t = useI18n();

  return (
    <div className='text-sm text-text dark:text-textdark'>
      <Image
        src={image}
        alt=''
        width={300}
        height={250}
        className='w-[25vw] rounded-md sm:container'
      />
      <h3 className='text-base font-semibold text-secondary'>{orderTitle}</h3>
      <div className=''>
        <span className='font-medium text-secondary'>{t('location')}: </span>
        {location}
      </div>
      <div className=''>
        <span className='font-medium text-secondary'>{t('date')}: </span>
        {`${moment('dd/MM/yyyy').format(createdAt)}`}
      </div>
      <div className=''>{truncateString(desc, 70)}</div>
    </div>
  );
}
