'use client';

import * as React from 'react';
import { Button, Modal } from '@/components';
import { useState } from 'react';
import { useScopedI18n } from '@/utils/locales/client';

type Props = {
  text: string;
};

export function DeleteOrderModal({ text }: Props) {
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const t = useScopedI18n('modal');

  return (
    <>
      <Button
        className='group'
        textClassName='text-white group-hover:text-error'
        text={text}
        theme='error'
        onClick={() => setShowDeleteModal((prev) => !prev)}
      />
      <Modal
        width={140}
        height={77}
        visible={showDeleteModal}
        setVisible={setShowDeleteModal}
        contentClassName='flex flex-col items-center h-full justify-center py-6'
      >
        <div className='flex w-full items-center justify-center'>
          <div className='w-[80%] dark:text-main sm:w-full'>
            <div className='text-center text-xxl font-bold text-secondary dark:text-main'>
              {t('delete')}{' '}
            </div>
            <div className='mt-5 flex gap-3 sm:mt-4'>
              <Button
                onClick={() => setShowDeleteModal(false)}
                className='group hover:bg-secondary dark:border-main dark:hover:bg-main'
                theme='tertiary'
              >
                <div className='text-secondary group-hover:text-white dark:text-main'>
                  {t('cancel')}
                </div>
              </Button>
              <Button className='group' theme='error'>
                <div className='text-white group-hover:text-error'>
                  {t('yes')}
                </div>
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
