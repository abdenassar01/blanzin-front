'use client';

import { cn } from '@/utils';
import { useScopedI18n } from '@/utils/locales/client';
import Image from 'next/image';
import React, { useState } from 'react';
import { PdfViewer } from '../pdf-viewer';
import { Modal } from '@/components';
import { useTheme } from 'next-themes';

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
            <div className='no-scrollbar flex w-full items-center justify-center'>
              <div className='flex flex-wrap gap-3 sm:w-[90vh]'>
                {React.Children.toArray(
                  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                    <div className='aspect-[3/4] w-[140px] rounded-xl border-[1px] border-border'>
                      <button
                        onClick={() =>
                          confirm('Are you sure you want to delete')
                        }
                        className='flex w-full justify-end p-1'
                      >
                        <Image
                          alt=''
                          className='w-[24px]'
                          src={require('@/assets/images/icons/remove.svg')}
                        />
                      </button>
                      <div
                        onClick={() => setShowModal(true)}
                        className='flex h-[80%] w-full cursor-pointer flex-col items-center justify-center p-2'
                      >
                        <div className='text-center text-text dark:text-textdark'>
                          document name {item}
                        </div>
                      </div>
                    </div>
                  ))
                )}
                <label htmlFor='file_input' className='cursor-pointer'>
                  <div
                    onClick={() => console.log('Adding doc')}
                    className='flex aspect-[3/4] w-[140px] flex-col items-center justify-center rounded-xl border-[1px] border-border p-2 transition-all hover:border-success'
                  >
                    <Image
                      alt=''
                      className='w-[24px]'
                      src={
                        theme === 'dark'
                          ? require('@/assets/images/icons/dark/upload.svg')
                          : require('@/assets/images/icons/light/upload.svg')
                      }
                    />
                    <input
                      type='file'
                      name='file_input'
                      className='hidden'
                      id='file_input'
                    />
                    <div className='mt-2 text-center text-xs text-secondary dark:text-main'>
                      {t('add')}
                    </div>
                  </div>
                </label>
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
