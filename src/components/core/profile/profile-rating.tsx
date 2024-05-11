'use client';

import {
  Button,
  FieldText,
  Modal,
  RatingMultipleQuestions,
  RatingStars,
  TextArea,
} from '@/components';
import { useI18n } from '@/utils/locales/client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

type Props = {
  rating: number;
};

export function ProfileRating({ rating }: Props) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { control } = useForm();

  const t = useI18n();

  return (
    <>
      <div className='flex justify-between'>
        <RatingStars rating={rating} />
        <div
          onClick={() => setShowModal(true)}
          className='cursor-pointer rounded border-[1px] border-secondary bg-secondary p-1 px-3 text-backgroundSecondary hover:bg-[transparent] hover:text-secondary dark:border-main dark:bg-main dark:text-backgroundSecondaryDark dark:hover:bg-[transparent] dark:hover:text-main'
        >
          {t('button.rate')}
        </div>
      </div>
      <Modal visible={showModal} setVisible={setShowModal}>
        <div className='max-h-full overflow-y-scroll'>
          <div className='flex flex-col items-center justify-center gap-3 overflow-y-hidden rounded p-2'>
            <RatingMultipleQuestions
              className='bg-background dark:bg-backgroundDark'
              control={control}
              questions={[
                { id: 1, en: 'How was your experience?', fr: '', ar: '' },
                { id: 2, en: 'How was your experience?', fr: '', ar: '' },
                { id: 3, en: 'How was your experience?', fr: '', ar: '' },
              ]}
            />
            <TextArea
              control={control}
              label={t('forms.feedback')}
              name='feedback'
              className='bg-background dark:bg-backgroundDark'
            />
            <Button text={t('button.submit')} />
          </div>
        </div>
      </Modal>
    </>
  );
}
