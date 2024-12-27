import Image from 'next/image'
import React from 'react'
import { getScopedI18n } from '@/utils/locales/server'

export async function WhatMakesUsSpecial() {
  const t = await getScopedI18n('what-make-us-special')

  const steps = [
    {
      icon: '/steps/no_hidden_costs.png',
      text: t('header-1'),
      desc: t('text-1'),
    },
    {
      icon: '/steps/fully_digital.png',
      text: t('header-2'),
      desc: t('text-2'),
    },
    {
      icon: '/steps/practical_and_efficient.png',
      text: t('header-3'),
      desc: t('text-3'),
    },
  ]
  return (
    <div className='no-scrollbar container overflow-x-scroll py-12'>
      <h2 className='mb-5 text-center text-4xl font-bold text-secondary dark:text-main'>
        {t('title')}
      </h2>
      <div className='flex w-full justify-center'>
        <div className='mt-6 flex w-full items-start justify-between sm:w-full sm:flex-col sm:gap-5'>
          {React.Children.toArray(
            steps.map(item => (
              <div className='flex w-[32%] flex-col items-center justify-center gap-3 sm:w-full'>
                <Image
                  alt={item.text}
                  src={item.icon}
                  width={200}
                  height={200}
                  className='aspect-square w-[70%] rounded-full object-cover'
                />
                <div className='flex items-center justify-center'>
                  <div className='w-fit rounded-full bg-secondary px-4 py-2 text-center font-bold text-white'>
                    {item.text}
                  </div>
                </div>
                {item.desc && (
                  <p
                    className='text-center text-mainText prose-a:text-[#4385ff] prose-a:underline dark:text-textdark'
                    dangerouslySetInnerHTML={{ __html: item.desc }}
                  />
                )}
              </div>
            )),
          )}
        </div>
      </div>
    </div>
  )
}
