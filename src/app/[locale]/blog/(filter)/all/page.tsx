import { BlogCard } from '@/components';
import React from 'react';

export default function AllBlogs() {
  return (
    <div className='container flex flex-wrap justify-between gap-y-14'>
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
}
