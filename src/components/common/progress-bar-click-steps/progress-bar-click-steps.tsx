import { ProgressNumber } from './progress-number'
import React, { Fragment } from 'react'
import { cn } from '@/utils'
import { Map } from '@/components'

type Props = {
  currentStep: number
  steps: {
    title: string
    value: number
  }[]
  setStep: React.Dispatch<React.SetStateAction<number>>
}

export function ProgressBarClickSteps({ currentStep, steps, setStep }: Props) {
  return (
    <div className='mx-auto mt-12 flex max-w-[36.111vw] items-center justify-center pb-6 sm:max-w-full'>
      <Map
        items={steps}
        render={(step, i) => (
          <Fragment key={`progress-bar-item-${i}-${step.value}`}>
            <ProgressNumber
              setStep={setStep}
              stepLabel={step.title}
              numberStep={step.value}
              ClassName={cn(
                currentStep === step.value
                  ? 'text-secondary bg-main border-secondary dark:bg-main'
                  : 'text-white bg-secondary border-secondary dark:bg-backgroundDark dark:border-border',
              )}
            />
            {i < steps.length - 1 && (
              <div
                className={cn(
                  'h-[3px] flex-1 bg-secondary dark:bg-border',
                  currentStep === step.value ? '' : '',
                )}
              />
            )}
          </Fragment>
        )}
      />
    </div>
  )
}
