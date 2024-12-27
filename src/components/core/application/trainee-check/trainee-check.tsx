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

export function TraineeCheck({
  control,
  error,
  success,
  successCallback,
}: Props) {
  const { traineeDiploma, traineeUniversity, traineeLang } = useWatch({
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
              if (traineeDiploma === 'NO' && traineeUniversity === 'NO') {
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
              if (traineeLang === 'YES') setIsSuccess(true)
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
