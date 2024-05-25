import { RatingStars } from '@/components/common/layout-helpers/rating-stars';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {};

export function ProfileWidget({}: Props) {
  return (
    <Link
      href='/experts/customer-name'
      className='mt-20 flex flex-col items-center rounded-lg bg-background p-2 dark:bg-backgroundDark'
    >
      <Image
        className='-mt-16'
        alt='avatar'
        src={require('@/assets/images/avatar.png')}
      />
      <div className='mt-2 text-text dark:text-textdark'>
        <h2 className='text-center font-medium capitalize text-mainText dark:text-main'>
          customer name
        </h2>
        <div className='my-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          recusandae non impedit, culpa consequatur labore veritatis nostrum
          suscipit vitae
        </div>
        <div className=''>
          <RatingStars rating={3.5} />
        </div>
      </div>
    </Link>
  );
}
