'use client';

import { cn } from '@/utils';
import { useScopedI18n } from '@/utils/locales/client';
import Image from 'next/image';
import React, { useState } from 'react';
import { PdfViewer } from '../pdf-viewer';
import Link from 'next/link';
import { Button, ProgressBar } from '@/components';

type Props = {
  title: string;
  completed: number;
  doc: string;
  url: string;
};

export function DocumentToggleOperation({ completed, doc, title, url }: Props) {
  const t = useScopedI18n('application');
  const [showOptions, setShowOptions] = useState<boolean>(false);

  return (
    <>
      <li>
        <div
          onClick={() => setShowOptions((prev) => !prev)}
          className='my-2 flex items-center justify-between'
        >
          <div className='w-[50%] font-bold capitalize text-secondary dark:text-main'>
            {title}
          </div>
          <div className='w-[20vw]  rounded-full bg-background px-2 py-1 dark:bg-backgroundDark'>
            <ProgressBar currentStep={completed} steps={5} />
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
          <div className='flex gap-3 p-2 sm:flex-col sm:p-0'>
            <PdfViewer file={doc} />
            <div className='w-full'>
              <ul className='flex w-[40%] flex-col gap-3 sm:w-full'>
                <li>
                  <Link href={url}>
                    <Button theme='success' className='' text={t('add')} />
                  </Link>
                </li>
                <li>
                  <Link href={url}>
                    <Button theme='warn' className='' text={t('update')} />
                  </Link>
                </li>
                <li>
                  <Button
                    theme='error'
                    onClick={() =>
                      alert(
                        'should show banner of are you sure and then remove'
                      )
                    }
                    className=''
                    text={t('delete')}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
