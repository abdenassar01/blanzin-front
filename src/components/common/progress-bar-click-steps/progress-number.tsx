import React from 'react'
import { cn } from '@/utils'

type NumbersType = {
  numberStep: number
  stepLabel: string
  ClassName?: string
  setStep: React.Dispatch<React.SetStateAction<number>>
}

export function ProgressNumber({
  numberStep,
  ClassName,
  stepLabel,
  setStep,
}: NumbersType) {
  return (
    <div onClick={() => setStep(numberStep)} className='relative'>
      <div
        className={cn(
          'flex h-8 w-8 items-center justify-center rounded-full border-[2px] border-secondary text-xxl font-medium uppercase text-secondary prose-p:leading-[34px] sm:h-[27.58] sm:w-[27.58] sm:text-mb-xbase',
          ClassName,
        )}>
        <p>{numberStep + 1}</p>
      </div>
      <div
        className={cn(
          'absolute -bottom-6 -ml-20 w-[200px] text-center font-bold text-secondary dark:text-main sm:text-xs',
          numberStep % 2 === 0 ? 'sm:-top-6' : 'sm:-bottom-6',
        )}>
        {stepLabel}
      </div>
    </div>
  )
}
