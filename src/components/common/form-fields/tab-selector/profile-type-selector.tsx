'use client';

import React, { useState } from 'react';
import { Heading, Map, TranslatedHeading } from '../..';
import ProfileTypeSelectorItem from './profile-type-selector-item';
import {
  ROLE,
  ROOT_ROLE,
  RootApplicationRole,
} from '../../../../../constants/role';
import { Control, useController } from 'react-hook-form';

type Props = {
  label?: string;
  control: Control<any>;
  name: string;
};

const tabs = [
  {
    value: ROOT_ROLE.SERVICE_PLACEMENT,
    icon: require('@/assets/images/icons/select-profile/light/provider.png'),
    darkIcon: require('@/assets/images/icons/select-profile/dark/provider.png'),
    items: [
      {
        role: ROLE.CUSTOMER,
        image: require('@/assets/images/icons/select-profile/light/customer.png'),
        imageDark: require('@/assets/images/icons/select-profile/dark/customer.png'),
        label: 'roles.customer',
      },
      {
        role: ROLE.EXPERT,
        image: require('@/assets/images/icons/select-profile/light/provider.png'),
        imageDark: require('@/assets/images/icons/select-profile/dark/provider.png'),
        label: 'roles.provider',
      },
    ],
  },
  {
    value: ROOT_ROLE.JOBS_IN_GERMANY,
    icon: require('@/assets/images/icons/select-profile/light/jobs-in-germany.png'),
    darkIcon: require('@/assets/images/icons/select-profile/dark/german-trainee.png'),
    items: [
      {
        role: ROLE.TRAINEE,
        image: require('@/assets/images/icons/select-profile/light/trainee.png'),
        imageDark: require('@/assets/images/icons/select-profile/dark/trainee.png'),
        label: 'roles.trainee',
      },
      {
        role: ROLE.SKILLED_WORKER,
        image: require('@/assets/images/icons/select-profile/light/provider.png'),
        imageDark: require('@/assets/images/icons/select-profile/dark/provider.png'),
        label: 'roles.worker',
      },
    ],
  },
];

export function ProfileTypeSelector({ label, control, name }: Props) {
  const {
    field: { value, onChange },
  } = useController({ name, control, defaultValue: tabs[0].value });

  return (
    <div className='my-3 w-full'>
      <div className='text-secondary dark:text-main'>
        <Heading className='text-xbase' heading={label || ''} />
      </div>
      <div className='mt-1 flex w-full flex-col gap-2'>
        <Map
          items={tabs}
          render={(tab) => (
            <ProfileTypeSelectorItem
              onSelectedUpdate={() => onChange(tab.value)}
              darkIcon={tab.darkIcon}
              selected={tab.value === value}
              icon={tab.icon}
              items={tab.items}
              value={tab.value}
            />
          )}
        />
      </div>
    </div>
  );
}
