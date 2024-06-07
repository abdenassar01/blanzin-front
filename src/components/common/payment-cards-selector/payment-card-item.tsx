'use client';

import React from 'react';
import { TranslatedText } from '../translated-text';
import Image from 'next/image';
import { useCurrentLocale } from '@/utils/locales/client';
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
  const locale = useCurrentLocale();
  return (
    <div
      onClick={handlePress}
      className={cn(
        ' relative max-w-[32%] cursor-pointer rounded-xl border-[1px] border-border bg-backgroundSecondary p-4 transition-all duration-300 dark:bg-backgroundSecondaryDark',
        selected
          ? '-mt-3 border-main bg-main shadow-xl shadow-secondary dark:bg-main dark:shadow-main'
          : 'mt-3 border-border hover:shadow-md hover:shadow-secondary'
      )}
    >
      <div className='text-center text-xl font-bold text-secondary dark:text-main'>
        {pack.title}
      </div>

      {React.Children.toArray(
        pack.offers.map((item) => (
          <div className='relative my-2 flex'>
            <TranslatedText
              className={cn(
                'w-[70%] text-xs font-medium',
                selected
                  ? 'text-secondary dark:text-backgroundSecondaryDark'
                  : 'text-text dark:text-textdark'
              )}
              tranlationKey={item.text}
            />
            <div
              className={cn(
                'absolute  top-0',
                locale === 'ar' ? '-left-2' : '-right-2'
              )}
            >
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
      <div className='mb-2 mt-5 flex w-full items-center justify-center text-xm'>
        <TranslatedText
          className={cn(
            'rounded-xl text-center  font-bold ',
            selected
              ? 'text-secondary dark:text-backgroundSecondaryDark'
              : 'text-secondary dark:text-main'
          )}
          tranlationKey={`${pack.price} DH`}
        />
      </div>
    </div>
  );
}
