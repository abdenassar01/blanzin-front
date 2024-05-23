'use client';

import { cn } from '@/utils';
import { useScopedI18n } from '@/utils/locales/client';
import Image from 'next/image';
import React, { useState } from 'react';
import { PdfViewer } from '../pdf-viewer';
import { Modal } from '@/components';
import { useTheme } from 'next-themes';
import Slider from 'react-slick';

type Props = {
  title: string;
  doc: string;
  url: string;
};

export function DocumentToggleOperation({ doc, title }: Props) {
  const t = useScopedI18n('application');
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const { theme } = useTheme();

  return (
    <>
      <li className='no-scrollbar w-full '>
        <div
          onClick={() => setShowOptions((prev) => !prev)}
          className='group my-2 flex w-full cursor-pointer items-center justify-between'
        >
          <div className='text-xxl'>
            <div className='text-secondary dark:text-main'>{title}</div>
            <div className='h-[2px] w-0 rounded-full bg-secondary transition-all duration-300 group-hover:w-[100px] dark:bg-main'></div>
          </div>
          <Image
            className={cn(
              'w-[1.5vw] transition-all duration-500 sm:w-[5vw]',
              showOptions ? '' : '-rotate-90'
            )}
            alt='arrow down blanzin'
            src={require('@/assets/images/icons/arrow-down.svg')}
          />
        </div>
      </li>
      <div
        className={cn(
          'grid w-full overflow-y-hidden transition-all',
          showOptions ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        )}
      >
        <div className='no-scrollbar min-h-0 w-full'>
          <div className='w-full gap-3 p-2  sm:p-0'>
            <div className=' mb-5 sm:w-full '>
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
                <div className='font-normale text-base text-secondary underline dark:text-main'>
                  {t('add')}
                </div>
              </button>
            </div>
            <div className='no-scrollbar flex w-full items-center justify-center'>
              <div className='documents-slider w-[clamp(600px,60vw,1000px);] sm:w-[90vh]'>
                <Slider
                  arrows
                  className='my-5'
                  slidesToShow={4.5}
                  slidesToScroll={2}
                  initialSlide={2}
                  // autoplay
                  cssEase='linear'
                  responsive={[
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                      },
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                      },
                    },
                  ]}
                >
                  {React.Children.toArray(
                    [1, 2, 3, 4, 5, 6, 7].map((item) => (
                      <div
                        onClick={() => setShowModal(true)}
                        className='!no-scrollbar my-2 w-full  overflow-x-hidden rounded-xl shadow-lg dark:shadow-black'
                      >
                        <PdfViewer width={300} file={doc} />
                      </div>
                    ))
                  )}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal visible={showModal} className='' setVisible={setShowModal}>
        <div className='flex flex-col items-center justify-center'>
          <div className=' w-[clamp(600px,60vw,1000px);] '>
            <PdfViewer width={800} file={doc} />
          </div>
        </div>
      </Modal>
    </>
  );
}
