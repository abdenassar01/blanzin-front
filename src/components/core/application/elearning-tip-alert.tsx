'use client';

import * as React from 'react';
import { useScopedI18n } from '@/utils/locales/client';
import Image from 'next/image';

export function ElearningTipAlert() {
  const t = useScopedI18n('e-learning-tip');

  return (
    <div className='mt-24 rounded-lg border border-main bg-main bg-opacity-15 p-4'>
      <div className='-mt-10 mb-3 flex max-w-fit items-center gap-2 rounded-md bg-warn p-2 font-bold'>
        <Image
          className='w-8 rounded-full bg-secondary p-1'
          src={require('@/assets/images/icons/light.svg')}
          alt='great ideas'
        />
        <div className='text-mainText '>{t('title')}</div>
      </div>
      <div
        className='prose text-mainText prose-a:cursor-pointer prose-a:text-[#4DA0FF] prose-a:underline dark:text-textdark'
        dangerouslySetInnerHTML={{ __html: t('content') }}
      />
    </div>
  );
}
