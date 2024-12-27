'use client'

import * as React from 'react'
import { Control, useFieldArray } from 'react-hook-form'
import { cn } from '@/utils'
import { Button, Map } from '@/components'
import { useState } from 'react'
import Image from 'next/image'
import { useCurrentLocale, useScopedI18n } from '@/utils/locales/client'

type Props<T> = {
  control: Control<any>
  items?: T[]
  extractDisplayString: (item: T) => string
  extractLanguage: (item: T) => string
  name: string
  label?: string
  className?: string
  labelClassName?: string
}

const levels = [
  {
    label: 'A1',
    extra: {
      en: 'Beginner',
      fr: 'Débutant',
      ar: 'مبتدئ',
    },
  },
  {
    label: 'A2',
    extra: {
      en: 'Elementary',
      fr: 'Élémentaire',
      ar: 'ابتدائي',
    },
  },
  {
    label: 'B2',
    extra: {
      en: 'Intermediate',
      fr: 'Intermédiaire',
      ar: 'متوسط',
    },
  },
  {
    label: 'B1',
    extra: {
      en: 'Upper Intermediate',
      fr: 'Intermédiaire supérieur',
      ar: 'فوق المتوسط',
    },
  },
  {
    label: 'C1',
    extra: {
      en: 'Advanced',
      fr: 'Avancé',
      ar: 'متقدم',
    },
  },
  {
    label: 'C2',
    extra: {
      en: 'Proficient',
      fr: 'Maîtrise de la langue',
      ar: 'متقن',
    },
  },
]

export function LanguagesField<T>({
  control,
  name,
  label,
  className,
  labelClassName,
  items,
  extractDisplayString,
  extractLanguage,
}: Props<T>) {
  const { append, remove } = useFieldArray({ control, name })

  const [languages, setLanguages] = useState<string[]>([
    'Deutsch',
    'English',
    'French',
    'Arabic',
  ])

  const [selectedLanguage, setSelectedLanguage] = useState<string>('')
  const [selectedLevel, setLevel] = useState<string>('')

  const [languagesDropDown, setLanguagesDropDown] = useState<boolean>(false)
  const [levelDropDown, setLevelDropDown] = useState<boolean>(false)

  const t = useScopedI18n('forms')
  const tBtn = useScopedI18n('button')
  const locale = useCurrentLocale()

  return (
    <div className={cn('relative flex w-[100%] flex-col', className)}>
      <label
        htmlFor={name}
        className={cn(
          'text-sm font-bold text-secondary dark:text-main',
          labelClassName,
        )}>
        {label}
      </label>
      <div className='my-3 flex flex-wrap items-center gap-2'>
        {items && (
          <Map
            items={items}
            render={(item, index) => (
              <div
                key={`language-item-${extractDisplayString(item)}`}
                className='flex w-fit items-center justify-between gap-4 rounded-xl bg-border p-2 py-3'>
                <div className=''>{extractDisplayString(item)}</div>
                <Image
                  onClick={() => {
                    setLanguages([...languages, extractLanguage(item)])
                    remove(index)
                  }}
                  src={require('@/assets/images/icons/dark/close.svg')}
                  alt='remove language'
                  className='w-8 rounded-full bg-backgroundSecondary p-2'
                />
              </div>
            )}
          />
        )}
      </div>

      <div className='flex gap-2 sm:flex-col'>
        <div className='relative w-[35%] sm:w-full'>
          <div
            onClick={() => setLanguagesDropDown(prev => !prev)}
            className='flex justify-between rounded-xl bg-backgroundSecondary p-4 px-5 dark:bg-backgroundDark'>
            <div className=''>{selectedLanguage || t('select-lang')}</div>
            <Image
              src={require('@/assets/images/icons/light/next-arrow.svg')}
              alt='arrow down'
              className='w-6 -rotate-90'
            />
          </div>
          <div
            className={cn(
              'isolate z-50 mt-2 w-full cursor-pointer overflow-x-hidden rounded-xl bg-backgroundSecondary shadow-md transition-all ease-out dark:bg-backgroundSecondaryDark dark:shadow-[#dadadb21] ',
              languagesDropDown ? 'h-[150px]' : 'h-0',
            )}>
            <Map
              items={languages}
              render={lang => (
                <div
                  key={`language-field-lang-${lang}`}
                  onClick={() => {
                    setSelectedLanguage(lang)
                    setLanguagesDropDown(false)
                  }}
                  className='cursor-pointer p-3 hover:bg-border'>
                  {lang}
                </div>
              )}
            />
          </div>
        </div>
        <div className='relative w-[35%] sm:w-full'>
          <div
            onClick={() => setLevelDropDown(prev => !prev)}
            className='flex justify-between rounded-xl bg-backgroundSecondary p-4 px-5 dark:bg-backgroundDark'>
            <div className=''>{selectedLevel || t('select-level')}</div>
            <Image
              src={require('@/assets/images/icons/light/next-arrow.svg')}
              alt='arrow down'
              className='w-6 -rotate-90'
            />
          </div>
          <div
            className={cn(
              'isolate z-50 mt-2 w-full cursor-pointer overflow-x-hidden rounded-xl bg-backgroundSecondary shadow-md transition-all ease-out dark:bg-backgroundSecondaryDark dark:shadow-[#dadadb21] ',
              levelDropDown ? 'h-[150px]' : 'h-0',
            )}>
            <Map
              items={levels}
              render={level => (
                <div
                  key={`language-field-level-${level.label}`}
                  onClick={() => {
                    setLevel(`${level.label} (${level.extra[locale]})`)
                    setLevelDropDown(false)
                  }}
                  className='cursor-pointer p-3 hover:bg-border'>
                  {`${level.label} (${level.extra[locale]})`}
                </div>
              )}
            />
          </div>
        </div>
        <div className=''>
          <Button
            theme='secondary'
            onClick={() => {
              if (selectedLanguage && selectedLevel) {
                append(`${selectedLanguage} - ${selectedLevel}`)
                setLanguages(prev =>
                  prev.filter(item => item !== selectedLanguage),
                )
                setLevel('')
                setSelectedLanguage('')
              }
            }}
            text={tBtn('add')}
          />
        </div>
      </div>
    </div>
  )
}
