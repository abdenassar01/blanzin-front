/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {TextField} from '../text-field';
import {Control, useFieldArray} from 'react-hook-form';
import {Image, TouchableOpacity, View} from 'react-native';
import {useMemo, useState} from 'react';
import {cn} from '../../../../../utils';
import {useColorScheme} from 'nativewind';
import {TranslatedHeading, TranslatedText} from '../../translated-text';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';
import {ScrollView} from 'react-native-gesture-handler';

type Props = {
  control: Control<any>;
  label?: string;
  placeholder?: string;
  className?: string;
  name: string;
  items: string[];
  suggestions?: string[];
  buttonClassName?: string;
  maxSkills?: number;
};

export function TagsField({
  control,
  name,
  className,
  placeholder,
  label,
  items,
  buttonClassName,
  maxSkills = 9,
  suggestions,
}: Props) {
  const [text, setText] = useState<string>('');
  const [filteredSuggestion, setFilteredSuggestion] = useState<
    string[] | undefined
  >(suggestions);
  const {append, remove} = useFieldArray({control, name});

  const {colorScheme} = useColorScheme();
  const isDark = useMemo(() => colorScheme === 'dark', [colorScheme]);

  function handleAppend() {
    if (text && items.length <= maxSkills) {
      append(text);
      setText('');
      setFilteredSuggestion(suggestions);
    }
  }

  return (
    <View>
      {items?.length > 0 && (
        <View style={{gap: 5}} className={cn('flex-row flex-wrap py-3')}>
          {React.Children.toArray(
            items.map((item, index) => (
              <Animated.View
                entering={FadeIn}
                exiting={FadeOut}
                className="p-1 flex-row  rounded bg-backgroundSecondary dark:bg-backgroundSecondaryDark justify-between items-center">
                <TranslatedText className="max-w-[95%]" tranlationKey={item} />
                <TouchableOpacity
                  onPress={() => {
                    remove(index);
                    filteredSuggestion &&
                      setFilteredSuggestion([...filteredSuggestion, item]);
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
              </Animated.View>
            )),
          )}
        </View>
      )}
      <View className="h-[2px] mb-3 mt-1 w-[80%] ml-[10%] bg-secondary dark:bg-main rounded-full" />
      <View className="flex-row justify-between items-center">
        <TextField
          onChange={t => {
            setText(t);
            if (t === '') {
              setFilteredSuggestion(suggestions);
              return;
            }
            setFilteredSuggestion(
              suggestions?.filter(item =>
                item.toLowerCase().startsWith(t.toLowerCase()),
              ),
            );
          }}
          value={text}
          label={label}
          wrapperClassName="max-w-[83%]"
          className={cn('', className)}
          placeholder={placeholder}
          onSubmitEditing={handleAppend}
        />
        <TouchableOpacity
          onPress={handleAppend}
          className={cn(
            'w-[15%] h-12 rounded mt-3 justify-center items-center bg-backgroundSecondary dark:bg-backgroundSecondaryDark',
            buttonClassName,
          )}>
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
      {filteredSuggestion && (
        <View className="rounded p-2 bg-backgroundSecondary dark:bg-backgroundSecondaryDark">
          <TranslatedHeading
            className="text-xs mb-2"
            tranlationKey="forms.skills.suggestions"
          />
          <ScrollView
            className="max-h-[80px]"
            contentContainerStyle={{
              flexDirection: 'row',
              gap: 5,
              flexWrap: 'wrap',
            }}>
            {React.Children.toArray(
              filteredSuggestion.map(item => (
                <TouchableOpacity
                  onPress={() => {
                    append(item);
                    setFilteredSuggestion(
                      filteredSuggestion?.filter(
                        suggestion => suggestion !== item,
                      ),
                    );
                  }}
                  className="p-1 flex-row  rounded bg-background dark:bg-backgroundDark justify-between items-center">
                  <TranslatedText className="" tranlationKey={item} />
                </TouchableOpacity>
              )),
            )}
          </ScrollView>
        </View>
      )}
    </View>
  );
}
