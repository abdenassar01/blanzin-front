'use client'

import * as React from 'react'
import { Control, useWatch } from 'react-hook-form'
import { useState } from 'react'
import { FirstQuestions } from './first-questions'
import { SecondQuestions } from './second-questions'
import { Success } from '../success'
import { Error } from '../error'

type Props = {
  control: Control<any>
  success?: string
  error?: string
  successCallback?: () => void
}

export function ApplicantCheck({
  control,
  error,
  success,
  successCallback,
}: Props) {
  const { applicantDiploma, applicantUniversity, applicantLang, applicantBac } =
    useWatch({
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
              if (applicantDiploma === 'NO' && applicantUniversity === 'NO') {
                setIsError(true)
              } else {
                setCurrentStep(2)
              }
            }}
          />
        )
      case 2:
        return (
          <SecondQuestions
            control={control}
            handler={() => {
              if (applicantLang === 'YES' && applicantBac === 'YES')
                setIsSuccess(true)
              setIsError(true)
            }}
          />
        )
    }
  }

  if (isSuccess) return <Success callback={successCallback} message={success} />
  if (isError) return <Error message={error} />

  return <div className='my-6'>{getCurrentStep()}</div>
}
