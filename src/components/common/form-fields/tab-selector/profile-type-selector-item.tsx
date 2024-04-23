import {View, TouchableOpacity, Image} from 'react-native';
import React, {Dispatch, SetStateAction, useMemo, useState} from 'react';
import {RoleType, RootApplicationRole} from '../../../../../../configs/roles';
import {cn} from '../../../../../utils';
import {TranslatedText} from '../..';
import {useProfileTypeStore} from '../../../../stores';
import {useColorScheme} from 'nativewind';
import Animated, {
  Easing,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type Props = {
  setSelected: Dispatch<SetStateAction<RootApplicationRole>>;
  value: RootApplicationRole;
  icon: any;
  darkIcon: any;
  selected?: boolean;
  items: {
    role: RoleType;
    image: any;
    imageDark: any;
    label: string;
  }[];
};

export default function ProfileTypeSelectorItem({
  darkIcon,
  selected,
  icon,
  items,
  setSelected,
  value,
}: Props) {
  const {currentProfile, setCurrentProfile} = useProfileTypeStore();

  const {colorScheme} = useColorScheme();
  const isDark = useMemo(() => colorScheme === 'dark', [colorScheme]);

  const itemsHeight = useSharedValue(0);
  const [expands, setExpands] = useState<boolean>(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setSelected(value);
          itemsHeight.value = withTiming(itemsHeight.value === 0 ? 120 : 0, {
            easing: Easing.linear,
            duration: 300,
          });
          if (itemsHeight.value === 120) {
            setTimeout(() => setExpands(prev => !prev), 300);
          } else {
            setExpands(prev => !prev);
          }
        }}
        className={cn(
          'w-full flex-row items-center rounded-xl ',
          selected
            ? 'bg-success'
            : 'bg-backgroundSecondary dark:bg-backgroundSecondaryDark',
        )}
        key={`role-tab-${value}`}>
        <View className="">
          <Image
            className="w-[100px] h-[100px] "
            source={isDark ? darkIcon : icon}
          />
        </View>
        <TranslatedText
          className={cn(
            'font-bold capitalize',
            selected
              ? 'text-backgroundSecondary dark:text-backgroundSecondaryDark'
              : 'text-secondary dark:text-main',
          )}
          tranlationKey={value.replaceAll('_', ' ')}
        />
      </TouchableOpacity>
      <Animated.View
        style={{height: itemsHeight}}
        className={cn('flex-row justify-between', expands ? 'flex' : 'hidden')}>
        {React.Children.toArray(
          items.map(item => (
            <TouchableOpacity
              onPress={() => {
                setCurrentProfile(item.role);
              }}
              className={cn(
                'items-center py-2 rounded-xl my-1 w-[48%]',
                currentProfile === item.role
                  ? 'bg-chat'
                  : 'bg-backgroundSecondary dark:bg-backgroundSecondaryDark',
              )}>
              <View className="">
                <Image
                  className="w-[70px] h-[70px] "
                  source={isDark ? item.imageDark : item.image}
                />
              </View>
              <TranslatedText
                className={cn(
                  'font-bold capitalize',
                  currentProfile === item.role
                    ? 'text-backgroundSecondary dark:text-backgroundSecondaryDark'
                    : 'text-secondary dark:text-main',
                )}
                tranlationKey={item.role.replaceAll('_', ' ')}
              />
            </TouchableOpacity>
          )),
        )}
      </Animated.View>
    </>
  );
}
