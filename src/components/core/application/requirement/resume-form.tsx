'use client'

import { cn } from '@/utils'
import { useScopedI18n } from '@/utils/locales/client'
import React, { useState } from 'react'
import { Control, useController, useForm } from 'react-hook-form'
import { StepFour, StepOne, StepThree, StepTwo } from './resume-steps'
import { Button } from '@/components'
import { isMobile } from 'react-device-detect'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Resume,
  resumeSchema,
} from '@/services/core/api/application/resume/types'
import { toast } from 'react-toastify'
import { useSession } from 'next-auth/react'
import { ApplicationFolder } from '@/services/core/api/application/application-folder/types'
import { addNewResume } from '@/services'

type Props = {
  setDisableNext: React.Dispatch<React.SetStateAction<boolean>>
  applicationControl: Control<ApplicationFolder>
}

export function ResumeForm({ setDisableNext, applicationControl }: Props) {
  const t = useScopedI18n('button')
  const { data } = useSession()

  const {
    field: { onChange },
  } = useController<ApplicationFolder>({
    control: applicationControl,
    name: 'resume',
  })

  const { control, trigger, handleSubmit } = useForm<Resume>({
    resolver: zodResolver(resumeSchema),
    mode: 'onChange',
    defaultValues: {
      experiences: [],
      educations: [],
      personalSkills: [],
      languagesWithGrades: [],
    },
  })

  const onSubmit = async (resume: Resume) => {
    resume.user = { id: data?.user?.id }

    const res = await addNewResume(resume)
    if (res.status !== 200) {
      toast.error(res.message)
    } else {
      toast.success(res.message)
      onChange({
        ...res.data,
        dateOfBirth: new Date(res.data.dateOfBirth),
        educations: res.data.educations.map(item => ({
          ...item,
          startDate: new Date(item.startDate),
          endDate: new Date(item.endDate),
        })),
        experiences: res.data.experiences.map(item => ({
          ...item,
          startDate: new Date(item.startDate),
          endDate: new Date(item.endDate),
        })),
      })
      setDisableNext(false)
    }
  }

  const onInvalid = (errors: any) => {
    console.log('INVALID: ', errors)
  }

  const [currentStep, setCurrentStep] = useState<number>(1)

  function getStep() {
    switch (currentStep) {
      case 1:
        return <StepOne control={control} />
      case 2:
        return <StepTwo control={control} />
      case 3:
        return <StepThree control={control} />
      case 4:
        return <StepFour control={control} />
    }
  }

  async function next() {
    switch (currentStep) {
      case 1:
        if (
          await trigger([
            'avatar',
            'firstname',
            'lastname',
            'email',
            'phone',
            'placeOfBirth',
            'dateOfBirth',
          ])
        ) {
          setCurrentStep(2)
        }
        break
      case 2:
        // toast.error(notificationsT('save-before-submit'))
        // break

        setCurrentStep(3)
        break
      case 3:
        setCurrentStep(4)
        break

      default:
        break
    }
  }

  return (
    <>
      <div className='sm:p-0'>
        <div className='no-scrollbar flex h-full w-[95%] flex-col justify-between sm:w-full'>
          <div className='no-scrollbar mt-3 overflow-y-scroll'>{getStep()}</div>
          <div
            className={cn(
              'flex w-full justify-between gap-4',
              currentStep === 1 ? 'justify-end' : 'justify-between',
            )}>
            {currentStep !== 1 && (
              <Button
                width={isMobile ? '49%' : '15%'}
                className='transition-all duration-300'
                theme='secondary'
                onClick={() => setCurrentStep(prev => prev - 1)}
                text={t('prev')}
              />
            )}
            <Button
              width={isMobile ? '49%' : '15%'}
              text={currentStep === 4 ? t('submit') : t('next')}
              onClick={
                currentStep === 4 ? handleSubmit(onSubmit, onInvalid) : next
              }
            />
          </div>
        </div>
      </div>
    </>
  )
}
