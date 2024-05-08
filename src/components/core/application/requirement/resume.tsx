'use client';

import { cn } from '@/utils';
import { useScopedI18n } from '@/utils/locales/client';
import Image from 'next/image';
import React, { useState } from 'react';
import { PdfViewer } from '../pdf-viewer';

export function ResumeToggle() {
  const t = useScopedI18n('application');
  const [showOptions, setShowOptions] = useState<boolean>(false);

  return (
    <>
      <li>
        <div
          onClick={() => setShowOptions((prev) => !prev)}
          className='my-2 flex justify-between'
        >
          <div className='font-bold capitalize text-secondary dark:text-main'>
            {t('resume')}
          </div>
          <Image
            className={cn(
              'w-[1.5vw] transition-all sm:w-[5vw]',
              showOptions ? '-rotate-90' : ''
            )}
            alt='arrow down blanzin'
            src={require('@/assets/images/icons/arrow-down.svg')}
          />
        </div>
      </li>
      <div
        className={cn(
          'grid overflow-hidden transition-all',
          showOptions ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        )}
      >
        <div className='min-h-0'>
          <div className='flex p-2 sm:p-0 '>
            <PdfViewer file='/blanzin.pdf' />
          </div>
        </div>
      </div>
    </>
  );
}
