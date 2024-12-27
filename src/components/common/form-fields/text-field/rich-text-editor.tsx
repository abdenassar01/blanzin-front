'use client'

import React from 'react'
import { Editor } from 'react-draft-wysiwyg'
import { Control, useController } from 'react-hook-form'

import { cn } from '@/utils'
import { useScopedI18n } from '@/utils/locales/client'
import { FormConrolPopoverExplaination } from '../form-control-popover-explaination'

type Props = {
  control: Control<any>
  name: string
  label: string
  labelClassName?: string
  className?: string
  placeholder?: string
  popoverText?: string
  max?: number
}

export function RichTextEditor({
  name,
  control,
  label,
  className,
  labelClassName,
  placeholder,
  popoverText,
  max,
}: Props) {
  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController({
    control,
    name,
  })

  const hashConfig = {
    trigger: '#',
    separator: ' ',
  }

  const t = useScopedI18n('forms')

  return (
    <div>
      <div
        className={cn(
          'group relative w-[100%] rounded-xl bg-backgroundSecondary pt-3 shadow-xl',
          className,
        )}>
        <div className='flex'>
          <label
            htmlFor={name}
            className={cn(
              'text-sm font-bold text-secondary dark:text-main',
              labelClassName,
            )}>
            {label}
          </label>
          {popoverText && <FormConrolPopoverExplaination text={popoverText} />}
        </div>
        <Editor
          toolbar={{
            options: ['inline', 'textAlign'],
            inline: {
              bold: { visible: true },
              italic: { visible: true },
              underline: { visible: true },
              strikeThrough: { visible: false },
            },
          }}
          toolbarClassName='bg-backgroundSecondary mb-4 shadow-xl mb-0 rounded-xl flex items-center'
          wrapperClassName=''
          editorClassName='h-[143px] mt-1 overflow-y-scroll px-[24px] py-[16px] rounded-xl'
          placeholder={placeholder}
          editorState={value}
          onBlur={onBlur}
          onEditorStateChange={e => onChange(e)}
        />
        {error && (
          <span className='text-xxs text-error sm:text-mb-xs'>
            {error?.message}
          </span>
        )}
      </div>
      <div className='mt-2 text-xs text-secondary'>
        {t('max', { max: max || 2500, left: 2500 })}
      </div>
    </div>
  )
}
