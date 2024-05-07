import { BlogCard, Heading } from '@/components';
import Image from 'next/image';
import React from 'react';

export default function BlogDetails() {
  return (
    <div className='bg-backgroundSecondary py-12 dark:bg-backgroundSecondaryDark'>
      <div className='container flex justify-between gap-3 sm:flex-col'>
        <div className='min-w-[70%] sm:w-full'>
          <h3 className='mb-3 text-center text-xbase font-semibold text-secondary dark:text-main'>
            The best way to find jobs outside of your country
          </h3>
          <Image
            width={300}
            height={200}
            alt=''
            src='/house.jpg'
            className='w-full rounded-xl transition-all group-hover:scale-105'
          />

          <div
            dangerouslySetInnerHTML={{
              __html:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus consectetur amet quidem fugit, blanditiis reprehenderit sed accusamus illum, similique corporis porro, obcaecati ipsum dolore rem enim minus! Corporis, quia dignissimos!,<br /> <br /><b>Title test</b><br /><br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus consectetur amet quidem fugit, blanditiis reprehenderit sed accusamus illum, similique corporis porro, obcaecati ipsum dolore rem enim minus! Corporis, quia dignissimos! <br /><br /><b><i>Title test</i></b><br /> ',
            }}
          />
        </div>
        <div className='w-full pl-3'>
          <div className='text-xbase'>
            <Heading className='text-center capitalize' heading='latst blogs' />
          </div>
          <div className=''>
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </div>
    </div>
  );
}
