/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {Dimensions, Image, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {
  MainText,
  Spacer,
  TextField,
  TranslatedHeading,
  TranslatedText,
} from '../../..';
import {cn} from '../../../../../utils';
import {Control, useController} from 'react-hook-form';
import {ScrollView} from 'react-native-gesture-handler';
import {Wander} from 'react-native-animated-spinkit';
import colors from '../../../../../../configs/colors';
import {useColorScheme} from 'nativewind';
import {useLangStore} from '../../../../stores';
import Animated, {useSharedValue, withTiming} from 'react-native-reanimated';

type Props<T> = {
  items: T[];
  extractValue: (item: T) => any;
  extractDisplayMember: (item: T) => string;
  control: Control<any>;
  name: string;
  label: string;
  loading?: boolean;
  className?: string;
  defaultText?: string;
  wrapperClassName?: string;
  filter?: boolean;
  expends?: boolean;
};

export function DropDown<T>({
  className,
  control,
  extractDisplayMember,
  extractValue,
  items,
  label,
  name,
  loading,
  defaultText,
  wrapperClassName,
  filter,
  expends,
}: Props<T>) {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [displayMember, setDisplayMember] = useState<string>('');
  const [filteredItems, setFilteredItems] = useState<T[]>(items);
  const [filterValue, setFilterValue] = useState<string>('');
  const {currentLang} = useLangStore();
  const {colorScheme} = useColorScheme();

  const height = useSharedValue(0);

  const isDark = useMemo(() => colorScheme === 'dark', [colorScheme]);
  const isArabicLang = useMemo(() => currentLang === 'ar', [currentLang]);

  const {
    fieldState: {error},
    field: {onChange, value},
  } = useController({
    name,
    control,
  });

  useEffect(() => {
    const savedState = items.filter(el => extractValue(el) === value)[0];
    if (savedState) {
      setDisplayMember(extractDisplayMember(savedState));
    }
  }, [value]);

  return (
    <>
      <View className={cn('relative')} key={`dropdown-${name}-trigger`}>
        <View className={cn(wrapperClassName)}>
          <TranslatedHeading
            className="text-sm text-secondary dark:text-main mb-1"
            tranlationKey={label}
          />
          <TouchableOpacity
            onPress={() => {
              height.value = withTiming(height.value === 200 ? 0 : 200, {
                duration: 400,
              });
              if (showDropdown) {
                setTimeout(() => setShowDropdown(false), 400);
              } else {
                setShowDropdown(true);
              }
            }}
            className={cn(
              'rounded-md bg-backgroundSecondary w-full pl-2 py-3 text-text dark:bg-backgroundSecondaryDark dark:text-textdark',
              className,
            )}>
            {loading ? (
              <Wander size={14} color={colors.main} />
            ) : (
              <TranslatedText
                className={cn(
                  'text-[13px] px-1 w-full',
                  isArabicLang ? 'text-right' : 'text-left',
                )}
                tranlationKey={displayMember || defaultText || 'Select Item'}
              />
            )}
            <Image
              className={cn(
                'w-[15px] h-[15px] absolute top-[75%] ',
                isArabicLang ? 'left-3' : 'right-3',
              )}
              source={
                isDark
                  ? require('../../../../assets/icons/dark/down-arrow.png')
                  : require('../../../../assets/icons/light/down-arrow.png')
              }
            />
          </TouchableOpacity>
          <MainText className="text-error text-xs">{error?.message}</MainText>
        </View>

        <Animated.View
          style={{
            elevation: 1,
            height,
            zIndex: height,
            display: showDropdown ? 'flex' : 'none',
          }}
          className={cn(
            'absolute top-[60px] w-full rounded-b-md bg-backgroundSecondary dark:bg-backgroundSecondaryDark',
          )}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            className="flex-grow pt-2 z-30">
            {filter && (
              <TextField
                className="pl-3 bg-background dark:bg-backgroundDark mx-4 mb-[-10px]"
                value={filterValue}
                placeholder={label}
                onChange={text => {
                  setFilterValue(text);
                  if (text === '') {
                    setFilteredItems(items);
                  } else {
                    setFilteredItems(
                      items.filter(item =>
                        extractDisplayMember(item)
                          .toLocaleLowerCase()
                          .includes(filterValue.toLocaleLowerCase()),
                      ),
                    );
                  }
                }}
              />
            )}

            {React.Children.toArray(
              filteredItems.map(item => (
                <TouchableOpacity
                  className="mx-3 py-3 border-b-[.5px] border-background dark:border-backgroundDark"
                  onPress={() => {
                    setDisplayMember(extractDisplayMember(item));
                    onChange(extractValue(item));
                    setFilterValue('');
                    setFilteredItems(items);
                    height.value = withTiming(height.value === 200 ? 0 : 200, {
                      duration: 400,
                    });
                    setTimeout(() => setShowDropdown(false), 400);
                  }}>
                  <MainText>{extractDisplayMember(item)}</MainText>
                </TouchableOpacity>
              )),
            )}
            <Spacer vertical={20} />
          </ScrollView>
        </Animated.View>
        {expends && showDropdown ? <Spacer vertical={220} /> : ''}
      </View>

      <TouchableOpacity
        className={cn('absolute z-10', showDropdown ? 'flex' : 'hidden')}
        onPress={() => {
          height.value = withTiming(0, {
            duration: 400,
          });
          setTimeout(() => setShowDropdown(false), 400);
        }}
        style={{
          height: Dimensions.get('window').height,
          width: Dimensions.get('window').width,
        }}
      />
    </>
  );
}
