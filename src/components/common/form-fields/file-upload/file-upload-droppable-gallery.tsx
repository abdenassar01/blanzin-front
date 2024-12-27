'use client'

import { addNewApplicationDocument, uploadFile } from '@/services'
import { cn } from '@/utils'
import { useScopedI18n } from '@/utils/locales/client'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import React, { InputHTMLAttributes, useState } from 'react'
import { FileWithPath, useDropzone } from 'react-dropzone'
import { Control, FieldValue, useFieldArray } from 'react-hook-form'
import { toast } from 'react-toastify'
import { Loader } from '../../loader'
import { PdfViewer } from '@/components/core'
import { DocType } from '@/services/core/api/application/docs/types'
import { FormConrolPopoverExplaination } from '../form-control-popover-explaination'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  control: Control<FieldValue<any>>
  name: string
  label: string
  items: string[]
  docType: DocType
  popoverText?: string
}

export function FileUploadDroppableGallery({
  control,
  name,
  label,
  className,
  items,
  docType,
  placeholder,
  popoverText,
  ...props
}: Props) {
  const { append, fields, remove } = useFieldArray({ name, control })
  const [loading, setLoading] = useState<boolean>(false)
  const t = useScopedI18n('notification')

  const { theme } = useTheme()

  const onDrop = async (acceptedFiles: FileWithPath[]) => {
    setLoading(true)
    if (!acceptedFiles) {
      toast.error(t('please-select-file'))
      setLoading(false)
      return
    }
    const formData = new FormData()
    formData.append('file', acceptedFiles[0])
    try {
      const res = await uploadFile(formData)
      if (res.status !== 200) {
        toast.error(res.message)
      }

      const doc = await addNewApplicationDocument({
        url: res.data,
        type: docType,
      })
      append({ ...doc.data, uploadedAt: new Date(doc?.data?.uploadedAt || 0) })
      setLoading(false)
    } catch (e) {
      console.error('ERROR: ', e)
    } finally {
      setLoading(false)
    }
  }

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      onDrop,

      accept: {
        'application/pdf': ['.pdf'],
      },
      onDropRejected(fileRejections, event) {
        alert('only pdfs are allowed')
        event.preventDefault()
      },
    })

  return (
    <div className='w-full'>
      <div className='flex'>
        <label
          htmlFor={name}
          className={cn('text-sm font-bold text-secondary dark:text-main')}>
          {label}
        </label>
        {popoverText && <FormConrolPopoverExplaination text={popoverText} />}
      </div>
      <div className='flex gap-[5%] gap-y-4'>
        {React.Children.toArray(
          items.map((field, index) => (
            <div
              key={`input-field-${field}-${index}`}
              className='relative w-[30%] cursor-pointer overflow-hidden sm:w-full'>
              <Image
                onClick={() => remove(index)}
                alt=''
                src={require('@/assets/images/icons/remove.svg')}
                className='absolute right-2 top-2 w-5'
              />
              <div
                className={cn(
                  'flex aspect-[3/3.2] w-full cursor-pointer flex-col items-center justify-center gap-4 overflow-y-hidden rounded-xl border-[2px] border-dashed border-border bg-backgroundSecondary p-2 dark:bg-backgroundDark',
                  className,
                )}>
                <>
                  <PdfViewer fileName={`${name}-${index + 1}`} file={field} />
                </>
              </div>
            </div>
          )),
        )}
        {loading ? (
          <div className='aspect-[3/3.2]  w-[200px]'>
            <Loader />
          </div>
        ) : (
          <div className='w-[30%] cursor-pointer sm:w-[49%]'>
            <label
              htmlFor={name + fields.length}
              className={cn(
                'flex aspect-[3/3.2] w-full cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border-[2px] border-dashed border-border bg-backgroundSecondary p-2 dark:bg-backgroundDark',
                isDragReject
                  ? 'border-error'
                  : isDragActive
                    ? 'border-success'
                    : '',
                className,
              )}
              {...getRootProps()}>
              <input
                id={name + fields.length}
                onChange={e => {
                  append(e.currentTarget.value)
                }}
                type='file'
                className='hidden'
                {...getInputProps()}
                {...props}
              />
              <div className='max-w-[95%] text-center text-secondary dark:text-main'>
                {placeholder}
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
          </div>
        )}
      </div>
    </div>
  )
}
