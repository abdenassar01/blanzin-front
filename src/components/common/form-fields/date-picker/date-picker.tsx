'use client';

import * as React from 'react';
import { Control, useController } from 'react-hook-form';
import { TranslatedHeading, TranslatedText } from '../../translated-text';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import moment from 'moment';
import { cn } from '@/utils';
import Calendar from 'react-calendar';
import { Modal } from '../../modal';

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
  activeDate?: Date;
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
  activeDate,
}: Props) {
  const [openDatePicker, setOpenDatePicker] = useState<boolean>(false);

  const {
    fieldState: { error },
    field: { onChange, value },
  } = useController({
    control,
    name: name,
    defaultValue: defaultDate,
  });

  return (
    <div className={cn('w-[200px]', wrapperClassName)}>
      <TranslatedHeading
        className='mb-1 text-sm text-secondary dark:text-main'
        tranlationKey={label}
      />
      <button
        onClick={() => setOpenDatePicker((prev) => !prev)}
        className={cn(
          'w-full rounded-md bg-backgroundSecondary py-2.5 pl-2 text-text shadow-lg dark:bg-backgroundSecondaryDark dark:text-textdark dark:shadow-black',
          className
        )}
      >
        <TranslatedText
          className={cn(
            'flex justify-start px-1 text-justify text-base text-[#A6A6A6]'
          )}
          tranlationKey={
            (value &&
              selectRange &&
              `[${moment(value[0]).format('DD/MM/YYYY')}...${moment(
                value[value.length - 1]
              ).format('DD/MM/YYYY')}]`) ||
            moment(value).format('DD/MM/YYYY') ||
            placeholder ||
            label
          }
        />
      </button>
      <Modal
        width={10}
        header=''
        height={10}
        visible={openDatePicker}
        setVisible={setOpenDatePicker}
      >
        <div
          className={cn(
            'grid h-fit w-full overflow-hidden transition-all duration-500 ease-in'
            // openDatePicker ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          )}
        >
          <Calendar
            activeStartDate={activeDate || maximumDate || maxDate}
            selectRange={selectRange}
            minDate={minimumDate || minDate}
            maxDate={maximumDate || maxDate}
            className='mt-1 !w-full rounded !border-none !font-montserrat !outline-none sm:bg-backgroundSecondaryDark sm:text-backgroundSecondary'
            onChange={(value) => {
              onChange(value);
              if (!selectRange || Array.isArray(value))
                setOpenDatePicker(false);
            }}
          />
        </div>
      </Modal>
      <p className='h-[2vh] text-xxs text-error sm:h-[4vw]'>
        {error?.message?.toString()}
      </p>
    </div>
  );
}
