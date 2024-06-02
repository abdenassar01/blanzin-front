'use client';

import { Switch } from '@/components';
import { usePathname } from '@/navigation';
import { cn } from '@/utils';
import { useCurrentLocale, useScopedI18n } from '@/utils/locales/client';
import { useTheme } from 'next-themes';
import { useParams, useRouter } from 'next/navigation';
import React, { startTransition } from 'react';

export function AppearanceTab() {
  const t = useScopedI18n('appearance-settings');
  const { theme, setTheme } = useTheme();
  const locale = useCurrentLocale();

  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  function onLangClick(nextLocale: string) {
    startTransition(() => {
      //@ts-ignore
      router.replace({ pathname, params }, { locale: nextLocale });
    });
  }

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
      return;
    }
    setTheme('dark');
  };

  const languages: {
    value: string;
    label: 'english' | 'arabic' | 'frensh';
    icon: any;
  }[] = [
    {
      value: 'en',
      label: 'english',
      icon: require('@/assets/images/languages/english.png'),
    },
    {
      value: 'fr',
      label: 'frensh',
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
          {t('theme')}
        </div>
        <Switch active={theme === 'dark'} onActiveChange={toggleTheme} />
      </div>
      <div className='flex justify-between'>
        <div className='font-meduim text-base text-text dark:text-textdark'>
          {t('langue')}
        </div>
        <div className='mt-4 flex gap-2'>
          {React.Children.toArray(
            languages.map((lang) => (
              <div
                onClick={() => onLangClick(lang.value)}
                className={cn(
                  'rounded-xl bg-backgroundSecondary px-4 py-2 text-text dark:bg-backgroundDark dark:text-textdark',
                  lang.value === locale ? 'bg-main text-secondary' : ''
                )}
              >
                {lang.value}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
