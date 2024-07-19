'use client';

import * as React from 'react';
import { Control, useController } from 'react-hook-form';
import { cn } from '@/utils';
import { HTMLProps, useEffect } from 'react';
import { Map } from '@/components';
import { useScopedI18n } from '@/utils/locales/client';

type Props = HTMLProps<HTMLInputElement> & {
  control: Control<any>;
  name: string;
};

const tmpItems = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
  'Item 5',
  'Item 6',
  'Item 7',
  'Item 8',
  'Item 9',
  'Item 10',
];

export function TasksField({
  control,
  name,
  label,
  placeholder,
  ...props
}: Props) {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({
    name,
    defaultValue: [],
    control,
  });

  const [showFilterDropDown, setShowFilterDropDown] =
    React.useState<boolean>(false);

  const [text, setText] = React.useState<string>('');

  const t = useScopedI18n('button');

  useEffect(() => {
    if (text.length >= 3) {
      setShowFilterDropDown(true);
    }
  }, [text]);

  return (
    <div className='relative '>
      <label
        htmlFor={name}
        className={cn(
          ' w-full text-sm font-bold text-secondary first-letter:capitalize dark:text-main'
        )}
      >
        {label}
      </label>
      {value.length > 0 ? (
        <div className='my-3 ml-4 text-secondary'>
          <ul className='list-disc'>
            <Map
              items={value}
              render={(item: string) => <li className=''>{item}</li>}
            />
          </ul>
        </div>
      ) : (
        <div
          className='prose  mt-3 text-text prose-ul:list-disc'
          dangerouslySetInnerHTML={{ __html: placeholder || '' }}
        />
      )}
      <input
        id={name}
        value={text}
        onChange={(e) => setText(e.currentTarget.value)}
        className={cn(
          'w-full rounded-lg border-none bg-background p-2 py-3 text-base text-secondary placeholder-text shadow-lg focus:outline-none dark:bg-backgroundSecondaryDark',
          error && 'border-red-600'
        )}
        {...props}
      />
      <div
        className={cn(
          'absolute -bottom-44 grid w-full overflow-hidden rounded-lg bg-background shadow-lg  transition-all ease-in-out',
          showFilterDropDown ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        )}
      >
        <div className='max-h-[200px] min-h-0 overflow-y-scroll'>
          {React.Children.toArray(
            tmpItems.map((item) => (
              <div
                onClick={() => {
                  onChange([...value, item]);
                  setShowFilterDropDown(false);
                  setText('');
                }}
                className='p-2 hover:bg-border'
              >
                {item}
              </div>
            ))
          )}
        </div>
      </div>
      <div className='mt-2 flex items-center gap-2'>
        <div
          onClick={() => {
            onChange([...value, text]);
            setText('');
          }}
          className='cursor-pointer text-[#00B8CB] transition-all hover:underline'
        >
          {t('add')}
        </div>
        <div className='h-5 w-[2px] bg-[#00B8CB]' />
        <div
          onClick={() => onChange(value.slice(0, -1))}
          className='cursor-pointer text-[#00B8CB] transition-all hover:underline'
        >
          {t('remove')}
        </div>
      </div>
    </div>
  );
}
