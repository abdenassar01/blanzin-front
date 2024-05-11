import React from 'react';
import { Control } from 'react-hook-form';
import { Map, RatingQuestion } from '../..';
import { Question } from '@/types';
import { cn } from '@/utils';

type Props = {
  control: Control<any>;
  questions: Question[];
  defaultValues?: number[];
  className?: string;
};

export function RatingMultipleQuestions({
  control,
  questions,
  className,
  defaultValues = [],
}: Props) {
  return (
    <div
      className={cn(
        'w-full rounded-md bg-backgroundSecondary p-3 dark:bg-backgroundSecondaryDark',
        className
      )}
    >
      <Map
        items={questions}
        render={(question, index) => (
          <>
            <RatingQuestion
              control={control}
              name={`question-${question.id}`}
              question={question}
              defaultValue={defaultValues[index] && defaultValues[index]}
            />
            {index < questions.length - 1 && (
              <div className='h-[1px] w-full rounded-full bg-text' />
            )}
          </>
        )}
      />
    </div>
  );
}
