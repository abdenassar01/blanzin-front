import * as React from 'react';
import {Control, useController} from 'react-hook-form';
import {Image, TouchableOpacity, View} from 'react-native';
import {TranslatedHeading, TranslatedText} from '../../translated-text';
import {cn} from '../../../../../utils';
import {useColorScheme} from 'nativewind';

type Props = {
  control: Control<any>;
  name: string;
};

const tabs = [
  {
    id: 1,
    title: 'Trainee',
    darkIcon: require('../../../../assets/icons/select-profile/dark/trainee.png'),
    icon: require('../../../../assets/icons/select-profile/light/trainee.png'),
  },
  {
    id: 2,
    title: 'Skilled worker',
    darkIcon: require('../../../../assets/icons/select-profile/dark/german-trainee.png'),
    icon: require('../../../../assets/icons/select-profile/light/german-trainee.png'),
  },
];

export function ApplicationTypeSelector({control, name}: Props) {
  const {
    field: {onChange, value},
  } = useController({control, name, defaultValue: tabs[0].id});

  const {colorScheme} = useColorScheme();
  const isDark = React.useMemo(() => colorScheme === 'dark', [colorScheme]);

  return (
    <View className="p-2 rounded-xl bg-backgroundSecondary dark:bg-backgroundSecondaryDark">
      <TranslatedHeading
        className="text-base text-center"
        tranlationKey="forms.profile-type-header"
      />
      <View className="flex-row justify-between mt-3">
        {React.Children.toArray(
          tabs.map(item => (
            <TouchableOpacity
              onPress={() => onChange(item.id)}
              className={cn(
                'w-[49%] rounded p-3 justify-center items-center ',
                value === item.id
                  ? 'bg-secondary dark:bg-main'
                  : 'bg-background dark:bg-backgroundDark',
              )}>
              <Image
                className="w-16 h-16"
                source={
                  value === item.id
                    ? isDark
                      ? item.icon
                      : item.darkIcon
                    : isDark
                    ? item.darkIcon
                    : item.icon
                }
              />

              <TranslatedText
                className={cn(
                  'font-bold',
                  value === item.id
                    ? 'text-main dark:text-secondary'
                    : 'text-secondary dark:text-main',
                )}
                tranlationKey={item.title}
              />
            </TouchableOpacity>
          )),
        )}
      </View>
    </View>
  );
}
