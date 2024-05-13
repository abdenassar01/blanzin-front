import { BlogCard } from '@/components';
import React from 'react';

export default function Blog() {
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
