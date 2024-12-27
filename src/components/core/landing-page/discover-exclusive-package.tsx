import * as React from 'react'
import { getScopedI18n } from '@/utils/locales/server'
import { Button, Heading, Map } from '@/components'
import Image from 'next/image'
import { cn } from '@/utils'
import Link from 'next/link'

export async function DiscoverExclusivePackage() {
  const t = await getScopedI18n('packages')

  const packages = [
    {
      title: t('package-1-title'),
      text: t('package-1-text'),
      link: '/profile/jobs?tab=jobs',
      services: [
        '<span style="color: #ff0000">Time-limited</span> access to a wide range of job listings',
        'Direct application to open positions',
      ],
    },
    {
      recommended: true,
      link: '/profile/application',
      title: t('package-2-title'),
      text: t('package-2-text'),
      services: [
        '<span style="color: #ffcc00">Unlimited</span> access to a wide range of job listings',
        'Complete application management',
        'Arrangement of job interviews with employers',
        'Interview preparation',
        'Support with contract negotiation',
        'Access to online German courses through our platform',
      ],
    },
  ]
  return (
    <div className='my-16 flex flex-col items-center justify-center'>
      <div className='w-[70%] text-center text-4xl sm:w-full sm:text-xxm'>
        <Heading heading={t('title')} />
      </div>

      <div className='mt-12 flex w-full justify-evenly sm:mt-6 sm:flex-col sm:items-center sm:gap-5'>
        <Map
          items={packages}
          render={(item, index) => (
            <div
              className={cn(
                'flex w-[35%] flex-col justify-between gap-5 rounded-xl p-2 py-12 font-bold text-secondary shadow-lg shadow-mainText dark:text-textdark sm:w-[90%] sm:text-sm',
                item.recommended ? 'bg-secondary text-white' : '',
              )}>
              <div className='flex flex-col justify-between gap-5'>
                <div
                  className={cn(
                    'fot-bold text-center text-secondary dark:text-main',
                    item.recommended ? 'text-white' : '',
                  )}>
                  <span className='text-xxm font-bold'>{item.title}</span>
                </div>
                <div className='my-3 flex w-full items-center justify-center'>
                  <div
                    className={cn(
                      'w-[70%] text-center font-semibold text-secondary dark:text-textdark',
                      item.recommended ? 'text-main' : '',
                    )}>
                    {item.text}
                  </div>
                </div>
                <Map
                  items={item.services}
                  render={el => (
                    <div className='flex items-start'>
                      <Image
                        alt='checkbox'
                        className='icon mr-1'
                        src={
                          index === 0
                            ? require('@/assets/images/icons/success-checkmark-blue.svg')
                            : require('@/assets/images/icons/success-checkmark.svg')
                        }
                      />
                      <div
                        className=''
                        dangerouslySetInnerHTML={{ __html: el }}
                      />
                    </div>
                  )}
                />
              </div>
              <div className='mt-6 flex items-center justify-center'>
                <Link className='sm:w-fulls w-[50%]' href={item.link}>
                  <Button
                    theme={item.recommended ? 'primary' : 'secondary'}
                    text={t('apply')}
                  />
                </Link>
              </div>
            </div>
          )}
        />
      </div>
    </div>
  )
}
