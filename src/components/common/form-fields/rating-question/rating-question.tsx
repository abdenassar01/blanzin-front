'use client';

import React from 'react';
import { Control, useController } from 'react-hook-form';
import { Map, TranslatedText } from '../..';
import { Question } from '@/types';
import Image from 'next/image';

type Props = {
  control: Control<any>;
  name: string;
  question: Question;
  defaultValue?: number;
};

export function RatingQuestion({ question, control, name }: Props) {
  const {
    field: { onChange, value },
  } = useController({ name, control });

  return (
    <div className='flex w-full items-center justify-between'>
      <TranslatedText className='text-sm' tranlationKey={question.en} />
      <div className='flex items-center justify-center gap-1'>
        <Map
          items={Array.from([1, 2, 3, 4, 5])}
          render={(item) => (
            <button
              onMouseEnter={() => onChange(item)}
              className='items-center justify-center'
            >
              <Image
                alt='star rating'
                className='my-2  w-[1.5vw] sm:w-[5vw]'
                src={
                  value >= item
                    ? require('@/assets/images/icons/star-filled.svg')
                    : require('@/assets/images/icons/star-empty.svg')
                }
              />
            </button>
          )}
        />
      </div>
    </div>
  );
}
