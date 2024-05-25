import { cn } from '@/utils';
import Image from 'next/image';
import React from 'react';

const dms = [
  { message: 'Hello world', date: new Date(2024, 4, 1), sender: 'me' },
  { message: 'Hello world', date: new Date(2024, 4, 1), sender: 'me' },
  { message: 'Hello world', date: new Date(2024, 4, 1), sender: 'joan doa' },
  { message: 'Hello world', date: new Date(2024, 4, 1), sender: 'me' },
  { message: 'Hello world', date: new Date(2024, 4, 1), sender: 'joan doa' },
  { message: 'Hello world', date: new Date(2024, 4, 1), sender: 'joan doa' },
  {
    message: 'Hello world',
    date: new Date(2024, 4, 1),
    img: '/job-image.jpg',
    sender: 'me',
  },
  {
    message:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, porro eius aliquid quo incidunt impedit repellendus perferendis ea, nobis quod rerum nam vel laudantium, iusto laboriosam tempora reiciendis quaerat. Commodi.',
    date: new Date(2024, 4, 2),
    sender: 'joan doa',
  },
  { message: 'Hello world', date: new Date(2024, 4, 1), sender: 'me' },
  { message: 'Hello world', date: new Date(2024, 5, 1), sender: 'joan doa' },
  {
    message:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, porro eius aliquid quo incidunt impedit repellendus perferendis ea, nobis quod rerum nam vel laudantium, iusto laboriosam tempora reiciendis quaerat. Commodi.',
    date: new Date(2024, 4, 2),
    sender: 'me',
  },
];

export default function page() {
  return (
    <div className='flex h-full max-h-[90vh] w-full flex-col justify-between p-2'>
      <div className='flex h-fit items-start gap-2 rounded-full bg-background p-2 dark:bg-backgroundSecondaryDark'>
        <Image
          alt=''
          src='/job-image.jpg'
          width={80}
          height={80}
          className='aspect-square w-[50px] rounded-full'
        />
        <div className=''>
          <div className='flex items-center gap-2'>
            <span className='text-base font-medium'>Joan Doa</span>
            <div className='h-3 w-3 rounded-full bg-success' />
          </div>
          <div className=''>
            <span className='text-xs'>Active now</span>
          </div>
        </div>
      </div>
      <div className='h-full overflow-y-scroll p-2'>
        {React.Children.toArray(
          dms.map((message) => (
            <div
              className={cn(
                'my-1 flex w-full',
                message.sender === 'me' ? 'justify-start ' : 'justify-end'
              )}
            >
              <div
                className={cn(
                  ' max-w-[80%] rounded-xl p-2',
                  message.sender === 'me'
                    ? 'rounded-bl-none bg-secondary text-background'
                    : 'rounded-br-none bg-main text-backgroundDark'
                )}
              >
                <span>{message.message}</span>
                {message.img && (
                  <Image
                    alt=''
                    src={message.img}
                    width={200}
                    height={200}
                    className='rounded-xl'
                  />
                )}
              </div>
            </div>
          ))
        )}
      </div>
      <div className='flex gap-1 rounded-full bg-background p-2 dark:bg-backgroundSecondaryDark'>
        <div className=''>
          <Image
            alt=''
            src={require('@/assets/images/icons/dark/attachments.svg')}
            className='w-[35px] rounded-full bg-secondary p-2 dark:bg-main'
          />
        </div>
        <input
          className='w-full bg-[transparent] text-base text-text focus:border-none focus:outline-none dark:text-textdark'
          name=''
          id=''
        />
        <div className=''>
          <Image
            alt=''
            src={require('@/assets/images/icons/dark/message.svg')}
            className='w-[35px] rounded-full bg-secondary p-2 dark:bg-main'
          />
        </div>
      </div>
    </div>
  );
}
