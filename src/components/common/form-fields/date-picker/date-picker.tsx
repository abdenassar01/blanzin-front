'use client';

import * as React from 'react';
import { Control, useController } from 'react-hook-form';
import { TranslatedHeading, TranslatedText } from '../../translated-text';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import moment from 'moment';
import { cn } from '@/utils';
import Calendar from 'react-calendar';
import { useOutsideClick } from '@/utils/hooks/use-outside-click';

type Props = {
  control: Control<any>;
  name: string;
  label: string;
  placeholder?: string;
  className?: string;
  wrapperClassName?: string;
  defaultDate?: Date;
  minimumDate?: Date;
  maximumDate?: Date;
  selectRange?: boolean;
};

const currentDate = new Date();
const maxDate = new Date();
const minDate = new Date();
maxDate.setFullYear(currentDate.getFullYear() - 15);
minDate.setFullYear(currentDate.getFullYear() - 60);

export function DatePicker({
  label,
  className,
  name,
  control,
  defaultDate,
  placeholder,
  minimumDate,
  maximumDate,
  wrapperClassName,
  selectRange,
}: Props) {
  const [openDatePicker, setOpenDatePicker] = useState<boolean>();
  const datePickerRef = React.useRef(null);

  const {
    fieldState: { error },
    field: { onChange, value },
  } = useController({
    control,
    name: name,
    defaultValue: defaultDate || maxDate,
  });

  useOutsideClick(datePickerRef, () => setOpenDatePicker(false));

  return (
    <div
      ref={datePickerRef}
      className={cn('relative w-full', wrapperClassName)}
    >
      <TranslatedHeading
        className='mb-1 text-sm text-secondary dark:text-main'
        tranlationKey={label}
      />
      <button
        onClick={() => setOpenDatePicker((prev) => !prev)}
        className={cn(
          'w-full rounded-md bg-backgroundSecondary py-3 pl-2 text-text dark:bg-backgroundSecondaryDark dark:text-textdark',
          className
        )}
      >
        <TranslatedText
          className={cn('w-full px-1 text-[13px]')}
          tranlationKey={
            (selectRange &&
              `[${moment(value[0]).format('DD-MM-YYYY')}...${moment(
                value[value.length - 1]
              ).format('DD-MM-YYYY')}]`) ||
            moment(value).format('DD-MM-YYYY') ||
            placeholder ||
            label
          }
        />
      </button>
      {
        <div
          className={cn(
            'absolute z-20 grid w-full overflow-hidden transition-all duration-500 ease-in',
            openDatePicker ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          )}
        >
          <div className='min-h-0'>
            <Calendar
              selectRange={selectRange}
              minDate={minimumDate || minDate}
              maxDate={maximumDate || maxDate}
              className='mt-1 !w-full rounded !border-none !font-montserrat !outline-none'
              onChange={onChange}
            />
          </div>
        </div>
      }
      <TranslatedText
        className='text-xs text-error'
        tranlationKey={error?.message || ''}
      />
    </div>
  );
}
