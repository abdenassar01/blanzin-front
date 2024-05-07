'use client';

import * as React from 'react';
import { Control, useController } from 'react-hook-form';
import { TranslatedHeading, TranslatedText } from '../../translated-text';
import { useTheme } from 'next-themes';
import { cn } from '@/utils';
import Image from 'next/image';

type Props = {
  control: Control<any>;
  name: string;
};

const tabs = [
  {
    id: 1,
    title: 'Trainee',
    darkIcon: require('@/assets/images/icons/select-profile/dark/trainee.png'),
    icon: require('@/assets/images/icons/select-profile/light/trainee.png'),
  },
  {
    id: 2,
    title: 'Skilled worker',
    darkIcon: require('@/assets/images/icons/select-profile/dark/german-trainee.png'),
    icon: require('@/assets/images/icons/select-profile/light/german-trainee.png'),
  },
];

export function ApplicationTypeSelector({ control, name }: Props) {
  const {
    field: { onChange, value },
  } = useController({ control, name, defaultValue: tabs[0].id });

  const { theme } = useTheme();
  const isDark = React.useMemo(() => theme === 'dark', [theme]);

  return (
    <div className='rounded-xl bg-backgroundSecondary p-2 dark:bg-backgroundSecondaryDark'>
      <TranslatedHeading
        className='text-center text-base text-secondary dark:text-main'
        tranlationKey='forms.profile-type-header'
      />
      <div className='mt-3 flex justify-between'>
        {React.Children.toArray(
          tabs.map((item) => (
            <button
              onClick={() => onChange(item.id)}
              className={cn(
                'flex w-[49%] flex-col items-center justify-center rounded p-3 ',
                value === item.id
                  ? 'bg-secondary dark:bg-main'
                  : 'bg-background dark:bg-backgroundDark'
              )}
            >
              <Image
                alt=''
                className='h-16 w-16'
                src={
                  value === item.id
                    ? isDark
                      ? item.icon
                      : item.darkIcon
                    : isDark
                      ? item.darkIcon
                      : item.icon
                }
              />

              <TranslatedText
                className={cn(
                  'font-bold',
                  value === item.id
                    ? 'text-main dark:text-secondary'
                    : 'text-secondary dark:text-main'
                )}
                tranlationKey={item.title}
              />
            </button>
          ))
        )}
      </div>
    </div>
  );
}
