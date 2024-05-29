'use client';

import React, { useState } from 'react';
import { Map, TranslatedHeading } from '../..';
import ProfileTypeSelectorItem from './profile-type-selector-item';
import {
  ROLE,
  ROOT_ROLE,
  RootApplicationRole,
} from '../../../../../constants/role';

type Props = {
  label?: string;
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

export function ProfileTypeSelector({ label }: Props) {
  const [selected, setSelected] = useState<RootApplicationRole>(tabs[0].value);

  return (
    <div className='w-full'>
      <TranslatedHeading
        tranlationKey={label || ''}
        className='text-secondary dark:text-main'
      />
      <div className='mt-1 flex w-full flex-col gap-2'>
        <Map
          items={tabs}
          render={(tab) => (
            <ProfileTypeSelectorItem
              setSelected={setSelected}
              darkIcon={tab.darkIcon}
              selected={tab.value === selected}
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
