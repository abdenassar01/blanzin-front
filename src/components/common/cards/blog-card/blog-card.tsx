import { cn, truncateString } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  className?: string;
};

export function BlogCard({ className }: Props) {
  return (
    <Link
      href='/blog/the-best-way-to-find'
      className={cn(
        'group w-[31.5%] cursor-pointer rounded-xl bg-backgroundSecondary p-2 shadow-lg dark:bg-backgroundDark dark:shadow-backgroundDark md:w-[49%] sm:w-full',
        className
      )}
    >
      <Image
        width={300}
        height={200}
        alt=''
        src='/house.jpg'
        className='w-full transition-all group-hover:scale-105'
      />
      <h3 className='mt-2 text-base font-semibold'>
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
