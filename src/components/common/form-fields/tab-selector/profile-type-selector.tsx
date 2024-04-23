import {View} from 'react-native';
import React, {useState} from 'react';
import {
  ROLE,
  ROOT_ROLE,
  RootApplicationRole,
} from '../../../../../../configs/roles';
import {TranslatedHeading} from '../..';
import ProfileTypeSelectorItem from './profile-type-selector-item';

type Props = {
  label?: string;
};

const tabs = [
  {
    value: ROOT_ROLE.SERVICE_PLACEMENT,
    icon: require('../../../../assets/icons/select-profile/light/provider.png'),
    darkIcon: require('../../../../assets/icons/select-profile/dark/provider.png'),
    items: [
      {
        role: ROLE.CUSTOMER,
        image: require('../../../../assets/icons/select-profile/light/customer.png'),
        imageDark: require('../../../../assets/icons/select-profile/dark/customer.png'),
        label: 'roles.customer',
      },
      {
        role: ROLE.PROVIDER,
        image: require('../../../../assets/icons/select-profile/light/provider.png'),
        imageDark: require('../../../../assets/icons/select-profile/dark/provider.png'),
        label: 'roles.provider',
      },
    ],
  },
  {
    value: ROOT_ROLE.JOBS_IN_GERMANY,
    icon: require('../../../../assets/icons/select-profile/light/jobs-in-germany.png'),
    darkIcon: require('../../../../assets/icons/select-profile/dark/german-trainee.png'),
    items: [
      {
        role: ROLE.TRAINEE,
        image: require('../../../../assets/icons/select-profile/light/trainee.png'),
        imageDark: require('../../../../assets/icons/select-profile/dark/trainee.png'),
        label: 'roles.trainee',
      },
      {
        role: ROLE.SKILLED_WORKER,
        image: require('../../../../assets/icons/select-profile/light/provider.png'),
        imageDark: require('../../../../assets/icons/select-profile/dark/provider.png'),
        label: 'roles.worker',
      },
    ],
  },
];

export function ProfileTypeSelector({label}: Props) {
  const [selected, setSelected] = useState<RootApplicationRole>(tabs[0].value);

  return (
    <View className="w-full">
      <TranslatedHeading tranlationKey={label || ''} className="text-main" />
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <View style={{gap: 10}} className="mt-1 w-full">
        {tabs.map(tab => (
          <ProfileTypeSelectorItem
            setSelected={setSelected}
            darkIcon={tab.darkIcon}
            selected={tab.value === selected}
            icon={tab.icon}
            items={tab.items}
            value={tab.value}
          />
        ))}
      </View>
    </View>
  );
}
