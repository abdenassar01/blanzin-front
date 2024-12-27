'use client'

import { capitalizeFirstLetter, cn, truncateString } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Blog } from '@/services/core/api/blogs/types'
import { useCurrentLocale } from '@/utils/locales/client'

type Props = {
  className?: string
  blog: Blog
}

export function BlogCard({ className, blog }: Props) {
  const locale = useCurrentLocale()

  return (
    <Link
      href={`/blog/${blog.category.link}/${blog.slug || ''}`}
      className={cn(
        'group w-[31.5%] cursor-pointer rounded-xl bg-backgroundSecondary p-2 shadow-lg dark:bg-backgroundDark dark:shadow-backgroundDark md:w-[49%] sm:w-full',
        className,
      )}>
      <Image
        width={300}
        height={200}
        alt=''
        src={blog.image || ''}
        className='w-full transition-all group-hover:scale-105'
      />
      <h3 className='mt-2 text-base font-semibold'>
        {/*@ts-ignore*/ blog.titleEn}
        {/*  {blog[`title${capitalizeFirstLetter(locale)}`]} */}
      </h3>
      <p className='text-sm text-text dark:text-textdark'>
        {truncateString(blog[locale], 100)}
      </p>
    </Link>
  )
}
