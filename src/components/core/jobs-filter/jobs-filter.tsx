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
      <div className='flex w-[50vw] gap-2 rounded-full border-[1px] border-[#CFD6E7] bg-backgroundSecondary p-2 sm:w-full'>
        <Image
          alt=''
          className='w-[2vw]'
          src={require('@/assets/images/icons/search.svg')}
        />
        <input
          onChange={(e) => push(`?query=${e.currentTarget.value}`)}
          placeholder='query'
          type='text'
          className='w-full caret-[#CFD6E7] focus:border-none focus:outline-none'
        />
      </div>
      <div className='mt-5 flex gap-4'>
        <Dropdown
          control={control}
          items={['item', 'item']}
          extractDisplayMember={(item) => item}
          extractValueMember={(item) => item}
          label=''
          name='filter'
          className='rounded-full border-[1px] border-[#CFD6E7]'
        />
        <Dropdown
          control={control}
          items={['item', 'item']}
          extractDisplayMember={(item) => item}
          extractValueMember={(item) => item}
          label=''
          name='filter'
          className='rounded-full border-[1px] border-[#CFD6E7]'
        />
        <Dropdown
          control={control}
          items={['item', 'item']}
          extractDisplayMember={(item) => item}
          extractValueMember={(item) => item}
          label=''
          name='filter'
          className='rounded-full border-[1px] border-[#CFD6E7]'
        />
        <Dropdown
          control={control}
          items={['item', 'item']}
          extractDisplayMember={(item) => item}
          extractValueMember={(item) => item}
          label=''
          name='filter'
          className='rounded-full border-[1px] border-[#CFD6E7]'
        />
      </div>
    </div>
  );
}
