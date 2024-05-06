'use client';

import { Dropdown } from '@/components';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';

type Props = {};

export function JobsFilter({}: Props) {
  const { control } = useForm();
  const { push } = useRouter();

  return (
    <div className='my-3 flex flex-col items-center justify-center'>
      <div className='flex w-[50vw] gap-2 rounded-full border-[1px] border-[#CFD6E7] bg-backgroundSecondary p-2 dark:bg-backgroundSecondaryDark sm:w-full'>
        <Image
          alt=''
          className='w-[2vw]'
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
