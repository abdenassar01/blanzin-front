import { Heading, ResumeForm } from '@/components'
import { ApplicationFolder } from '@/services/core/api/application/application-folder/types'
import { useScopedI18n } from '@/utils/locales/client'
import React from 'react'
import { Control } from 'react-hook-form'

type Props = {
  setDisableNext: React.Dispatch<React.SetStateAction<boolean>>
  control: Control<ApplicationFolder>
}

export function StepOne({ setDisableNext, control }: Props) {
  return (
    <div className=' h-full'>
      <div className='h-full w-full rounded-xl '>
        <div className='no-scrollbar flex h-full w-full flex-col gap-1 overflow-x-hidden sm:pl-0'>
          <ResumeForm
            applicationControl={control}
            setDisableNext={setDisableNext}
          />
        </div>
      </div>
    </div>
  )
}
