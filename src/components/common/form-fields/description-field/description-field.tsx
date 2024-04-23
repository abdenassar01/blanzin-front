/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Control, useFieldArray, useWatch} from 'react-hook-form';
import {Image, TouchableOpacity, View} from 'react-native';
import {TranslatedHeading, TranslatedText} from '../../translated-text';
import {TextField} from '../text-field';
import {cn} from '../../../../../utils';
import {useMemo, useState} from 'react';
import {MainText} from '../../../core';
import {Spacer} from '../../layout-helpers';
import {useColorScheme} from 'nativewind';
import {ScrollView} from 'react-native-gesture-handler';

type Props = {
  control: Control<any>;
  items: string[];
  className?: string;
  label: string;
  placeholder?: string;
};

export function DescriptionField({
  label,
  placeholder,
  items,
  className,
  control,
}: Props) {
  const [filteredItems, setFilteredItems] = useState<string[]>(items);
  const [filterValue, setFilterValue] = useState<string>('');

  const {colorScheme} = useColorScheme();
  const isDark = useMemo(() => colorScheme === 'dark', [colorScheme]);

  const {append, remove} = useFieldArray({
    control,
    name: 'description',
  });

  const {description} = useWatch({control});

  function handleAppend() {
    if (filterValue) {
      append(filterValue);
      setFilterValue('');
    }
  }

  return (
    <View className="mb-2">
      <TranslatedHeading
        className="text-sm text-secondary dark:text-main mb-1"
        tranlationKey={label}
      />
      {description.length > 0 && (
        <View
          style={{gap: 3}}
          className={cn(
            'p-2 mb-1 bg-background dark:bg-backgroundDark rounded',
            className,
          )}>
          {React.Children.toArray(
            description.map((item: string, index: number) => (
              <View className="p-2 rounded bg-backgroundSecondary dark:bg-backgroundSecondaryDark flex-row items-center justify-between">
                <MainText className="max-w-[90%]">{item}</MainText>
                <TouchableOpacity
                  onPress={() => {
                    remove(index);
                  }}>
                  <Image
                    className="w-3 h-3 m-1"
                    source={
                      isDark
                        ? require('../../../../assets/icons/dark/close-drawer.png')
                        : require('../../../../assets/icons/light/close-drawer.png')
                    }
                  />
                </TouchableOpacity>
              </View>
            )),
          )}
        </View>
      )}
      <View>
        <View className="flex-row justify-between">
          <TextField
            wrapperClassName="h-[50px] max-w-[83%]"
            className={cn('bg-background dark:bg-backgroundDark', className)}
            onChange={text => {
              setFilterValue(text);
              if (text === '') {
                setFilteredItems(items);
              } else {
                setFilteredItems(
                  items.filter(item =>
                    item
                      .toLocaleLowerCase()
                      .includes(filterValue.toLocaleLowerCase()),
                  ),
                );
              }
            }}
            onSubmitEditing={handleAppend}
            value={filterValue}
            placeholder={placeholder}
          />
          <TouchableOpacity
            onPress={handleAppend}
            className="w-[15%] h-12 rounded justify-center items-center  bg-background dark:bg-backgroundDark">
            <Image
              className="w-4 h-4"
              source={
                isDark
                  ? require('../../../../assets/icons/dark/plus.png')
                  : require('../../../../assets/icons/light/plus.png')
              }
            />
          </TouchableOpacity>
        </View>
        <ScrollView
          contentContainerStyle={{gap: 5}}
          nestedScrollEnabled
          className="rounded w-full mt-1 h-[150px] p-2 bg-background dark:bg-backgroundDark pt-2">
          {React.Children.toArray(
            filteredItems.map(
              item =>
                description.filter((el: string) => el === item).length ===
                  0 && (
                  <TouchableOpacity
                    className="p-2 rounded bg-backgroundSecondary dark:bg-backgroundSecondaryDark"
                    onPress={() => {
                      append(item);
                      setFilterValue('');
                      setFilteredItems(items);
                    }}>
                    <TranslatedText className="text-xs" tranlationKey={item} />
                  </TouchableOpacity>
                ),
            ),
          )}
          <Spacer vertical={10} />
        </ScrollView>
      </View>
    </View>
  );
}
