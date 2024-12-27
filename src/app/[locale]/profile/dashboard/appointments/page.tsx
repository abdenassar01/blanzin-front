import * as React from 'react'
import { getScopedI18n } from '@/utils/locales/server'
import { AppointmentFilter, Button, Heading, Map } from '@/components'

const jobs = [
  { title: 'Job title', description: 'Company description' },
  { title: 'Job title', description: 'Company description' },
  { title: 'Job title', description: 'Company description' },
  { title: 'Job title', description: 'Company description' },
]

const coaches = ['Coach name 1', 'Coach name 2', 'Coach name 3']

export default async function Page(
  props: {
    searchParams: Promise<{ tab?: string }>
  }
) {
  const searchParams = await props.searchParams;

  const {
    tab
  } = searchParams;

  const t = await getScopedI18n('appointments')

  return (
    <div>
      <div className='flex justify-between text-xxm'>
        <Heading
          heading={tab === 'coaching' ? t('coaching') : t('interviews')}
        />
        <div className=''>
          <AppointmentFilter />
        </div>
      </div>
      <div className='mt-12 flex flex-col gap-4'>
        {tab === 'coaching' ? (
          <Map
            items={coaches}
            render={item => (
              <div className='flex items-center justify-between rounded-lg bg-backgroundSecondary p-3 py-4 text-secondary shadow-lg dark:border-main dark:bg-backgroundDark dark:text-textdark'>
                <div className=''>
                  <div className='text-xl font-bold'>{item}</div>
                </div>
                <div className='flex items-center gap-2 '>
                  <div className='text-center font-bold'>
                    <p>On 12-04-2024</p>
                    <p>12:00</p>
                  </div>
                  <div className=''>
                    <Button text={t('action')} />
                  </div>
                </div>
              </div>
            )}
          />
        ) : (
          <Map
            items={jobs}
            render={item => (
              <div className='flex items-center justify-between rounded-lg bg-backgroundSecondary p-3 py-4 text-secondary shadow-lg dark:border-main dark:bg-backgroundDark dark:text-textdark'>
                <div className=''>
                  <div className='text-xl font-bold'>{item.title}</div>
                  <div className=''>{item.description}</div>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='text-center font-bold'>
                    <p>On 12-04-2024</p>
                    <p>12:00</p>
                  </div>
                  <div className=''>
                    <Button text={t('action')} />
                  </div>
                </div>
              </div>
            )}
          />
        )}
      </div>
    </div>
  )
}
