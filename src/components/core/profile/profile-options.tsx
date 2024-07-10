'use client';

import { Button, FieldText, Modal, TextArea } from '@/components/common';
import { useI18n, useScopedI18n } from '@/utils/locales/client';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { isMobile } from 'react-device-detect';

type Props = {};

export function ProfileOptions({}: Props) {
  const t = useScopedI18n('order');
  const formT = useScopedI18n('forms');

  const [favourite, setFavourite] = useState<boolean>(false);
  const [showReportModal, setShowReportModal] = useState<boolean>(false);
  const { theme } = useTheme();

  const { control } = useForm();

  return (
    <>
      <div className='w-[80%]'>
        <Link href='/chat/someone'>
          <Button text={t('contact')} />
        </Link>
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
      <Modal
        width={20}
        visible={showReportModal}
        setVisible={setShowReportModal}
      >
        <div className='mt-3 flex flex-col gap-1 rounded-lg bg-background p-3'>
          <FieldText
            name='title'
            control={control}
            label={formT('title')}
            placeholder={formT('title')}
            className=''
          />
          <TextArea
            control={control}
            label={formT('complaint')}
            placeholder={formT('complaint')}
            name='complaint'
          />
          <div className='mt-4 flex justify-end'>
            <Button width={isMobile ? '50%' : '25%'} text={t('send')} />
          </div>
        </div>
      </Modal>
    </>
  );
}
