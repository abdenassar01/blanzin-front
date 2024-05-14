/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { DropdownMultipleSelect, Modal } from '@/components';
import { appendArrayToSearchParams } from '@/utils';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';

export function SidebarFilter() {
  const { control } = useForm({
    defaultValues: {
      categories: [],
      cities: [],
    },
  });
  const [query, setQuery] = useState<string>('');
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const { theme } = useTheme();

  const values = useWatch({
    control,
  });
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  useEffect(() => {
    appendArrayToSearchParams(values.categories, 'categories', params);
    appendArrayToSearchParams(values.cities, 'cities', params);
    appendArrayToSearchParams(query, 'query', params);
  }, [values, query]);

  return (
    <div className='my-6 h-fit'>
      <div className='flex items-center justify-center gap-2 sm:flex'>
        <div className='flex w-[70%] gap-2 rounded-full border-[1px] border-[#CFD6E7] bg-backgroundSecondary p-2 dark:bg-backgroundSecondaryDark sm:w-full'>
          <Image
            alt=''
            className='icon'
            src={require('@/assets/images/icons/search.svg')}
          />
          <input
            onChange={(e) => setQuery(e.currentTarget.value)}
            placeholder='query'
            type='text'
            className='w-full bg-backgroundSecondary caret-[#CFD6E7] focus:border-none focus:outline-none dark:bg-backgroundSecondaryDark'
          />
        </div>
        <button
          onClick={() => setShowFilter((prev) => !prev)}
          className='hidden items-center justify-center rounded-full bg-background dark:bg-backgroundDark sm:flex'
        >
          <Image
            alt='filter png'
            className='m-2 mx-3 w-[2vw] sm:w-[6vw]'
            src={
              theme === 'dark'
                ? require('@/assets/images/icons/dark/filter.svg')
                : require('@/assets/images/icons/dark/filter.svg')
            }
          />
        </button>
      </div>
      <div className='flex gap-4 sm:hidden'>
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
      <Modal
        width={95}
        height={60}
        setVisible={setShowFilter}
        visible={showFilter}
        className='no-scrollbar overflow-y-scroll'
      >
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
            items={['test item', 'Test again', 'third test']}
            control={control}
            extractDisplayMember={(item) => item}
            extractValueMember={(item) => item}
            label='Category'
            name='categories'
          />
        </div>
      </Modal>
    </div>
  );
}
