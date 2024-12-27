import * as React from 'react'
import { getScopedI18n } from '@/utils/locales/server'
import { Heading } from '@/components'
import Image from 'next/image'

export default async function Page() {
  const t = await getScopedI18n('interview')

  return (
    <div className='mt-6 flex flex-col items-center justify-center text-mainText dark:text-textdark'>
      <div className='mt-6 w-full rounded-lg bg-background p-4 dark:bg-backgroundSecondaryDark'>
        <div className='text-xxm'>
          <Heading
            className='text-center'
            heading={t('interview-note-title')}
          />
        </div>
        <div
          className='prose mt-6 flex min-w-full flex-col gap-8 text-center text-mainText prose-strong:text-xl prose-strong:font-bold prose-strong:text-mainText'
          dangerouslySetInnerHTML={{ __html: t('interview-note-content') }}
        />
      </div>
    </div>
  )
}
