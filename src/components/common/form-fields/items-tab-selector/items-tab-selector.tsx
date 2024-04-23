/* eslint-disable react-native/no-inline-styles */
import {View, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Map, TranslatedText} from '../../..';
import {cn} from '../../../../../utils';
import {Control, useController} from 'react-hook-form';
import TabSelectorItem from './tab-selector-item';

type Props<T> = {
  items: T[];
  extractValue: (item: T) => any;
  extractDisplayMember: (item: T) => any;
  name: string;
  control: Control<any>;
};

export function ItemsTabSelector<T>({
  extractDisplayMember,
  extractValue,
  items,
  control,
  name,
}: Props<T>) {
  const [ShowSubCategories, setShowCategories] = useState<boolean>(false);

  const {
    field: {onChange, value},
  } = useController({name, control, defaultValue: []});

  const handleOptionPress = (option: T) => {
    const isExist =
      value.filter((item: T) => extractValue(item) === extractValue(option))
        .length > 0;
    if (isExist) {
      onChange(
        value.filter((item: T) => extractValue(item) !== extractValue(option)),
      );
    } else {
      onChange([...value, option]);
    }
  };

  return (
    <View>
      <TouchableOpacity
        className={cn(
          'my-3 rounded-md bg-backgroundSecondary w-full pl-2 py-3  dark:bg-backgroundSecondaryDark',
        )}
        onPress={() => setShowCategories(prev => !prev)}>
        <TranslatedText
          className="text-main text-sm"
          tranlationKey={
            value.length > 0
              ? 'all-subcategories-filtred-label'
              : 'all-subcategories-label'
          }
        />
      </TouchableOpacity>
      <ScrollView
        className={cn(
          'top-[80%] absolute z-20 rounded-lg  bg-backgroundSecondary dark:bg-backgroundSecondaryDark',
          ShowSubCategories ? 'max-h-[200px]' : 'max-h-[0]',
        )}>
        <View
          style={{gap: 5}}
          className={cn('p-3  flex-row flex-wrap  min-w-[100%]')}>
          <Map
            items={items}
            render={item => (
              <TabSelectorItem
                handleSelect={() => handleOptionPress(item)}
                selected={
                  value.filter(
                    (option: any) =>
                      extractValue(option) === extractValue(item),
                  ).length > 0
                }
                text={extractDisplayMember(item)}
              />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
}
