import * as React from 'react'
import {
  Button,
  CoursesCallToActionSection,
  CoursesOverview,
  CoursesPackagesSection,
  Heading,
  Map,
} from '@/components'
import { getScopedI18n } from '@/utils/locales/server'
import Image from 'next/image'
import Link from 'next/link'
import { auth } from '@/auth'

export default async function Page() {
  const t = await getScopedI18n('courses')
  const session = await auth()

  const proLanguages = [
    'Hotel & Tourism',
    'Medicine & care',
    'Logistics',
    'Business German',
    'Automobile Mechatronic Engineers',
    'Food Production',
    'Franchise Catering',
    'Cleaning Services',
  ]

  const levels = [
    { image: '/courses/levels/A1.webp', isLast: false },
    { image: '/courses/levels/A2.webp', isLast: false },
    { image: '/courses/levels/B1.webp', isLast: false },
    { image: '/courses/levels/B2.webp', isLast: false },
    { image: '/courses/levels/C1.webp', isLast: true },
  ]

  return (
    <div className=''>
      <div className='mt-6 flex items-center justify-center text-center text-2xl'>
        <Heading
          heading={t('landing-page-heading')}
          className='whitespace-pre-line'
        />
      </div>
      <div className='mt-6 flex items-center justify-between px-3'>
        <div className='w-[50%]'>
          <Image
            src='/courses/main-illustration.png'
            alt=''
            width={500}
            height={500}
            className='w-full rounded-xl'
          />
          <div className='text-bold my-8 text-center text-xxl text-mainText dark:text-textdark'>
            {t('secondary-text')}
          </div>
          <div className=' flex w-full justify-center'>
            <div className='w-[30%]'>
              <Link className='self-center' href='/courses'>
                <Button>{t('action')}</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className='w-[50%] px-6 text-center'>
          <div className='text-xl text-secondary dark:text-textdark'>
            {t('main-text')}
          </div>
          <div className='my-10 text-xbase font-bold text-secondary dark:text-textdark'>
            {t('levels-heading')}
          </div>
          <div className='flex items-center justify-center gap-3'>
            <Map
              items={levels}
              render={item => (
                <>
                  <Image
                    src={item.image}
                    alt=''
                    className='w-16'
                    height={70}
                    width={70}
                  />
                  {!item.isLast && (
                    <Image
                      src='/courses/levels/plus.webp'
                      alt=''
                      height={70}
                      width={70}
                      className='w-6'
                    />
                  )}
                </>
              )}
            />
          </div>
          <div className='my-10 text-xbase font-bold text-secondary dark:text-textdark'>
            {t('pro-lang-heading')}
          </div>
          <div className='flex flex-wrap gap-2'>
            <Map
              items={proLanguages}
              render={item => (
                <div className='rounded-full bg-secondary p-3 px-6 text-white dark:bg-main dark:text-backgroundDark'>
                  {item}
                </div>
              )}
            />
          </div>
        </div>
      </div>
      <CoursesCallToActionSection />
      <CoursesOverview />
    </div>
  )
}
