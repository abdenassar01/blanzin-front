import { DatePicker, Dropdown, FieldText, Loader } from '@/components'
import { addNewEducation } from '@/services'
import {
  Education,
  educationSchema,
} from '@/services/core/api/application/resume/educations/types'
import { Resume } from '@/services/core/api/application/resume/types'
import { useScopedI18n } from '@/utils/locales/client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import React, { useState } from 'react'
import { Control, useFieldArray, useForm, useWatch } from 'react-hook-form'
import { toast } from 'react-toastify'

type Props = {
  control: Control<any>
}

export function StepThree({ control }: Props) {
  const t = useScopedI18n('education')
  const resumeT = useScopedI18n('resume')

  const { append, remove } = useFieldArray({ name: 'educations', control })
  const { theme } = useTheme()
  const [loading, setLoading] = useState<boolean>(false)

  const {
    control: innerControl,
    handleSubmit,
    reset,
  } = useForm<Education>({
    resolver: zodResolver(educationSchema),
  })
  const { educations } = useWatch<Resume>({ control })

  const onSubmit = async (data: Education) => {
    setLoading(true)
    const res = await addNewEducation({ ...data })
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
    <div className='no-scrollbar mb-10 flex flex-col gap-4 overflow-y-scroll'>
      <div className='my-3'>
        <div className='text-xm text-secondary dark:text-main'>
          {resumeT('education')}
        </div>
        <div className='text-text dark:text-textdark'>
          {resumeT('step-two-text')}
        </div>
      </div>
      <div className='flex max-h-[120px] flex-wrap items-center justify-start gap-[2%] gap-y-4 overflow-y-scroll'>
        {React.Children.toArray(
          educations?.map((item, index: number) => (
            <div
              key={`education-item-${item.specialization}-${item.institute}`}
              className='flex w-[32%] items-center justify-between gap-2 rounded-md border-[1px] border-border p-2 dark:bg-backgroundSecondaryDark sm:w-[49%]'>
              <div className='text-text dark:text-textdark'>
                {item.specialization}
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
        {loading && (
          <div className='mt-6 w-24'>
            <Loader />
          </div>
        )}
      </div>
      <div className='my-3 flex flex-wrap justify-between gap-2 p-1 sm:mb-0 sm:flex-col'>
        <FieldText
          className='w-[47%] sm:w-full'
          control={innerControl}
          label={t('specialisation')}
          placeholder={t('specialisation')}
          name='specialization'
        />
        <FieldText
          className='w-[47%] sm:w-full'
          control={innerControl}
          label={t('center')}
          placeholder={t('center-placeholder')}
          name='institute'
        />
        <div className='w-full'>
          <Dropdown
            wrapperClassName='w-[47%]'
            control={innerControl}
            label={t('degree')}
            placeholder={t('degree')}
            name='degree'
            items={['Master', 'Licence']}
            extractDisplayMember={item => item}
            extractValueMember={item => item}
          />
        </div>

        <DatePicker
          control={innerControl}
          label={t('start-date')}
          name='startDate'
          maximumDate={new Date()}
          wrapperClassName='w-[47%] sm:w-full'
        />
        <DatePicker
          control={innerControl}
          label={t('end-date')}
          name='endDate'
          maximumDate={new Date()}
          wrapperClassName='w-[47%] sm:w-full'
        />
      </div>
      <div className='my-10 w-[40%] sm:w-full'>
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
            {t('add-education')}
          </div>
        </button>
      </div>
    </div>
  )
}
