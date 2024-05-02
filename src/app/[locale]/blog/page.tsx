import { BlogCard, Heading } from '@/components';
import { getI18n } from '@/utils/locales/server';
import React from 'react';

export default async function Blogs() {
  const t = await getI18n();
  return (
    <div className='my-12'>
      <Heading
        className='mb-4 text-center text-2xl'
        heading={t('blog.header')}
      />
      <div className='container flex flex-wrap justify-between gap-y-5'>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
}
