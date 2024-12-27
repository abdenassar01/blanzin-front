import React from 'react'
import { GoBackButton, Heading } from '@/components'
import Image from 'next/image'
import Markdown from 'react-markdown'
import { Metadata, ResolvingMetadata } from 'next'

interface Props {
  params: Promise<{ slug: string; locale: string }>
  searchParams: Promise<{ ref: string }>
}

export async function generateMetadata(props: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const searchParams = await props.searchParams;

  const {
    ref
  } = searchParams;

  const res = await fetch(
    `https://rest.arbeitsagentur.de/jobboerse/jobsuche-service/pc/v3/jobdetails/${btoa(ref)}`,
    { headers: { 'X-API-Key': 'jobboerse-jobsuche' } },
  )
  const data = await res.json()

  return {
    title: data?.stellenangebotsTitel,
    description: data?.stellenangebotsBeschreibung,
    keywords:
      'jobs, jobs in germany, germany, berlin, work in germany, trainee, in germany',
  }
}

export default async function JobsDetails(props: Props) {
  const searchParams = await props.searchParams;

  const {
    ref
  } = searchParams;

  const params = await props.params;

  const {
    slug,
    locale
  } = params;

  const data = await fetch(
    `https://rest.arbeitsagentur.de/jobboerse/jobsuche-service/pc/v3/jobdetails/${btoa(ref)}`,
    { headers: { 'X-API-Key': 'jobboerse-jobsuche' } },
  ).then(res => res.json())

  const tabs = [
    {
      icon: require('@/assets/images/icons/light/organisation.svg'),
      darkIcon: require('@/assets/images/icons/dark/organisation.svg'),
      text: data?.firma,
    },
    data?.stellenlokationen && {
      icon: require('@/assets/images/icons/light/location.svg'),
      darkIcon: require('@/assets/images/icons/dark/location.svg'),
      text: data?.stellenlokationen[0]?.adresse.ort,
    },
    data?.gehalt
      ? {
          icon: require('@/assets/images/icons/light/money.svg'),
          darkIcon: require('@/assets/images/icons/dark/money.svg'),
          text: data?.gehalt,
        }
      : undefined,
    {
      icon: require('@/assets/images/icons/light/experience.svg'),
      darkIcon: require('@/assets/images/icons/dark/experience.svg'),
      text: data?.branche || data?.branchengruppe || data?.hauptberuf,
    },
    {
      icon: require('@/assets/images/icons/light/job-type.svg'),
      darkIcon: require('@/assets/images/icons/dark/job-type.svg'),
      text: data?.stellenangebotsart,
    },
  ]
  return (
    <div className='my-12 mt-24'>
      <div className='container text-mainText dark:text-textdark'>
        <div className='flex items-center gap-3 text-xxm'>
          <GoBackButton locale={locale} />
          <Heading heading={data?.stellenangebotsTitel || ref} />
        </div>
        <div className='my-2 mb-12 flex flex-wrap gap-3'>
          {React.Children.toArray(
            tabs.map(
              tab =>
                tab !== undefined && (
                  <div className='flex items-center gap-1'>
                    <Image
                      className='flex w-[1.5vw] dark:hidden sm:w-[6vw]'
                      alt=''
                      src={tab.icon}
                    />
                    <Image
                      className='hidden w-[1.5vw] dark:flex sm:w-[6vw]'
                      alt=''
                      src={tab.darkIcon}
                    />
                    <p className='text-sm text-mainText dark:text-textdark'>
                      {tab.text}
                    </p>
                  </div>
                ),
            ),
          )}
        </div>
        <div className='prose my-5 text-mainText prose-p:mt-3 prose-p:font-bold prose-p:text-secondary prose-a:text-success dark:text-textdark dark:prose-p:text-main'>
          <Markdown>{data?.stellenangebotsBeschreibung}</Markdown>
        </div>
      </div>
    </div>
  )
}
