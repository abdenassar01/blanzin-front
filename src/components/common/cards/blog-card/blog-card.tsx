import { truncateString } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export function BlogCard() {
  return (
    <Link
      href='/blog/the-best-way-to-find'
      className='group w-[32%] cursor-pointer sm:w-full'
    >
      <Image
        width={300}
        height={200}
        alt=''
        src='/house.jpg'
        className='w-full rounded-xl transition-all group-hover:scale-105'
      />
      <h3 className='text-base font-semibold'>
        The best way to find jobs outside of your country
      </h3>
      <p className='text-sm text-text dark:text-textdark'>
        {truncateString(
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla perspiciatis quas animi asperiores provident consequuntur numquam. Sunt quibusdam repellat iste. Eum dicta modi pariatur inventore praesentium ad voluptate dolorem asperiores.',
          100
        )}
      </p>
    </Link>
  );
}
