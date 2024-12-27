import * as React from 'react'
import { fetchAllBlogCategories } from '@/services'
import Link from 'next/link'
import { cn } from '@/utils'
import { getCurrentLocale, getScopedI18n } from '@/utils/locales/server'

export async function FilterSelectorServer({ category }: { category: string }) {
  const data = await fetchAllBlogCategories()
  const t = await getScopedI18n('blog')
  const locale = await getCurrentLocale()

  return (
    <div className='container my-10'>
      <div className='no-scrollbar flex gap-3 overflow-x-scroll'>
        <Link
          className={cn(
            'text-nowrap rounded-full px-5 py-2 font-medium',
            'all' === category
              ? ' bg-secondary text-background dark:bg-main dark:text-backgroundDark'
              : 'bg-backgroundSecondary text-secondary dark:bg-backgroundSecondaryDark  dark:text-main',
          )}
          href='/blog/all'>
          {t('filter-all')}
        </Link>
        {React.Children.toArray(
          data.data.map(item => (
            <Link
              className={cn(
                'text-nowrap rounded-full px-5 py-2 font-medium',
                item.link === category
                  ? ' bg-secondary text-background dark:bg-main dark:text-backgroundDark'
                  : 'bg-backgroundSecondary text-secondary dark:bg-backgroundSecondaryDark  dark:text-main',
              )}
              href={item.link}>
              {item[locale]}
            </Link>
          )),
        )}
      </div>
    </div>
  )
}
