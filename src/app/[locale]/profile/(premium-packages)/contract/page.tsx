import * as React from 'react'
import { getScopedI18n } from '@/utils/locales/server'
import { Heading } from '@/components'

export default async function Page() {
  const t = await getScopedI18n('contract')

  return (
    <div className='flex h-full flex-col items-center gap-10 text-mainText'>
      <div className='text-xxm'>
        <Heading className='text-center' heading={t('contract-note-header')} />
      </div>
      <p className='text-center'>{t('contract-note')}</p>
    </div>
  )
}
