'use client';

import { Button, Modal } from '@/components/common';
import { useI18n } from '@/utils/locales/client';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React, { useState } from 'react';

type Props = {};

export function ProfileOptions({}: Props) {
  const t = useI18n();

  const [favourite, setFavourite] = useState<boolean>(false);
  const [showReportModal, setShowReportModal] = useState<boolean>(false);
  const { theme } = useTheme();

  return (
    <>
      <div className='w-[80%]'>
        <Button text={t('send-offer')} />
        <div className='mt-3 flex gap-2'>
          <Image
            onClick={() => setFavourite((prev) => !prev)}
            className='icon'
            alt='favourite blanzin'
            src={
              theme === 'dark'
                ? favourite
                  ? require('@/assets/images/icons/dark/favourite-fill.svg')
                  : require('@/assets/images/icons/dark/favourite.svg')
                : favourite
                  ? require('@/assets/images/icons/light/favourite-fill.svg')
                  : require('@/assets/images/icons/light/favourite.svg')
            }
          />
          <Image
            onClick={() => setShowReportModal((prev) => !prev)}
            className='icon'
            alt='report blanzin'
            src={
              theme === 'dark'
                ? require('@/assets/images/icons/dark/danger.svg')
                : require('@/assets/images/icons/light/danger.svg')
            }
          />
        </div>
      </div>
      <Modal visible={showReportModal} setVisible={setShowReportModal}>
        <div className=''>Hello</div>
      </Modal>
    </>
  );
}
