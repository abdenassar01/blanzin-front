import * as React from 'react'
import { BlogCard, Heading, Map } from '@/components'
import { fetchAllBlogsByCategoryLink } from '@/services'

type Props = {
  category: string
}

export async function LatestRelatedBlogs({ category }: Props) {
  const data = await fetchAllBlogsByCategoryLink(category)

  return (
    <div className='w-full rounded-xl bg-backgroundSecondary p-2 dark:bg-backgroundDark'>
      <div className='text-xbase'>
        <Heading className='text-center capitalize' heading='latest blogs' />
      </div>
      <div className='no-scrollbar gap-2 overflow-x-scroll md:flex sm:flex'>
        <Map
          items={data.data.content.slice(0, 3)}
          render={item => (
            <div className='sm:min-w-[80%]'>
              <BlogCard blog={item} />
            </div>
          )}
        />
      </div>
    </div>
  )
}
