import { BlogCard } from '@/components';
import React from 'react';

export default function Blogs() {
  return (
    <div className='my-12'>
      <div className='container flex flex-wrap justify-between gap-5'>
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
