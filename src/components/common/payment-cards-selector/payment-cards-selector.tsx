'use client';

import React from 'react';
import PaymentCardItem from './payment-card-item';
import { Control, useController } from 'react-hook-form';

type Props = {
  control: Control<any>;
  name: string;
};

const packs = [
  {
    id: 1,
    title: {
      en: 'Blan 3adi',
      ar: 'ar- Blan 3adi',
      fr: 'fr- Blan 3adi',
    },
    offers: [
      {
        en: 'Review and optimisation of application documents.',
        ar: 'ar- Review and optimisation of application documents.',
        fr: 'fr- Review and optimisation of application documents.',
        super: true,
        supported: true,
      },

      {
        en: 'Job interviews',
        ar: 'ar- Job interviews',
        fr: 'fr- Job interviews',
        qte: 'x1',
        supported: true,
      },
      {
        en: 'Video call counselling before the first interview',
        ar: 'ar- Video call counselling before the first interview',
        fr: 'fr- Video call counselling before the first interview',
        super: true,
        supported: false,
      },
    ],
    price: 900,
  },
  {
    id: 3,
    title: {
      en: 'Blan Zin',
      ar: 'ar- Blan Zin',
      fr: 'fr- Blan Zin',
    },
    offers: [
      {
        en: 'Review and optimisation of application documents.',
        ar: 'ar- Review and optimisation of application documents.',
        fr: 'fr- Review and optimisation of application documents.',
        super: true,
        supported: true,
      },

      {
        en: 'Job interviews',
        ar: 'ar- Job interviews',
        fr: 'fr- Job interviews',
        qte: 'x3',
        supported: true,
      },
      {
        en: 'Video call counselling before the first interview',
        ar: 'ar- Video call counselling before the first interview',
        fr: 'fr- Video call counselling before the first interview',
        qte: 'x1',
        supported: true,
      },
    ],
    price: 1600,
  },
];

export function PaymentCardsSelector({ control, name }: Props) {
  const {
    field: { onChange, value },
  } = useController({ control, name });

  return (
    <div className='flex w-full items-center justify-center'>
      <div className='flex gap-3 sm:flex-col'>
        {React.Children.toArray(
          packs.map((card) => (
            <PaymentCardItem
              selected={value === card.id}
              handlePress={() => onChange(card.id)}
              pack={card}
            />
          ))
        )}
      </div>
    </div>
  );
}
