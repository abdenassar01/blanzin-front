'use client'

import * as React from 'react'
import { useScopedI18n } from '@/utils/locales/client'
import { useForm } from 'react-hook-form'
import { Dropdown, LongTextToggle } from '@/components'
import { ROLE } from '../../../../../constants/role'
import { CheckRequirement } from '@/components/core/application/check-requirement'

type Props = {
  nextStep?: () => void
}

export function StepZero({ nextStep }: Props) {
  const t = useScopedI18n('application-check')
  const { control } = useForm({
    defaultValues: {
      type: ROLE.EMPLOYEE,
    },
  })

  return (
    <div>
      <div className='mt-4 flex flex-col items-center justify-center gap-10 sm:gap-4'>
        <p className='w-[90%] text-center text-xl text-mainText dark:text-textdark sm:w-full sm:text-justify sm:text-sm'>
          <LongTextToggle text={t('main-text')} length={50} />
        </p>
        <div className='text-xbase font-bold text-mainText dark:text-main sm:text-sm'>
          {t('header')}
        </div>
        <Dropdown
          filter={false}
          control={control}
          wrapperClassName='w-[50%] sm:w-full'
          className='border border-border'
          label=''
          name='type'
          items={[
            { value: ROLE.TRAINEE, label: t('trainee') },
            { value: ROLE.EMPLOYEE, label: t('employee') },
            { value: ROLE.BOTH, label: t('both') },
          ]}
          extractDisplayMember={item => item.label}
          extractValueMember={item => item.value}
        />
        <CheckRequirement successCallback={nextStep} control={control} />
      </div>
    </div>
  )
}
