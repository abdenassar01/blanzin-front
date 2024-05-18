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
  doc: string;
  url: string;
};

export function DocumentToggleOperation({ doc, title, url }: Props) {
  const t = useScopedI18n('application');
  const [showOptions, setShowOptions] = useState<boolean>(false);

  return (
    <>
      <li>
        <div
          onClick={() => setShowOptions((prev) => !prev)}
          className='group my-2 flex cursor-pointer items-center justify-between'
        >
          <div className=''>
            <div className=' font-bold capitalize text-secondary dark:text-main'>
              {title}
            </div>
            <div className='h-[2px] w-0 rounded-full bg-secondary transition-all duration-300 group-hover:w-[100px] dark:bg-main'></div>
          </div>
          <Image
            className={cn(
              'w-[1.5vw] transition-all duration-500 sm:w-[5vw]',
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
