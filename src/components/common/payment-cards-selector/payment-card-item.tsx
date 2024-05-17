'use client';

import React from 'react';
import { TranslatedText } from '../translated-text';
import Image from 'next/image';
import { Button } from '../button';
import { useScopedI18n } from '@/utils/locales/client';
import { cn } from '@/utils';

type Props = {
  selected: boolean;
  handlePress: () => any;
  pack: {
    id: number;
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

export default function PaymentCardItem({
  pack,
  handlePress,
  selected,
}: Props) {
  const t = useScopedI18n('application');
  return (
    <div
      onClick={handlePress}
      className={cn(
        ' relative max-w-[31%] rounded-xl border-[1px] bg-backgroundSecondary p-4  transition-all duration-300 dark:bg-backgroundSecondaryDark',
        selected
          ? '-mt-3 border-secondary shadow-xl shadow-secondary dark:border-main dark:shadow-main'
          : 'border-border mt-3 '
      )}
    >
      <div className='text-center text-xl font-bold text-secondary dark:text-main'>
        {pack.title}
      </div>
      <div className='mb-2 mt-5'>
        <TranslatedText
          className='rounded-xl text-center text-xxl font-bold text-success'
          tranlationKey={`${pack.price} DH`}
        />
      </div>
      {React.Children.toArray(
        pack.offers.map((item) => (
          <div className='relative my-2 flex'>
            <TranslatedText
              className='w-[70%] text-xs font-medium'
              tranlationKey={item.text}
            />
            <div className='absolute -right-2 top-0'>
              {item?.super ? (
                item.supported ? (
                  <Image
                    alt='checkbox'
                    className='icon mr-2'
                    src={require('@/assets/images/icons/success-checkmark.svg')}
                  />
                ) : (
                  <Image
                    alt='checkbox'
                    className='icon mr-2'
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
    </div>
  );
}
