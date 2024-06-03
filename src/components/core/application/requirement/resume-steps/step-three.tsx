import { Button, DatePicker, FieldText } from '@/components';
import { useScopedI18n } from '@/utils/locales/client';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';
import { Control, useFieldArray, useForm, useWatch } from 'react-hook-form';

type Props = {
  control: Control<any>;
};

export function StepThree({ control }: Props) {
  const t = useScopedI18n('education');

  const { append, remove } = useFieldArray({ name: 'educations', control });
  const { theme } = useTheme();

  const { control: innerControl, handleSubmit } = useForm();
  const { educations } = useWatch({ control });

  const onSubmit = (data: any) => {
    append(data);
  };

  return (
    <div className='overflow-y-scroll '>
      <div className='flex max-h-[120px] flex-wrap items-center justify-start gap-[2%] gap-y-4 overflow-y-scroll'>
        {React.Children.toArray(
          educations.map((item: any, index: number) => (
            <div className='flex w-[32%] justify-between gap-2 rounded-md border-[1px] border-border p-2 dark:bg-backgroundSecondaryDark sm:w-[49%]'>
              <div className='text-text dark:text-textdark'>
                {item.specialisation}
              </div>
              <button
                onClick={() => {
                  if (confirm('Do you really want to remove')) {
                    remove(index);
                  }
                }}
              >
                <Image
                  alt=''
                  className='icon'
                  src={require('@/assets/images/icons/remove.svg')}
                />
              </button>
            </div>
          ))
        )}
      </div>
      <div className='my-3 flex flex-wrap justify-between gap-2 sm:mb-0 sm:flex-col'>
        <FieldText
          className='w-[47%] sm:w-full'
          control={innerControl}
          inputClassName='bg-background dark:bg-backgroundSecondaryDark dark:shadow-black'
          label={t('specialisation')}
          placeholder={t('specialisation')}
          name='specialisation'
        />
        <FieldText
          className='w-[47%] sm:w-full'
          control={innerControl}
          inputClassName='bg-background dark:bg-backgroundSecondaryDark dark:shadow-black'
          label={t('center')}
          placeholder={t('center-placeholder')}
          name='employee'
        />
        <div className='w-full'>
          <FieldText
            className='w-[47%] sm:w-full'
            control={innerControl}
            inputClassName='bg-background dark:bg-backgroundSecondaryDark dark:shadow-black'
            label={t('degree')}
            placeholder={t('degree')}
            name='employee'
          />
        </div>

        <DatePicker
          control={innerControl}
          label={t('start-date')}
          name='startDate'
          maximumDate={new Date()}
          wrapperClassName='w-[47%] sm:w-full'
          className='bg-background dark:bg-backgroundSecondaryDark dark:shadow-black'
        />
        <DatePicker
          control={innerControl}
          label={t('end-date')}
          name='enddate'
          maximumDate={new Date()}
          wrapperClassName='w-[47%] sm:w-full'
          className='bg-background dark:bg-backgroundSecondaryDark dark:shadow-black'
        />
      </div>
      <div className='my-10 w-[40%] sm:w-full'>
        <button
          className='flex items-center gap-1'
          onClick={handleSubmit(onSubmit)}
        >
          <Image
            className='w-5'
            alt=''
            src={
              theme === 'dark'
                ? require('@/assets/images/icons/dark/plus.svg')
                : require('@/assets/images/icons/light/plus.svg')
            }
          />
          <div className='text-sm font-bold text-secondary dark:text-main'>
            {t('add-education')}
          </div>
        </button>
      </div>
    </div>
  );
}
