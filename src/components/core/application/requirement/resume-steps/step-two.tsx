import { DatePicker, DescriptionField, FieldText, Loader } from '@/components'
import { useScopedI18n } from '@/utils/locales/client'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Control, useFieldArray, useForm, useWatch } from 'react-hook-form'
import { CategoriesDropdown } from './components-data'
import {
  Experience,
  experienceSchema,
} from '@/services/core/api/application/resume/experiences/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { addNewExperience, searchDescriptionRecommendations } from '@/services'
import { toast } from 'react-toastify'
import { Resume } from '@/services/core/api/application/resume/types'

type Props = {
  control: Control<any>
}

export function StepTwo({ control }: Props) {
  const t = useScopedI18n('experience')
  const suggestionsT = useScopedI18n('suggestions')
  const resumeT = useScopedI18n('resume')

  const { append, remove } = useFieldArray({ name: 'experiences', control })
  const { experiences } = useWatch<Resume>({ control })
  const { theme } = useTheme()
  const [loading, setLoading] = useState<boolean>(false)

  const {
    control: innerControl,
    handleSubmit,
    reset,
    watch,
  } = useForm<Experience>({
    defaultValues: { description: [] },
    resolver: zodResolver(experienceSchema),
  })

  const onSubmit = async (data: Experience) => {
    setLoading(true)
    const res = await addNewExperience({ ...data })
    if (res.status !== 200) {
      toast.error(res.message)
      return
    }
    data.id = res.data.id
    append(data)
    reset()
    setLoading(false)
  }

  return (
    <>
      <div className='my-3 '>
        <div className='text-xm text-secondary dark:!text-main'>
          {resumeT('work-experience')}
        </div>
        <div className='text-text dark:text-textdark'>
          {resumeT('step-one-text')}
        </div>
      </div>
      <div className='no-scrollbar mb-7 overflow-y-scroll'>
        <div className='flex max-h-[120px] flex-wrap items-center justify-start gap-[2%] gap-y-4 overflow-y-scroll'>
          {React.Children.toArray(
            experiences?.map((item, index: number) => (
              <div
                key={`experience-item-${item.jobTitle}`}
                className='flex w-[32%] items-center justify-between gap-2 rounded-md border-[1px] border-border p-2 dark:bg-backgroundSecondaryDark sm:w-[49%]'>
                <div className='text-text dark:text-textdark'>
                  {item.jobTitle}
                </div>
                <button
                  onClick={() => {
                    if (confirm('Do you really want to remove')) {
                      remove(index)
                    }
                  }}>
                  <Image
                    alt=''
                    className='icon'
                    src={require('@/assets/images/icons/remove.svg')}
                  />
                </button>
              </div>
            )),
          )}
        </div>
        {loading && (
          <div className='mt-6 w-24'>
            <Loader />
          </div>
        )}
        <div className='mt-3 flex flex-wrap justify-between gap-2 p-1 pb-3 sm:w-full sm:flex-col'>
          <FieldText
            className='w-[47%] sm:w-full'
            control={innerControl}
            label={t('title')}
            placeholder={t('title')}
            name='jobTitle'
          />
          <FieldText
            className='w-[47%] sm:w-full'
            control={innerControl}
            label={t('employer')}
            placeholder={t('employer')}
            name='employer'
          />

          <DatePicker
            control={innerControl}
            label={t('start-date')}
            placeholder={t('start-date')}
            name='startDate'
            maximumDate={new Date()}
            wrapperClassName='w-[47%] sm:w-full'
          />
          <DatePicker
            control={innerControl}
            label={t('end-date')}
            placeholder={t('end-date')}
            name='endDate'
            maximumDate={new Date()}
            wrapperClassName='w-[47%] sm:w-full'
          />
          <CategoriesDropdown
            subCategoryLabel={t('sub-category')}
            label={t('category')}
            control={innerControl}
          />

          <DescriptionField
            control={innerControl}
            label={t('description')}
            fetchData={filter => searchDescriptionRecommendations(0, filter)}
            name='description'
            items={watch('description')}
            placeholder={suggestionsT('free-text')}
            suggestionsLabel={suggestionsT('description')}
            valuesLabel={suggestionsT('description-value')}
          />
        </div>
        <div className='my-3 w-[40%] sm:w-full'>
          <button
            className='flex items-center gap-1'
            onClick={handleSubmit(onSubmit)}>
            <Image
              className='w-5'
              alt=''
              src={
                theme === 'dark'
                  ? require('@/assets/images/icons/dark/plus.svg')
                  : require('@/assets/images/icons/light/plus.svg')
              }
            />
            <div className='text-sm font-bold text-secondary dark:text-main'>
              {t('add-experience')}
            </div>
          </button>
        </div>
      </div>
    </>
  )
}
