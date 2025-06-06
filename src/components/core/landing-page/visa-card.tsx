'use client';

import * as React from 'react';
import Image from 'next/image';
import { Button } from '@/components';
import Link from 'next/link';

type Props = {
  visa: { img: string; title: string; description: string };
};

export function VisaCard({ visa: { img, title, description } }: Props) {
  return (
    <div className='flex h-[580px] flex-col justify-between rounded-xl border border-secondary p-2 dark:border-main sm:w-full'>
      <div className=''>
        <Image
          src={img}
          width={300}
          height={200}
          className='w-full rounded'
          alt='visa'
        />
        <div className='mt-3 text-xl font-bold text-secondary dark:text-main'>
          {title}
        </div>
      </div>
      <div className=''>
        <div className='my-3 text-mainText dark:text-textdark'>
          {description}
        </div>
        <div className='w-[50%] sm:w-full'>
          <Link href={`/visa/${title.toLowerCase().replace(/ /g, '-')}`}>
            <Button text='read more' className='rounded-md' theme='secondary' />
          </Link>
        </div>
      </div>
    </div>
  );
}
