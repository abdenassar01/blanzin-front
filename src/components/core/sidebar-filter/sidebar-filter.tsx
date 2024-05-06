/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { DropdownMultipleSelect } from '@/components';
import { appendArrayToSearchParams } from '@/utils';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';

type Props = {};

export function SidebarFilter({}: Props) {
  const { control } = useForm({
    defaultValues: {
      categories: [],
      cities: [],
    },
  });
  const { push } = useRouter();
  const [query, setQuery] = useState('');

  const values = useWatch({
    control,
  });
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  useEffect(() => {
    appendArrayToSearchParams(values.categories, 'categories', params);
    appendArrayToSearchParams(values.cities, 'cities', params);
    appendArrayToSearchParams(query, 'query', params);
    console.log('executed: ', params);
  }, [values, query]);

  return (
    <div className='m-2 h-fit w-[33%] overflow-y-scroll rounded-xl bg-backgroundSecondary p-2 dark:bg-backgroundSecondaryDark'>
      <div className='flex w-full gap-2 rounded-full border-[1px] border-[#CFD6E7] bg-backgroundSecondary p-2 dark:bg-backgroundSecondaryDark sm:w-full'>
        <Image
          alt=''
          className='w-[2vw]'
          src={require('@/assets/images/icons/search.svg')}
        />
        <input
          onChange={(e) => setQuery(e.currentTarget.value)}
          placeholder='query'
          type='text'
          className='w-full bg-backgroundSecondary caret-[#CFD6E7] focus:border-none focus:outline-none dark:bg-backgroundSecondaryDark'
        />
      </div>
      <div className='mb-[220px]'>
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
          items={['test item', 'Test again', 'third test']}
          control={control}
          extractDisplayMember={(item) => item}
          extractValueMember={(item) => item}
          label='Category'
          name='categories'
        />
      </div>
    </div>
  );
}
