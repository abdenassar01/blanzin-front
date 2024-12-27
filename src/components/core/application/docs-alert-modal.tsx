'use client'

import { Modal } from '@/components'
import { useScopedI18n } from '@/utils/locales/client'
import Image from 'next/image'
import React, { useState } from 'react'

export function DocsAlertModal() {
  const [open, setOpen] = useState<boolean>(true)
  const t = useScopedI18n('notification')
  return (
    <Modal visible={open} setVisible={setOpen}>
      <div className='flex flex-col items-center justify-center gap-1 pb-12 sm:pb-5'>
        <Image
          className='my-10 sm:my-4'
          alt='Danger'
          src={require('@/assets/images/icons/danger.svg')}
        />
        <div className='text-center text-xbase font-bold text-secondary dark:text-textdark sm:text-base sm:font-normal'>
          {t('docs-shouldbe-en-gr')}
        </div>
      </div>
    </Modal>
  )
}
