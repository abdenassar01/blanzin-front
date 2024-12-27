import React, { Suspense } from 'react'
import { fetchAllBlogsByCategoryLink } from '@/services'
import {
  BlogCard,
  FilterSelectorServer,
  Heading,
  Loader,
  Map,
} from '@/components'
import { getScopedI18n } from '@/utils/locales/server'

type Props = {
  params: Promise<{ category: string }>
  searchParams: Promise<{ page: number }>
}

export default async function Page(props: Props) {
  const searchParams = await props.searchParams;

  const {
    page = 0
  } = searchParams;

  const params = await props.params;

  const {
    category
  } = params;

  const data = await fetchAllBlogsByCategoryLink(category, page)

  const t = await getScopedI18n('blog')

  return (
    <div className='flex flex-col items-center py-12'>
      <Heading
        className='mb-4 text-center text-2xl sm:w-[90%] sm:text-center'
        heading={t('header')}
      />
      <Suspense
        fallback={
          <div className='h-[100px] w-full'>
            <Loader />
          </div>
        }>
        <FilterSelectorServer category={category} />
      </Suspense>
      <div className='min-h-[40vh] w-full'>
        <div className='container flex flex-wrap justify-between gap-y-14'>
          <Map
            items={data.data.content}
            render={item => <BlogCard blog={item} />}
          />
        </div>
      </div>
    </div>
  )
}
