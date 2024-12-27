'use client'

import * as React from 'react'
import { Control, useWatch } from 'react-hook-form'
import { useState } from 'react'
import { Success } from '../success'
import { Error } from '../error'
import { FirstQuestions } from './first-questions'
import { SecondQuestions } from './second-questions'

type Props = {
  control: Control<any>
  success?: string
  error?: string
  successCallback?: () => void
}

export function WorkerCheck({
  control,
  success,
  error,
  successCallback,
}: Props) {
  const { workerDiploma, workerUniversity, workerBac, workerLang } = useWatch({
    control,
  })

  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)
  const [currentStep, setCurrentStep] = useState<number>(1)

  function getCurrentStep() {
    switch (currentStep) {
      case 1:
        return (
          <FirstQuestions
            control={control}
            handler={() => {
              if (workerDiploma && workerUniversity) {
                if (workerDiploma === 'YES' || workerUniversity === 'YES')
                  setIsSuccess(true)
                setCurrentStep(2)
              }
              setIsError(true)
            }}
          />
        )
      case 2:
        return (
          <SecondQuestions
            control={control}
            handler={() => {
              if (workerBac === 'YES' && workerLang === 'YES')
                setIsSuccess(true)
              setIsError(true)
            }}
          />
        )
    }
  }

  if (isSuccess) return <Success callback={successCallback} message={success} />
  if (isError) return <Error message={error} />

  return <div className=''>{getCurrentStep()}</div>
}
