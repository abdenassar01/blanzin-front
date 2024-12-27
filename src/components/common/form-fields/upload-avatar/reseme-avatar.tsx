'use client'

import React, { ReactNode, useState } from 'react'
import { Loader, TranslatedText } from '@/components'
import { Control, useController } from 'react-hook-form'
import Image from 'next/image'
import { cn } from '@/utils'
import { uploadFile } from '@/services/core/api/storage'
import { toast } from 'react-toastify'
import { useScopedI18n } from '@/utils/locales/client'

type Props = {
  control: Control<any>
  name: string
  label?: string
  defaultValue?: string
  children?: ReactNode
  className?: string
  imgClassName?: string
}

export function UploadAvatarResume({
  control,
  name,
  defaultValue,
  className,
  imgClassName,
  label,
}: Props) {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({ control, name, defaultValue })

  const [loading, setLoading] = useState<boolean>(false)

  const t = useScopedI18n('notification')

  return (
    <div>
      <div className='w-fit '>
        <div className='mb-4 sm:mb-0'>
          <div className='font-bold text-secondary dark:text-main sm:text-sm'>
            {label || 'Personal photo'}
          </div>
        </div>
        <label
          htmlFor={name}
          className={cn(
            'relative flex cursor-pointer items-center justify-center',
            className,
          )}>
          {loading ? (
            <div className='aspect-[3.2/4] w-40 rounded'>
              <Loader />
            </div>
          ) : (
            <Image
              width={100}
              height={100}
              alt=''
              className={cn(
                'aspect-[3.2/4] w-40 rounded',
                imgClassName,
                value ? 'border-2 border-success' : '',
              )}
              src={value || require('@/assets/images/icons/avatar.png')}
            />
          )}

          <input
            id={name}
            onChange={async e => {
              setLoading(true)
              if (!e.currentTarget.files) {
                toast.error(t('please-select-image'))
                setLoading(false)
                return
              }
              const formData = new FormData()
              formData.append('file', e.currentTarget.files[0])
              try {
                const res = await uploadFile(formData)
                console.log('RESULT: ', res)
                if (res.status !== 200) {
                  toast.error(res.message)
                }
                onChange(res.data)
                setLoading(false)
              } catch (e) {
                console.error('ERROR: ', e)
                setLoading(false)
              }
            }}
            type='file'
            className='hidden'
          />
        </label>
      </div>
      <TranslatedText
        tranlationKey={error?.message || ''}
        className='h-[15px] pl-1 text-[10px] text-error'
      />
    </div>
  )
}
