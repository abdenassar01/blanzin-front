'use client';

import React from 'react';
import PaymentCardItem from './payment-card-item';

type Props = {};

const packs = [
  {
    id: 1,
    title: 'Basic',
    offers: [
      {
        text: 'Personal support with employer selection in Germany.',
        super: true,
        supported: true,
      },
      {
        text: 'Review and optimisation of application documents.',
        super: true,
        supported: true,
      },
      {
        text: 'Personal support and assistance from our experts.',
        supported: false,
        super: true,
      },
      { text: 'Job interviews', qte: 'x3', supported: true },
      {
        text: 'Video call counselling bevor the first interview',
        super: true,
        supported: false,
      },
    ],
    price: 1500,
  },
  {
    id: 2,
    recomended: true,

    title: 'Standard',
    offers: [
      {
        text: 'Personal support with employer selection in Germany.',
        super: true,
        supported: true,
      },
      {
        text: 'Review and optimisation of application documents.',
        super: true,
        supported: true,
      },
      {
        text: 'Personal support and assistance from our experts.',
        supported: true,
        super: true,
      },
      { text: 'Job interviews', qte: 'Unlimited', supported: true },
      {
        text: 'Video call counselling bevor the first interview',
        qte: 'x1',
        supported: true,
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
        supported: true,
      },
      {
        text: 'Review and optimisation of application documents.',
        super: true,
        supported: true,
      },
      {
        text: 'Personal support and assistance from our experts.',
        supported: true,
        super: true,
      },
      { text: 'Job interviews', qte: 'Unlimited', supported: true },
      {
        text: 'Video call counselling bevor the first interview',
        supported: true,
        qte: 'Unlimited',
      },
    ],
    price: 3500,
  },
];

export function PaymentCardsSelector({}: Props) {
  return (
    <div className='flex justify-between gap-3 sm:flex-col'>
      {React.Children.toArray(
        packs.map((card) => (
          <PaymentCardItem
            handlePress={() => console.log('hello')}
            pack={card}
          />
        ))
      )}
    </div>
  );
}
