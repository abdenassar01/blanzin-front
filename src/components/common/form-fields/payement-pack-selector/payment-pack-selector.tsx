'use client';

import * as React from 'react';
import { Control, useController } from 'react-hook-form';
import { TranslatedHeading, TranslatedText } from '../../translated-text';
import { useTheme } from 'next-themes';
import { cn } from '@/utils';
import Image from 'next/image';

type Props = {
  control: Control<any>;
  name: string;
  disabled?: boolean;
};

const packs = [
  {
    id: 1,
    title: 'Basic',
    offers: [
      {
        text: 'Personal support with employer selection in Germany.',
        super: true,
      },
      { text: 'Rediv and optimisation of application documents.', super: true },
      {
        text: 'Personal support and assistance from our experts.',
        super: true,
      },
      { text: 'Job interdivs', qte: 'x1' },
      {
        text: 'Video call counselling before every interdiv',
        qte: 'x0',
      },
    ],
    price: 1500,
  },
  {
    id: 2,
    title: 'Standard',
    offers: [
      {
        text: 'Personal support with employer selection in Germany.',
        super: true,
      },
      { text: 'Rediv and optimisation of application documents.', super: true },
      {
        text: 'Personal support and assistance from our experts.',
        super: true,
      },
      { text: 'Job interdivs', qte: 'Unlimited' },
      {
        text: 'Video call counselling before every interdiv',
        qte: 'x3',
      },
    ],
    price: 2500,
  },
  {
    id: 3,
    title: 'Premium',
    offers: [
      {
        text: 'Personal support with employer selection in Germany.',
        super: true,
      },
      { text: 'Rediv and optimisation of application documents.', super: true },
      {
        text: 'Personal support and assistance from our experts.',
        super: true,
      },
      { text: 'Job interdivs', qte: 'Unlimited' },

      {
        text: 'Video call counselling before every interdiv',
        qte: 'Unlimited',
      },
    ],
    price: 3500,
  },
];

export function PaymentPackSelector({ control, name, disabled }: Props) {
  const {
    field: { onChange, value: selected },
  } = useController({
    control,
    name,
    defaultValue: disabled ? undefined : packs[1].id,
  });

  const { theme } = useTheme();
  const isDark = React.useMemo(() => theme === 'dark', [theme]);

  return (
    <div className={cn('my-1', disabled ? 'opacity-50' : '')}>
      <div className='flex flex-row justify-evenly rounded-xl bg-backgroundSecondary py-2 dark:bg-backgroundSecondaryDark'>
        {React.Children.toArray(
          packs.map((pack) => (
            <button
              onClick={() => {
                if (!disabled) {
                  onChange(pack.id);
                }
              }}
              className={cn(
                'flex w-[30%] flex-col items-center rounded p-3 ',
                selected === pack.id
                  ? 'bg-secondary dark:bg-main'
                  : 'bg-background dark:bg-backgroundDark'
              )}
            >
              <TranslatedHeading
                className={cn(
                  'text-md',
                  selected === pack.id ? 'text-main dark:text-secondary' : ''
                )}
                tranlationKey={pack.title}
              />
            </button>
          ))
        )}
      </div>
      <div className='mt-2 rounded-xl bg-backgroundSecondary p-4 dark:bg-backgroundSecondaryDark'>
        {React.Children.toArray(
          packs[selected - 1].offers.map((item) => (
            <div className='relative my-2 flex'>
              <TranslatedText
                className='w-[70%] text-xs font-bold'
                tranlationKey={item.text}
              />
              <div className='absolute -right-2 top-0'>
                {item?.super ? (
                  <Image
                    alt='checkbox'
                    className='mr-2 h-[1.5vw] w-[1.5vw]'
                    src={
                      isDark
                        ? require('@/assets/images/icons/dark/checkmark.svg')
                        : require('@/assets/images/icons/dark/checkmark.svg')
                    }
                  />
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
            tranlationKey={`${packs[selected - 1].price} DH`}
          />
        </div>
      </div>
    </div>
  );
}
