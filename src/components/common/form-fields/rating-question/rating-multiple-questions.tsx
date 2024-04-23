import {View} from 'react-native';
import React from 'react';
import {Control} from 'react-hook-form';
import {Question} from '../../../../../../types';
import {Map, RatingQuestion} from '../..';

type Props = {
  control: Control<any>;
  questions: Question[];
  defaultValues?: number[];
};

export function RatingMultipleQuestions({
  control,
  questions,
  defaultValues = [],
}: Props) {
  return (
    <View className="p-3 rounded-md bg-backgroundSecondary dark:bg-backgroundSecondaryDark">
      <Map
        items={questions}
        render={(question, index) => (
          <>
            <RatingQuestion
              control={control}
              name={`question${question.id}`}
              question={question}
              defaultValue={defaultValues[index] && defaultValues[index]}
            />
            {index < questions.length - 1 && questions.length && (
              <View className="h-[1px] w-full rounded-full bg-background dark:bg-backgroundDark" />
            )}
          </>
        )}
      />
    </View>
  );
}
