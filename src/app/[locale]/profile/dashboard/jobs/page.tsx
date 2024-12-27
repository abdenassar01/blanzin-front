import * as React from 'react'
import { getScopedI18n } from '@/utils/locales/server'
import { Heading, Map } from '@/components'

const jobs = [
  {
    title: 'Job title',
    description: 'Company description',
    status: 'AWAITING_INTERVIEW',
  },
  {
    title: 'Job title',
    description: 'Company description',
    status: 'AWAITING_DECISION',
  },
  {
    title: 'Job title',
    description: 'Company description',
    status: 'ACCEPTED',
  },
  {
    title: 'Job title',
    description: 'Company description',
    status: 'REJECTED',
  },
]

export default async function Page() {
  const t = await getScopedI18n('dashboard')

  function getStatusColor(status: string) {
    switch (status) {
      case 'AWAITING_INTERVIEW':
        return { bg: '#ffcc00', text: '#000080' }
      case 'AWAITING_DECISION':
        return { bg: '#000080', text: '#ffcc00' }
      case 'ACCEPTED':
        return { bg: '#1FB432', text: '#000080' }
      case 'REJECTED':
        return { bg: '#B00020', text: '#000080' }
    }
  }

  return (
    <div>
      <div className='flex justify-between text-xxm'>
        <Heading heading={t('application')} />
      </div>
      <div className='mt-12 flex flex-col gap-2'>
        <Map
          items={jobs}
          render={item => (
            <div className='flex items-center  justify-between rounded-lg bg-backgroundSecondary p-3 py-4 text-secondary shadow-lg dark:border-main dark:bg-backgroundDark dark:text-textdark'>
              <div className=''>
                <div className='text-xl font-bold'>{item.title}</div>
                <div className=''>{item.description}</div>
              </div>
              <div className='flex flex-col justify-end gap-2'>
                <div className=' '>
                  <div
                    style={{
                      color: getStatusColor(item.status)?.text,
                      backgroundColor: getStatusColor(item.status)?.bg,
                    }}
                    className='w-[200px] rounded-lg py-3 text-center font-medium capitalize'>
                    {item.status.replace('_', ' ').toLowerCase()}
                  </div>
                </div>
              </div>
            </div>
          )}
        />
      </div>
    </div>
  )
}
