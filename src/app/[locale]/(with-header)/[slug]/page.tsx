import { Heading } from '@/components'
import React from 'react'
import { fetchStaticPageBySlug } from '@/services'
import { Locale } from '@/types'
import { capitalizeFirstLetter } from '@/utils'

type Props = {
  params: Promise<{
    slug: string
    locale: Locale
  }>
}

export default async function StaticPage(props: Props) {
  const params = await props.params;

  const {
    slug,
    locale
  } = params;

  const data = await fetchStaticPageBySlug(`blanzin-${slug}`)

  return (
    <div className='container py-16'>
      <div className='text-center text-xxm'>
        {/*  @ts-ignore */}
        <Heading heading={data.data[`title${capitalizeFirstLetter(locale)}`]} />
      </div>
      <div
        className=''
        dangerouslySetInnerHTML={{ __html: data.data[locale] }}
      />
    </div>
  )
}
