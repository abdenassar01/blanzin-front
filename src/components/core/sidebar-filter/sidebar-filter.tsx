'use client';

import Image from 'next/image';
import React from 'react';

type Props = {};

export function SidebarFilter({}: Props) {
  return (
    <div className='m-2 h-fit w-[33%] overflow-y-scroll rounded-xl bg-backgroundSecondary p-2 dark:bg-backgroundSecondaryDark'>
      <div className='flex w-full gap-2 rounded-full border-[1px] border-[#CFD6E7] bg-backgroundSecondary p-2 dark:bg-backgroundSecondaryDark sm:w-full'>
        <Image
          alt=''
          className='w-[2vw]'
          src={require('@/assets/images/icons/search.svg')}
        />
        <input
          // onChange={(e) => push(`?query=${e.currentTarget.value}`)}
          placeholder='query'
          type='text'
          className='w-full bg-backgroundSecondary caret-[#CFD6E7] focus:border-none focus:outline-none dark:bg-backgroundSecondaryDark'
        />
      </div>
      <div className=''></div>
    </div>
  );
}
