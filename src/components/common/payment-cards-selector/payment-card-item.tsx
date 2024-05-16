'use client';

import React from 'react';
import { TranslatedText } from '../translated-text';
import Image from 'next/image';
import { Button } from '../button';
import { useScopedI18n } from '@/utils/locales/client';
import { cn } from '@/utils';

type Props = {
  handlePress: () => any;
  pack: {
    id: number;
    recomended?: boolean;
    title: string;
    offers: (
      | {
          text: string;
          super: boolean;
          supported: boolean;
          qte?: undefined;
        }
      | {
          text: string;
          qte: string;
          supported: boolean;
          super?: undefined;
        }
    )[];
    price: number;
  };
};

export default function PaymentCardItem({ pack, handlePress }: Props) {
  const t = useScopedI18n('application');
  return (
    <div
      onClick={handlePress}
      className={cn(
        ' relative rounded-xl bg-backgroundSecondary p-4 pt-12 dark:bg-backgroundSecondaryDark',
        pack.recomended ? '-mt-3 border-[1px] border-success pt-16' : 'mt-3'
      )}
    >
      {pack.recomended && (
        <div className='c-card__ribbon '>
          <div className='text-main'>Recomended</div>
        </div>
      )}
      {React.Children.toArray(
        pack.offers.map((item) => (
          <div className='relative my-2 flex'>
            <TranslatedText
              className='w-[70%] text-xs font-bold'
              tranlationKey={item.text}
            />
            <div className='absolute -right-2 top-0'>
              {item?.super ? (
                item.supported ? (
                  <Image
                    alt='checkbox'
                    className='mr-2 h-[1.5vw] w-[1.5vw]'
                    src={require('@/assets/images/icons/success-checkmark.svg')}
                  />
                ) : (
                  <Image
                    alt='checkbox'
                    className='mr-2 h-[1.5vw] w-[1.5vw]'
                    src={require('@/assets/images/icons/error-mark.svg')}
                  />
                )
              ) : (
                <TranslatedText
                  tranlationKey={item.qte || ''}
                  className='mr-2 text-xs font-bold text-secondary dark:text-main'
                />
              )}
            </div>
          </div>
        ))
      )}
      <div className='flex items-center justify-center '>
        <TranslatedText
          className='mt-3 text-center text-xl font-bold text-secondary dark:text-main'
          tranlationKey={`${pack.price} DH`}
        />
      </div>
      <div className='mt-4'>
        <Button text={t('book')} />
      </div>
    </div>
  );
}
