import Image from 'next/image'
import React from 'react'
import { LatestRelatedBlogs } from '@/components'
import { fetchBlogBySlug } from '@/services'
import { capitalizeFirstLetter } from '@/utils'
import { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: Promise<{ category: string; slug: string; locale: 'en' | 'ar' | 'fr' }>
}

export async function generateMetadata(props: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const params = await props.params;

  const {
    slug,
    locale
  } = params;

  const data = await fetchBlogBySlug(slug)

  return {
    // @ts-ignore
    title: data.data[`title${capitalizeFirstLetter(locale)}`],
    description: data.data[locale],
    authors: [{ name: 'blanzin', url: 'https://blanzin.com' }],
    category: data.data.category[locale],
    abstract: 'Look for jobs in germany for our moroccan clients',
    keywords:
      'blanzin, work in germany, travel to germany, trainee in germany, training, work in europe',
  }
}

export default async function BlogDetails(props: Props) {
  const params = await props.params;

  const {
    category,
    slug,
    locale
  } = params;

  const data = await fetchBlogBySlug(slug)

  return (
    <div className='bg-backgroundSecondary py-12 dark:bg-backgroundSecondaryDark'>
      <div className='container flex justify-between gap-3 md:flex-col sm:flex-col'>
        <div className='min-w-[70%] sm:w-full'>
          <h3 className='mb-3 text-center text-xbase font-semibold text-secondary dark:text-main'>
            {
              // @ts-ignore
              data.data[`title${capitalizeFirstLetter(locale)}`]
            }
          </h3>
          <Image
            width={300}
            height={200}
            alt=''
            src={data.data.image}
            className='w-full rounded-xl transition-all group-hover:scale-105'
          />

          <div
            dangerouslySetInnerHTML={{
              __html: data.data[locale],
            }}
          />
        </div>
        <LatestRelatedBlogs category={category} />
      </div>
    </div>
  )
}
