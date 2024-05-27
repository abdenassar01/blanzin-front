'use client';

import { Switch } from '@/components';
import { useScopedI18n } from '@/utils/locales/client';
import React from 'react';

export function NewProfileForm() {
  const t = useScopedI18n('role');

  return (
    <div className='my-3 flex flex-col gap-5 rounded-xl bg-background p-2 dark:bg-backgroundSecondaryDark'>
      <div className='flex w-full justify-between'>
        <div className='font-meduim text-xbase text-text dark:text-textdark'>
          {t('customer')}
        </div>
        <Switch
          active
          onActiveChange={() => alert('adding customer profile')}
        />
      </div>
      <div className='flex w-full justify-between'>
        <div className='font-meduim text-xbase text-text dark:text-textdark'>
          {t('expert')}
        </div>
        <Switch active onActiveChange={() => alert('adding expert profile')} />
      </div>
      <div className='flex w-full justify-between'>
        <div className='font-meduim text-xbase text-text dark:text-textdark'>
          {t('trainee')}
        </div>
        <Switch active onActiveChange={() => alert('adding trainee profile')} />
      </div>
      <div className='flex w-full justify-between'>
        <div className='font-meduim text-xbase text-text dark:text-textdark'>
          {t('employee')}
        </div>
        <Switch
          active
          onActiveChange={() => alert('adding employee profile')}
        />
      </div>
    </div>
  );
}
