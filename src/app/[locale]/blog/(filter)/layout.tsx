import { BlogCard, FilterSelector, Heading } from '@/components';
import { LayoutProps } from '@/types';
import { getI18n } from '@/utils/locales/server';
import React from 'react';

export default async function Blogs({ children }: LayoutProps) {
  const t = await getI18n();
  return (
    <div className='flex flex-col items-center bg-backgroundSecondary py-12 dark:bg-backgroundSecondaryDark'>
      <Heading
        className='mb-4 text-center text-2xl sm:w-[90%] sm:text-center'
        heading={t('blog.header')}
      />
      <FilterSelector />
      {children}
    </div>
  );
}
