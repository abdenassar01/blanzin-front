'use client';

import { DropdownMultipleSelect } from '@/components/common';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';

type Props = {};

export function JobsFilter({}: Props) {
  const { push } = useRouter();
  const { control } = useForm();

  return (
    <div className='h-fit w-[25%] bg-backgroundSecondary p-2 py-4 dark:bg-backgroundDark sm:w-full'>
      <div className='flex w-full gap-2 rounded-xl bg-background p-2 shadow-lg dark:bg-backgroundSecondaryDark sm:w-full'>
        <Image
          alt=''
          className='w-5'
          src={require('@/assets/images/icons/search.svg')}
        />
        <input
          onChange={(e) => push(`?query=${e.currentTarget.value}`)}
          placeholder='query'
          type='text'
          className='w-full bg-background text-text caret-[#CFD6E7] focus:border-none focus:outline-none dark:bg-backgroundSecondaryDark dark:text-textdark'
        />
      </div>
      <div className=''>
        <DropdownMultipleSelect
          wrapperClassName='mt-3'
          className=''
          items={['Casablanca', 'Fes', 'Marrakech', 'Rabat', 'Tanger']}
          control={control}
          extractDisplayMember={(item) => item}
          extractValueMember={(item) => item}
          label='Location'
          name='cities'
        />
        <DropdownMultipleSelect
          wrapperClassName='mt-3'
          className=''
          items={['Casablanca', 'Fes', 'Marrakech', 'Rabat', 'Tanger']}
          control={control}
          extractDisplayMember={(item) => item}
          extractValueMember={(item) => item}
          label='Location'
          name='cities'
        />
        <DropdownMultipleSelect
          wrapperClassName='mt-3'
          className=''
          items={['Casablanca', 'Fes', 'Marrakech', 'Rabat', 'Tanger']}
          control={control}
          extractDisplayMember={(item) => item}
          extractValueMember={(item) => item}
          label='Location'
          name='cities'
        />
        <DropdownMultipleSelect
          wrapperClassName='mt-3'
          className=''
          items={['Casablanca', 'Fes', 'Marrakech', 'Rabat', 'Tanger']}
          control={control}
          extractDisplayMember={(item) => item}
          extractValueMember={(item) => item}
          label='Location'
          name='cities'
        />
      </div>
    </div>
  );
}
