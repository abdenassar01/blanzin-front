import { OrderCard, SidebarFilter } from '@/components';
import React from 'react';

export default function OrdersPage() {
  return (
    <div className='container'>
      <div className='w-full py-12'>
        <SidebarFilter />
        <div className='flex w-full flex-wrap justify-between gap-y-6 overflow-y-scroll p-2 sm:mb-6'>
          <OrderCard
            createdAt={new Date()}
            desc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum sapiente asperiores enim vero eaque exercitationem, rerum quos tempora dolores error qui odio? Repellendus modi quos suscipit sapiente aliquam nemo iusto.'
            image='/house.jpg'
            location='Marrakech'
            orderTitle='This is the order title'
            className='w-[32%] sm:w-full'
          />
          <OrderCard
            createdAt={new Date()}
            desc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum sapiente asperiores enim vero eaque exercitationem, rerum quos tempora dolores error qui odio? Repellendus modi quos suscipit sapiente aliquam nemo iusto.'
            image='/house.jpg'
            location='Marrakech'
            orderTitle='This is the order title'
            className='w-[32%] sm:w-full'
          />
          <OrderCard
            createdAt={new Date()}
            desc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum sapiente asperiores enim vero eaque exercitationem, rerum quos tempora dolores error qui odio? Repellendus modi quos suscipit sapiente aliquam nemo iusto.'
            image='/house.jpg'
            location='Marrakech'
            orderTitle='This is the order title'
            className='w-[32%] sm:w-full'
          />
          <OrderCard
            createdAt={new Date()}
            desc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum sapiente asperiores enim vero eaque exercitationem, rerum quos tempora dolores error qui odio? Repellendus modi quos suscipit sapiente aliquam nemo iusto.'
            image='/house.jpg'
            location='Marrakech'
            orderTitle='This is the order title'
            className='w-[32%] sm:w-full'
          />
          <OrderCard
            createdAt={new Date()}
            desc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum sapiente asperiores enim vero eaque exercitationem, rerum quos tempora dolores error qui odio? Repellendus modi quos suscipit sapiente aliquam nemo iusto.'
            image='/house.jpg'
            location='Marrakech'
            orderTitle='This is the order title'
            className='w-[32%] sm:w-full'
          />
          <OrderCard
            createdAt={new Date()}
            desc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum sapiente asperiores enim vero eaque exercitationem, rerum quos tempora dolores error qui odio? Repellendus modi quos suscipit sapiente aliquam nemo iusto.'
            image='/house.jpg'
            location='Marrakech'
            orderTitle='This is the order title'
            className='w-[32%] sm:w-full'
          />
          <OrderCard
            createdAt={new Date()}
            desc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum sapiente asperiores enim vero eaque exercitationem, rerum quos tempora dolores error qui odio? Repellendus modi quos suscipit sapiente aliquam nemo iusto.'
            image='/house.jpg'
            location='Marrakech'
            orderTitle='This is the order title'
            className='w-[32%] sm:w-full'
          />
          <OrderCard
            createdAt={new Date()}
            desc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum sapiente asperiores enim vero eaque exercitationem, rerum quos tempora dolores error qui odio? Repellendus modi quos suscipit sapiente aliquam nemo iusto.'
            image='/house.jpg'
            location='Marrakech'
            orderTitle='This is the order title'
            className='w-[32%] sm:w-full'
          />
          <OrderCard
            createdAt={new Date()}
            desc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum sapiente asperiores enim vero eaque exercitationem, rerum quos tempora dolores error qui odio? Repellendus modi quos suscipit sapiente aliquam nemo iusto.'
            image='/house.jpg'
            location='Marrakech'
            orderTitle='This is the order title'
            className='w-[32%] sm:w-full'
          />
        </div>
      </div>
    </div>
  );
}
