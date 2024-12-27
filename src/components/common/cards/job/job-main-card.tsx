'use client'

import { formatJobTitle, truncateString } from '@/utils'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

type Props = {
  item:
    | {
        beruf?: string
        titel?: string
        refnr?: string
        arbeitsort?: {
          region: string
          land: string
        }
        arbeitgeber?: string
        aktuelleVeroeffentlichungsdatum?: string
        modifikationsTimestamp?: string
        eintrittsdatum?: string
        kundennummerHash?: string
      }
    | any
}

export function JobMainCard({ item }: Props) {
  const tabs = [
    {
      icon: require('@/assets/images/icons/light/organisation.svg'),
      darkIcon: require('@/assets/images/icons/dark/organisation.svg'),
      text: truncateString(item?.arbeitgeber, 10),
    },
    {
      icon: require('@/assets/images/icons/light/location.svg'),
      darkIcon: require('@/assets/images/icons/dark/location.svg'),
      text: truncateString(item?.arbeitsort?.ort, 10),
    },
    {
      icon: require('@/assets/images/icons/light/time.svg'),
      darkIcon: require('@/assets/images/icons/dark/time.svg'),
      text: item?.eintrittsdatum,
    },
  ]

  const [favourite, setFavourite] = useState<boolean>(false)

  const { theme } = useTheme()

  return (
    <div className='relative m-0.5 rounded-xl bg-backgroundSecondary p-3 shadow-md dark:bg-backgroundDark dark:shadow-black sm:p-2'>
      <div className='flex gap-2 sm:flex-col'>
        <Link
          className=''
          href={`/profile/jobs/${formatJobTitle(item?.titel || item?.refnr)}?ref=${item?.refnr}`}>
          <Image
            width={300}
            height={200}
            className='aspect-square w-24 rounded bg-[] bg-white object-contain'
            src={`https://rest.arbeitsagentur.de/vermittlung/ag-darstellung-service/ct/v1/arbeitgeberlogo/${item?.kundennummerHash}`}
            alt=''
          />
        </Link>
        <div className='flex w-full flex-col justify-between'>
          {/*
            <Link
            href={`/profile/jobs.ts/${formatJobTitle(item?.titel || item?.refnr)}?ref=${item?.refnr}`}
            className='cursor-pointer font-bold text-mainText hover:underline dark:text-textdark'>
            {translateToDeutsch(item?.titel, locale).then(text => text) ||
              '(No title) ' + item?.refnr}
          </Link>

            * */}
          <Link
            href={`/profile/jobs/${formatJobTitle(item?.titel || item?.refnr)}?ref=${item?.refnr}`}
            className='cursor-pointer font-bold text-mainText hover:underline dark:text-textdark'>
            {item?.titel
              ? truncateString(item?.titel, 40)
              : '(No title) ' + item?.refnr}
          </Link>
          <div className='my-2 flex flex-wrap gap-3'>
            {React.Children.toArray(
              tabs.map(tab => (
                <div className='flex items-center gap-1'>
                  <Image
                    className='w-[1.5vw] sm:w-[6vw]'
                    alt=''
                    src={theme === 'dark' ? tab.darkIcon : tab.icon}
                  />
                  <p className='text-sm text-mainText dark:text-textdark'>
                    {tab.text}
                  </p>
                </div>
              )),
            )}
          </div>
          <div className='text-text dark:text-textdark'>
            {truncateString(item?.titel || '', 45)}
          </div>
          <div className='flex items-center justify-between'>
            <p className='text-xs text-text'>{item?.eintrittsdatum}</p>
            <button onClick={() => setFavourite(prev => !prev)}>
              <Image
                alt=''
                className='absolute bottom-2 right-2 w-7'
                src={
                  favourite
                    ? theme === 'dark'
                      ? require('@/assets/images/icons/dark/favourite-fill.svg')
                      : require('@/assets/images/icons/light/favourite-fill.svg')
                    : theme === 'dark'
                      ? require('@/assets/images/icons/dark/favourite.svg')
                      : require('@/assets/images/icons/light/favourite.svg')
                }
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
