'use client';

import { cn, truncateString } from '@/utils';
import { useI18n } from '@/utils/locales/client';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  image: string;
  orderTitle: string;
  desc: string;
  createdAt: Date;
  location: string;
  className?: string;
};

export function OrderCard({
  createdAt,
  desc,
  image,
  location,
  orderTitle,
  className,
}: Props) {
  const t = useI18n();

  return (
    <Link
      href={`/orders/${orderTitle.toLocaleLowerCase().replaceAll(' ', '-')}`}
      className={cn('w-[25vw] text-sm text-text dark:text-textdark', className)}
    >
      <Image
        src={image}
        alt=''
        width={300}
        height={250}
        className='w-full rounded-md sm:container'
      />
      <h3 className='text-base font-semibold text-secondary dark:text-textdark'>
        {orderTitle}
      </h3>
      <div className=''>
        <span className='font-medium text-secondary dark:text-main'>
          {t('location')}:
        </span>
        {` ${location}`}
      </div>
      <div className=''>
        <span className='font-medium text-secondary dark:text-main'>
          {t('date')}:
        </span>
        {` ${moment('dd/MM/yyyy').format(createdAt.toISOString())}`}
      </div>
      <div className=''>{truncateString(desc, 70)}</div>
    </Link>
  );
}
