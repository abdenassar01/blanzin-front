'use client'

import React, { InputHTMLAttributes, useState } from 'react'
import { Control, FieldValue, useController } from 'react-hook-form'
import { TranslatedHeading, TranslatedText } from '../..'
import { cn } from '@/utils'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useScopedI18n } from '@/utils/locales/client'
import { toast } from 'react-toastify'
import { addNewContract, uploadFile } from '@/services'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  control: Control<FieldValue<any>>
  name: string
  label: string
}

export function FileUpload({
  label,
  control,
  name,
  className,
  placeholder,
  ...props
}: Props) {
  const { theme } = useTheme()

  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name,
    control,
  })

  const [loading, setLoading] = useState<boolean>(false)

  const t = useScopedI18n('notification')
  const errorsT = useScopedI18n('errors')

  return (
    <div className='cursor-pointer'>
      <TranslatedHeading
        className='mb-1 text-sm text-secondary dark:text-main'
        tranlationKey={label}
      />
      <label
        htmlFor={name}
        className={cn(
          'flex cursor-pointer items-center justify-between gap-4 rounded-xl bg-backgroundSecondary p-2 dark:bg-backgroundSecondaryDark',
          className,
        )}>
        <input
          accept=''
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
              const data = await addNewContract({ url: res.data })
              onChange(data.data)
              setLoading(false)
            } catch (e) {
              console.error('ERROR: ', e)
              setLoading(false)
            }
          }}
          type='file'
          className='hidden'
          {...props}
        />
        <TranslatedText
          className='max-w-[90%] text-secondary dark:text-main'
          tranlationKey={value?.url || placeholder}
        />
        <Image
          alt=''
          className='h-[30px] w-[30px]'
          src={
            theme === 'dark'
              ? require('@/assets/images/icons/dark/upload.svg')
              : require('@/assets/images/icons/light/upload.svg')
          }
        />
      </label>
      <div className='text-xs text-error'>
        {
          // @ts-ignore
          error?.message ?? errorsT(error?.message)
        }
      </div>
    </div>
  )
}
