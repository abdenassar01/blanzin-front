'use client';

import * as React from 'react';
import { useScopedI18n } from '@/utils/locales/client';

export function Success() {
  const t = useScopedI18n('application-check');
  return (
    <div className='text-center text-success'>
      <div>{t('success-header')}</div>
      <div>{t('success-text')}</div>
    </div>
  );
}
