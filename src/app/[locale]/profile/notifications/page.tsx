import * as React from 'react'
import { Heading, Map } from '@/components'
import { getScopedI18n } from '@/utils/locales/server'

export default async function Page() {
  const t = await getScopedI18n('notification')

  return (
    <div className='flex flex-col gap-3'>
      <div className='text-xxm'>
        <Heading heading={t('header')} />
      </div>
      <Map
        items={[1, 2, 3, 4, 5, 6]}
        render={() => (
          <div className='w-full rounded-lg bg-backgroundSecondary p-3 shadow-lg dark:bg-backgroundDark'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum in
            iste labore lore Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Harum in iste labore lore Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Harum in iste labore lore
          </div>
        )}
      />
    </div>
  )
}
