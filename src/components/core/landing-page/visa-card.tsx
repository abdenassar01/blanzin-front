'use client';

import * as React from 'react';
import Image from 'next/image';
import { Button } from '@/components';
import Link from 'next/link';

type Props = {};

export function VisaCard(props: Props) {
  return (
    <div className='w-[32%] rounded-xl border border-secondary p-2 dark:border-main sm:w-full'>
      <Image
        src='/job-image.jpg'
        width={300}
        height={200}
        className='w-full rounded'
        alt='visa'
      />
      <div className='mt-3 text-xl font-bold text-secondary dark:text-main'>
        EU Blue Card
      </div>
      <div className='my-3'>
        The EU Blue Card is one of the most popular residence permits for highly
        qualified professionals and offers numerous advantages. It is best to
        check directly whether you can obtain an EU Blue Card.
      </div>
      <div className='w-[50%] sm:w-full'>
        <Link href='/visa/blue-card'>
          <Button text='read more' className='rounded-md' theme='secondary' />
        </Link>
      </div>
    </div>
  );
}
