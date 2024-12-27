'use client'

import React from 'react'
import { Heading } from '../..'
import ProfileTypeSelectorItem from './profile-type-selector-item'
import { ROLE } from '../../../../../constants/role'
import { Control, useController } from 'react-hook-form'
import { RoleType } from '@/types/features/auth'

type Props = {
  label?: string
  control: Control<any>
  name: string
}

const tabs = [
  {
    id: 1,
    role: 'ROLE_TRAINEE',
    image: require('@/assets/images/icons/select-profile/light/trainee.png'),
    imageDark: require('@/assets/images/icons/select-profile/dark/trainee.png'),
    label: 'roles.trainee',
  },
  {
    id: 2,
    role: 'ROLE_EMPLOYEE',
    image: require('@/assets/images/icons/select-profile/light/provider.png'),
    imageDark: require('@/assets/images/icons/select-profile/dark/provider.png'),
    label: 'roles.worker',
  },
]

export function ProfileTypeSelector({ label, control }: Props) {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name: 'roles',
    control,
    defaultValue: [],
  })

  return (
    <div className='my-3 w-full'>
      <div className='text-secondary dark:text-main'>
        <Heading className='text-xbase' heading={label || ''} />
      </div>
      <div className='mt-1 flex w-full flex-col gap-2'>
        <ProfileTypeSelectorItem
          onChange={onChange}
          value={value}
          items={tabs}
        />
      </div>
      <div className='text-sm text-error'>{error?.message}</div>
    </div>
  )
}
