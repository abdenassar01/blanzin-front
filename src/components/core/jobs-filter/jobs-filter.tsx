'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

type Props = {};

export function JobsFilter({}: Props) {
  const { push } = useRouter();

  return (
    <div className='my-3 flex min-w-[30%] flex-col items-center justify-center rounded-md bg-backgroundSecondary p-2 dark:bg-backgroundSecondaryDark sm:w-full'>
      <div className='flex w-full gap-2 rounded-full border-[1px] border-[#CFD6E7] bg-backgroundSecondary p-2 dark:bg-backgroundSecondaryDark sm:w-full'>
        <Image
          alt=''
          className='w-[2vw] sm:w-[6vw]'
          src={require('@/assets/images/icons/search.svg')}
        />
        <input
          onChange={(e) => push(`?query=${e.currentTarget.value}`)}
          placeholder='query'
          type='text'
          className='w-full bg-backgroundSecondary text-text caret-[#CFD6E7] focus:border-none focus:outline-none dark:bg-backgroundSecondaryDark dark:text-textdark'
        />
      </div>
    </div>
  );
}
