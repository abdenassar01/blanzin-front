import * as React from 'react';
import Image from 'next/image';
import { truncateString } from '@/utils';
import { Button } from '@/components';

type Props = {
  item: { image: string; label: string; description: string };
};

export function CourseCard({ item }: Props) {
  return (
    <div className='flex w-[32%] flex-col justify-between rounded-xl border border-secondary p-1 sm:w-full'>
      <Image
        className='w-full rounded-lg'
        width={200}
        height={200}
        src={item.image}
        alt={item.label}
      />
      <h2 className='my-3 text-xl font-bold text-secondary dark:text-main'>
        {item.label}
      </h2>
      <p className=''>{truncateString(item.description, 50)}</p>
      <Button theme='secondary' className='mt-4 rounded-lg' text='Show more' />
    </div>
  );
}
