import { OrderCard, SidebarFilter } from '@/components';
import React from 'react';

export default function OrdersPage() {
  return (
    <div className='container'>
      <div className='flex w-full sm:flex-col'>
        <SidebarFilter />
        <div className='flex w-full flex-wrap justify-between gap-y-5 overflow-y-scroll p-2'>
          <OrderCard
            createdAt={new Date()}
            desc='Hallo'
            image='/house.jpg'
            location='Marrakech'
            orderTitle='This is the order title'
            className='w-[32%]'
          />
          <OrderCard
            createdAt={new Date()}
            desc='Hallo'
            image='/house.jpg'
            location='Marrakech'
            orderTitle='This is the order title'
            className='w-[32%]'
          />
          <OrderCard
            createdAt={new Date()}
            desc='Hallo'
            image='/house.jpg'
            location='Marrakech'
            orderTitle='This is the order title'
            className='w-[32%]'
          />
          <OrderCard
            createdAt={new Date()}
            desc='Hallo'
            image='/house.jpg'
            location='Marrakech'
            orderTitle='This is the order title'
            className='w-[32%]'
          />
          <OrderCard
            createdAt={new Date()}
            desc='Hallo'
            image='/house.jpg'
            location='Marrakech'
            orderTitle='This is the order title'
            className='w-[32%]'
          />
          <OrderCard
            createdAt={new Date()}
            desc='Hallo'
            image='/house.jpg'
            location='Marrakech'
            orderTitle='This is the order title'
            className='w-[32%]'
          />
        </div>
      </div>
    </div>
  );
}
