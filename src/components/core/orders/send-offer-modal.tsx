'use client';

import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';
import { Button, DatePicker, FieldText, Modal } from '@/components';
import { useForm } from 'react-hook-form';
import { useScopedI18n } from '@/utils/locales/client';
import { isMobile } from 'react-device-detect';

type Props = {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
};

export function SendOfferModal({ visible, setVisible }: Props) {
  const { control } = useForm();
  const t = useScopedI18n('forms');
  const tBtn = useScopedI18n('button');

  return (
    <Modal
      contentClassName=' h-fit'
      width={140}
      height={isMobile ? 150 : 77}
      visible={visible}
      setVisible={setVisible}
    >
      <div className='mt-5 h-fit rounded-lg bg-background p-3 px-5 dark:bg-backgroundDark'>
        <FieldText
          control={control}
          name='budget'
          type='number'
          label={t('budget')}
          placeholder={t('budget')}
        />
        <div className='flex gap-3'>
          <DatePicker
            control={control}
            name='startDate'
            label={t('start-date')}
            placeholder={t('start-date')}
          />
          <DatePicker
            control={control}
            name='endDate'
            label={t('end-date')}
            placeholder={t('end-date')}
          />
        </div>
        <div className='mt-16 flex justify-end'>
          <Button width={isMobile ? '49%' : '15%'}>{tBtn('submit')}</Button>
        </div>
      </div>
    </Modal>
  );
}
