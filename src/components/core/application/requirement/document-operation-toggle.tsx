'use client';

import { cn } from '@/utils';
import { useScopedI18n } from '@/utils/locales/client';
import Image from 'next/image';
import React, { useState } from 'react';
import { PdfViewer } from '../pdf-viewer';
import Link from 'next/link';
import { Button, JobMainCard, Modal } from '@/components';
import { useTheme } from 'next-themes';
import Slider from 'react-slick';
import { SliderDotIndicator } from '../../sliders/slider-dots-indicator';
import { isMobile } from 'react-device-detect';

type Props = {
  title: string;
  doc: string;
  url: string;
};

export function DocumentToggleOperation({ doc, title, url }: Props) {
  const t = useScopedI18n('application');
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const { theme } = useTheme();

  return (
    <>
      <li>
        <div
          onClick={() => setShowOptions((prev) => !prev)}
          className='no-scrollbar group my-2 flex w-full cursor-pointer items-center justify-between'
        >
          <div className='text-xxl'>
            <div className='font-bold text-secondary dark:text-main'>
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
          'grid overflow-y-hidden transition-all',
          showOptions ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        )}
      >
        <div className='no-scrollbar min-h-0 w-full'>
          <div className='w-full gap-3 p-2  sm:p-0'>
            <div className=' mb-5 w-[40%] sm:w-full'>
              <button
                className='flex items-center gap-1'
                onClick={() => console.log('')}
              >
                <Image
                  className='w-5'
                  alt=''
                  src={
                    theme === 'dark'
                      ? require('@/assets/images/icons/dark/plus.svg')
                      : require('@/assets/images/icons/light/plus.svg')
                  }
                />
                <div className='text-xbase font-medium text-secondary dark:text-main'>
                  {t('add')}
                </div>
              </button>
            </div>
            <div className='no-scrollbar flex gap-10 overflow-x-scroll'>
              {React.Children.toArray(
                [1, 2, 3, 4, 5, 6, 7].map((item) => (
                  <div onClick={() => setShowModal(true)} className='w-[300px]'>
                    <PdfViewer width={300} file={doc} />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      <Modal visible={showModal} setVisible={setShowModal}>
        <PdfViewer width={isMobile ? 370 : 1024} file={doc} />
      </Modal>
    </>
  );
}
