import { Button, Heading, OrderCard, SidebarFilter } from '@/components';
import React from 'react';

export default function OrdersPage() {
  return (
    <div className='container py-12'>
      <div className='mb-4 text-xxm'>
        <Heading heading='Orders list' className='text-center font-normal' />
      </div>
      <div className='flex h-[100vh] w-full gap-8 sm:flex-col sm:gap-2'>
        <SidebarFilter />
        <div className='no-scrollbar w-full overflow-y-scroll'>
          <div className='flex w-full  flex-wrap justify-between gap-6 gap-y-14 overflow-y-scroll sm:mb-6'>
            <OrderCard
              createdAt={new Date()}
              desc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum sapiente asperiores enim vero eaque exercitationem, rerum quos tempora dolores error qui odio? Repellendus modi quos suscipit sapiente aliquam nemo iusto.'
              image='/house.jpg'
              location='Marrakech'
              orderTitle='This is the order title'
              className='w-[30%] sm:w-full'
            />
            <OrderCard
              createdAt={new Date()}
              desc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum sapiente asperiores enim vero eaque exercitationem, rerum quos tempora dolores error qui odio? Repellendus modi quos suscipit sapiente aliquam nemo iusto.'
              image='/house.jpg'
              location='Marrakech'
              orderTitle='This is the order title'
              className='w-[30%] sm:w-full'
            />
            <OrderCard
              createdAt={new Date()}
              desc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum sapiente asperiores enim vero eaque exercitationem, rerum quos tempora dolores error qui odio? Repellendus modi quos suscipit sapiente aliquam nemo iusto.'
              image='/house.jpg'
              location='Marrakech'
              orderTitle='This is the order title'
              className='w-[30%] sm:w-full'
            />
            <OrderCard
              createdAt={new Date()}
              desc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum sapiente asperiores enim vero eaque exercitationem, rerum quos tempora dolores error qui odio? Repellendus modi quos suscipit sapiente aliquam nemo iusto.'
              image='/house.jpg'
              location='Marrakech'
              orderTitle='This is the order title'
              className='w-[30%] sm:w-full'
            />
            <OrderCard
              createdAt={new Date()}
              desc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum sapiente asperiores enim vero eaque exercitationem, rerum quos tempora dolores error qui odio? Repellendus modi quos suscipit sapiente aliquam nemo iusto.'
              image='/house.jpg'
              location='Marrakech'
              orderTitle='This is the order title'
              className='w-[30%] sm:w-full'
            />
            <OrderCard
              createdAt={new Date()}
              desc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum sapiente asperiores enim vero eaque exercitationem, rerum quos tempora dolores error qui odio? Repellendus modi quos suscipit sapiente aliquam nemo iusto.'
              image='/house.jpg'
              location='Marrakech'
              orderTitle='This is the order title'
              className='w-[30%] sm:w-full'
            />
            <OrderCard
              createdAt={new Date()}
              desc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum sapiente asperiores enim vero eaque exercitationem, rerum quos tempora dolores error qui odio? Repellendus modi quos suscipit sapiente aliquam nemo iusto.'
              image='/house.jpg'
              location='Marrakech'
              orderTitle='This is the order title'
              className='w-[30%] sm:w-full'
            />
            <OrderCard
              createdAt={new Date()}
              desc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum sapiente asperiores enim vero eaque exercitationem, rerum quos tempora dolores error qui odio? Repellendus modi quos suscipit sapiente aliquam nemo iusto.'
              image='/house.jpg'
              location='Marrakech'
              orderTitle='This is the order title'
              className='w-[30%] sm:w-full'
            />
            <OrderCard
              createdAt={new Date()}
              desc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum sapiente asperiores enim vero eaque exercitationem, rerum quos tempora dolores error qui odio? Repellendus modi quos suscipit sapiente aliquam nemo iusto.'
              image='/house.jpg'
              location='Marrakech'
              orderTitle='This is the order title'
              className='w-[30%] sm:w-full'
            />
            <div className='flex w-full items-center justify-center'>
              <div className=''>
                <Button className='px-7' text='Load more ...' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
