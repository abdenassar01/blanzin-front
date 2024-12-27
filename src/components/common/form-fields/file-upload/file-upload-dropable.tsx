'use client'

import { cn } from '@/utils'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import React, { InputHTMLAttributes, useCallback, useState } from 'react'
import { Control, FieldValue, useController } from 'react-hook-form'
import { FileWithPath, useDropzone } from 'react-dropzone'
import { toast } from 'react-toastify'
import { useScopedI18n } from '@/utils/locales/client'
import { uploadFile } from '@/services'
import { Loader } from '../../loader'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  control: Control<FieldValue<any>>
  name: string
  label: string
}

export function FileUploadDropable({
  control,
  name,
  label,
  className,
  placeholder,
  ...props
}: Props) {
  const { theme } = useTheme()

  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    onChange(acceptedFiles[0]?.path)
  }, [])

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      onDrop,
      accept: {
        'application/pdf': ['.pdf'],
      },
      onDropRejected(fileRejections, event) {
        alert('only pdfs are allowed')
      },
    })

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
    <div className='w-full cursor-pointer sm:w-[47%]'>
      <h3 className='mb-1 text-sm text-secondary dark:text-main'>{label}</h3>
      <label
        htmlFor={name}
        className={cn(
          'flex aspect-[3/4] w-full cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border-[2px] p-2 ',
          value
            ? 'border-solid border-secondary dark:border-main'
            : 'border-dashed',
          isDragReject
            ? 'border-error'
            : isDragActive
              ? 'border-success'
              : 'border-border',

          className,
        )}
        {...getRootProps()}>
        {loading ? (
          <div className=''>
            <Loader />
          </div>
        ) : (
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
            {...getInputProps()}
            {...props}
          />
        )}
        <div className='max-w-[95%] text-center text-secondary dark:text-main'>
          {value || placeholder}
        </div>
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
      <div className='text-xs text-error'>{error?.message}</div>
    </div>
  )
}
