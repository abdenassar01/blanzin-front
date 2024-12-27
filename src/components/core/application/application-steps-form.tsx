'use client'

import { useScopedI18n } from '@/utils/locales/client'
import React, { useState } from 'react'
import { StepOne, StepThree, StepTwo, StepZero } from './steps'
import { useForm } from 'react-hook-form'
import { Button, ProgressBarClickSteps } from '@/components'
import {
  ApplicationFolder,
  applicationFolderSchema,
} from '@/services/core/api/application/application-folder/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'
import { addNewApplicationFolder } from '@/services'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export function ApplicationStepsForm() {
  const t = useScopedI18n('application')
  const buttonsT = useScopedI18n('button')
  const notificationsT = useScopedI18n('notification')

  const { replace } = useRouter()
  const { data } = useSession()

  const { control, handleSubmit } = useForm<ApplicationFolder>({
    resolver: zodResolver(applicationFolderSchema),
    defaultValues: {
      docs: [],
    },
  })

  function onSubmit(application: ApplicationFolder) {
    application.user = { id: data?.user?.id }

    const submitted = toast.promise(addNewApplicationFolder(application), {
      error: notificationsT('application-not-submitted'),
      success: notificationsT('application-submitted'),
      pending: notificationsT('application-pending'),
    })

    submitted.then(isSubmitted => isSubmitted && replace('/profile'))
  }

  const [currentStep, setCurrentStep] = useState<number>(0)
  const [disableNext, setDisableNext] = useState<boolean>(true)

  function getStep() {
    switch (currentStep) {
      case 0:
        return <StepZero nextStep={() => setCurrentStep(prev => prev + 1)} />
      case 1:
        return <StepOne control={control} setDisableNext={setDisableNext} />
      case 2:
        return <StepTwo control={control} />
      case 3:
        return <StepThree control={control} />
    }
  }

  return (
    <div className='no-scrollbar'>
      <div className='relative w-full rounded-xl p-4'>
        <div className='mb-10'>
          <ProgressBarClickSteps
            currentStep={currentStep}
            steps={[
              { title: t('check'), value: 0 },
              { title: t('resume'), value: 1 },
              { title: t('docs-folder'), value: 2 },
              { title: t('contract'), value: 3 },
            ]}
            setStep={setCurrentStep}
          />
        </div>
        {getStep()}
      </div>
      {currentStep !== 0 && (
        <div className='flex w-full justify-end'>
          <div className='w-[20%] sm:w-[50%]'>
            {!(currentStep === 1 && disableNext) && (
              <Button
                theme={currentStep == 3 ? 'success' : 'secondary'}
                text={currentStep == 3 ? t('submit') : buttonsT('next')}
                onClick={
                  currentStep == 3
                    ? handleSubmit(onSubmit, err => console.log('Err: ', err))
                    : () => setCurrentStep(prev => prev + 1)
                }
              />
            )}
          </div>
        </div>
      )}
    </div>
  )
}
