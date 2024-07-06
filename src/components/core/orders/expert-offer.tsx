'use client';

import { RatingStars } from '@/components/common/layout-helpers/rating-stars';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button, Modal, SendOfferModal } from '@/components';
import { useScopedI18n } from '@/utils/locales/client';

type Props = {};

export function ExpertOffer({}: Props) {
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [showOfferModal, setShowOffedModal] = useState<boolean>(false);

  const t = useScopedI18n('modal');

  return (
    <>
      <div className='mt-16 rounded-lg bg-background p-2 dark:bg-backgroundSecondaryDark'>
        <Link
          href='/experts/customer-name'
          className=' flex flex-col items-center'
        >
          <Image
            className='-mt-16'
            alt='avatar'
            src={require('@/assets/images/avatar.png')}
          />
          <div className='mt-2 text-text dark:text-textdark'>
            <h2 className='text-center font-medium capitalize text-mainText dark:text-main'>
              Expert name
            </h2>
            <div className='my-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              recusandae non impedit, culpa consequatur labore veritatis nostrum
              suscipit vitae
            </div>
            <div className=''>
              <RatingStars rating={3.5} />
            </div>
          </div>
        </Link>

        <div className='flex w-full justify-end gap-1'>
          <div
            onClick={() => setShowDeleteModal((prev) => !prev)}
            className='cursor-pointer'
          >
            <Image
              src={require('@/assets/images/icons/reject.svg')}
              alt=''
              className=''
            />
          </div>
          <div
            onClick={() => setShowOffedModal((prev) => !prev)}
            className='cursor-pointer'
          >
            <Image
              src={require('@/assets/images/icons/accept.svg')}
              alt=''
              className=''
            />
          </div>
        </div>
      </div>
      <Modal
        width={140}
        height={77}
        visible={showDeleteModal}
        setVisible={setShowDeleteModal}
        contentClassName='flex flex-col items-center h-full justify-center py-6'
      >
        <div className='flex w-full items-center justify-center'>
          <div className='w-[80%] dark:text-main sm:w-full'>
            <div className='text-center font-bold'>{t('delete')} </div>
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
      <SendOfferModal visible={showOfferModal} setVisible={setShowOffedModal} />
    </>
  );
}
