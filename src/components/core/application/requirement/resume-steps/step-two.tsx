import {
  DatePicker,
  DescriptionField,
  Dropdown,
  FieldText,
} from '@/components';
import { useScopedI18n } from '@/utils/locales/client';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';
import { Control, useFieldArray, useForm, useWatch } from 'react-hook-form';

type Props = {
  control: Control<any>;
};

export function StepTwo({ control }: Props) {
  const t = useScopedI18n('experience');
  const suggestionsT = useScopedI18n('suggestions');
  const resumeT = useScopedI18n('resume');

  const { append, remove } = useFieldArray({ name: 'experiences', control });
  const { experiences } = useWatch({ control });
  const { theme } = useTheme();

  const {
    control: innerControl,
    handleSubmit,
    watch,
  } = useForm({
    defaultValues: { description: [] },
  });

  const onSubmit = (data: any) => {
    append(data);
  };

  return (
    <>
      <div className='my-3'>
        <div className='text-xm text-secondary'>
          {resumeT('work-experience')}
        </div>
        <div className='text-text dark:text-textdark'>
          {resumeT('step-one-text')}
        </div>
      </div>
      <div className='mb-7 overflow-y-scroll'>
        <div className='flex max-h-[120px] flex-wrap items-center justify-start gap-[2%] gap-y-4 overflow-y-scroll'>
          {React.Children.toArray(
            experiences.map((item: any, index: number) => (
              <div className='flex w-[32%] justify-between gap-2 rounded-md border-[1px] border-border p-2 dark:bg-backgroundSecondaryDark sm:w-[49%]'>
                <div className='text-text dark:text-textdark'>
                  {item.jobTitle}
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
        <div className='mt-3 flex flex-wrap justify-between gap-2 pb-3 sm:w-full sm:flex-col'>
          <FieldText
            className='w-[47%] sm:w-full'
            control={innerControl}
            inputClassName='bg-background dark:bg-backgroundSecondaryDark dark:shadow-black'
            label={t('title')}
            placeholder={t('title')}
            name='jobTitle'
          />
          <FieldText
            className='w-[47%] sm:w-full'
            control={innerControl}
            inputClassName='bg-background dark:bg-backgroundSecondaryDark dark:shadow-black'
            label={t('employer')}
            placeholder={t('employer')}
            name='employee'
          />

          <DatePicker
            control={innerControl}
            label={t('start-date')}
            placeholder={t('start-date')}
            name='startDate'
            maximumDate={new Date()}
            wrapperClassName='w-[47%] sm:w-full'
            className='bg-background dark:bg-backgroundSecondaryDark dark:shadow-black'
          />
          <DatePicker
            control={innerControl}
            label={t('end-date')}
            placeholder={t('end-date')}
            name='enddate'
            maximumDate={new Date()}
            wrapperClassName='w-[47%] sm:w-full'
            className='bg-background dark:bg-backgroundSecondaryDark dark:shadow-black'
          />
          <Dropdown
            control={innerControl}
            name='category'
            items={['Morocco', 'Algeria', 'Germany']}
            extractDisplayMember={(item) => item}
            extractValueMember={(item) => item}
            label={t('category')}
            className='bg-background dark:bg-backgroundSecondaryDark dark:shadow-black'
            dropdownClassName='bg-background dark:bg-backgroundSecondaryDark dark:shadow-black'
            wrapperClassName='w-[47%] sm:w-full'
          />
          <DescriptionField
            control={innerControl}
            suggestions={['This is a test text', 'second', 'Hello world']}
            label={t('description')}
            name='description'
            items={watch('description')}
            placeholder={suggestionsT('free-text')}
            suggestionsLabel={suggestionsT('description')}
            valuesLabel={suggestionsT('description-value')}
          />
        </div>
        <div className='my-3 w-[40%] sm:w-full'>
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
              {t('add-experience')}
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
