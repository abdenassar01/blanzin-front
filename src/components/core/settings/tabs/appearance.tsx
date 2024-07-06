'use client';

import { Switch } from '@/components';
import { cn } from '@/utils';
import {
  useChangeLocale,
  useCurrentLocale,
  useI18n,
} from '@/utils/locales/client';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import React from 'react';

export function AppearanceTab() {
  const t = useI18n();
  const { theme, setTheme } = useTheme();
  const locale = useCurrentLocale();
  const changeLocal = useChangeLocale();

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
      return;
    }
    setTheme('dark');
  };

  const languages: {
    value: 'en' | 'fr' | 'ar';
    label: 'english' | 'arabic' | 'french';
    icon: any;
  }[] = [
    {
      value: 'en',
      label: 'english',
      icon: require('@/assets/images/languages/english.png'),
    },
    {
      value: 'fr',
      label: 'french',
      icon: require('@/assets/images/languages/frensh.png'),
    },
    {
      value: 'ar',
      label: 'arabic',
      icon: require('@/assets/images/languages/arabic.png'),
    },
  ];

  return (
    <div>
      <div className='flex w-full justify-between'>
        <div className='font-meduim text-base text-text dark:text-textdark'>
          {t('appearance-settings.theme')}
        </div>
        <Switch active={theme === 'dark'} onActiveChange={toggleTheme} />
      </div>
      <div className='flex items-center justify-between'>
        <div className='font-meduim text-base text-text dark:text-textdark'>
          {t('appearance-settings.language')}
        </div>
        <div className='mt-4 flex gap-2'>
          {React.Children.toArray(
            languages.map((lang) => (
              <div
                onClick={() => {
                  changeLocal(lang.value);
                }}
                className={cn(
                  'cursor-pointer rounded-xl bg-backgroundSecondary px-4 py-2 text-text dark:bg-backgroundDark dark:text-textdark',
                  lang.value === locale
                    ? 'bg-main text-secondary dark:bg-main dark:text-secondary'
                    : ''
                )}
              >
                {t(lang.label)}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
