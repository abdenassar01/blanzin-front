/* eslint-disable react-native/no-inline-styles */
import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Control, useController} from 'react-hook-form';
import {Map, TranslatedText} from '../..';
import {Question} from '../../../../../../types';

type Props = {
  control: Control<any>;
  name: string;
  question: Question;
  defaultValue?: number;
};

export function RatingQuestion({question, control, name}: Props) {
  const {
    field: {onChange, value},
  } = useController({name, control});

  return (
    <View className="my-2">
      <TranslatedText tranlationKey={question.en} />
      <View style={{gap: 5}} className="flex-row justify-center items-center">
        <Map
          items={Array.from([1, 2, 3, 4, 5])}
          render={item => (
            <TouchableOpacity
              onPress={() => onChange(item)}
              className="justify-center items-center">
              <Image
                className="w-[30px] h-[30px] my-2"
                source={
                  value >= item
                    ? require('../../../../assets/icons/star-outline-filled.png')
                    : require('../../../../assets/icons/star-outline-empty.png')
                }
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
