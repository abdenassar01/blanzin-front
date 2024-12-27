import { Heading } from '@/components'
import { getScopedI18n } from '@/utils/locales/server'
import React from 'react'
import { AccountForm } from './_account-form'
import { UpdatePassword } from '@/components/core/profile/update-password'

export default async function AccountPage() {
  const t = await getScopedI18n('resume')
  return (
    <div className=''>
      <div className='text-xxm'>
        <Heading heading={t('personal-infos')} />
      </div>
      <div className=''>
        <AccountForm />
        <UpdatePassword />
      </div>
    </div>
  )
}
