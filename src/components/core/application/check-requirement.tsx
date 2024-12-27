import * as React from 'react'
import { Control, useWatch } from 'react-hook-form'
import { ROLE } from '../../../../constants/role'
import { TraineeCheck } from './trainee-check'
import { WorkerCheck } from './worker-check/worker-check'
import { ApplicantCheck } from './applicant-check'
import { ElearningTipAlert } from '@/components'

type Props = {
  control: Control<any>
  successCallback?: () => void
}

export function CheckRequirement({ control, successCallback }: Props) {
  const { type } = useWatch({ control })

  return (
    <div className='w-[90%] sm:w-full'>
      {type === ROLE.TRAINEE ? (
        <TraineeCheck successCallback={successCallback} control={control} />
      ) : type === ROLE.EMPLOYEE ? (
        <WorkerCheck successCallback={successCallback} control={control} />
      ) : (
        <ApplicantCheck control={control} successCallback={successCallback} />
      )}
      <ElearningTipAlert />
    </div>
  )
}
