import * as React from 'react'
import { Button, Heading } from '@/components'
import Link from 'next/link'
import Image from 'next/image'
import { getScopedI18n } from '@/utils/locales/server'
import { fetchServicePageBySlug } from '@/services'
import { Locale } from '@/types'
import { capitalizeFirstLetter } from '@/utils'

interface Props {
  params: Promise<{
    slug: string
    locale: Locale
  }>
}

export default async function Page({ params }: Props) {
  const t = await getScopedI18n('services')

  const { slug, locale } = await params
  const data = await fetchServicePageBySlug(slug)

  return (
    <div className='container my-12 mt-32'>
      <div className='grid w-full grid-cols-[1.2fr,0.8fr] gap-20 sm:grid-cols-1 sm:grid-rows-2 sm:gap-2'>
        <div className='flex flex-col justify-between'>
          <div className='text-3xl'>
            <Heading
              heading={
                //@ts-ignore
                data.data[`title${capitalizeFirstLetter(locale)}`]
              }
            />
          </div>
          <p className='text-xl text-mainText dark:text-textdark'>
            {data.data[locale]}
          </p>
          <Link href='/application' className='w-[40%] sm:w-full'>
            <Button theme='secondary' text='Start now!' />
          </Link>
        </div>
        <Image
          className='rounded-lg sm:min-w-full'
          src='/static/online_job_interview_service.png'
          width={700}
          height={400}
          alt='job interview'
        />
      </div>
      <div className='mt-12 flex flex-col gap-5'>
        <div className='text-xxm'>
          <Heading heading={`${t('how-it-work')}:`} />
        </div>
        <div
          className='prose text-secondary prose-strong:text-secondary'
          dangerouslySetInnerHTML={{
            // @ts-ignore
            __html: data.data[`bulletPoints${capitalizeFirstLetter(locale)}`],
          }}
        />

        <div className='flex items-center gap-2'>
          {data.data.danger && (
            <Image
              src={require('@/assets/images/icons/danger.svg')}
              alt='service note'
              className='w-12'
            />
          )}
          <div className='text-xl font-bold text-secondary dark:text-main'>
            {
              //@ts-ignore
              data.data[`alert${capitalizeFirstLetter(locale)}`]
            }
          </div>
        </div>
      </div>
    </div>
  )
}
