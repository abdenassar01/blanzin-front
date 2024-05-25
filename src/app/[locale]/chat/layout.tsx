import { LayoutProps } from '@/types';
import { cn, truncateString } from '@/utils';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import React, { use } from 'react';

const users = [
  {
    avatar: '/job-image.jpg',
    name: 'Jon Doa',
    lastMessage: 'Hey, I need you to send me the papers to sign them.',
  },
  {
    avatar: '/job-image.jpg',
    name: 'Jon Doa',
    lastMessage: 'Hey, I need you to send me the papers to sign them.',
  },
  {
    avatar: '/job-image.jpg',
    name: 'Jon Doa',
    lastMessage: 'Hey, I need you to send me the papers to sign them.',
  },
  {
    avatar: '/job-image.jpg',
    name: 'Jon Doa',
    lastMessage: 'Hey, I need you to send me the papers to sign them.',
  },
  {
    avatar: '/job-image.jpg',
    name: 'Jon Doa',
    lastMessage: 'Hey, I need you to send me the papers to sign them.',
  },
  {
    avatar: '/job-image.jpg',
    name: 'Jon Doa',
    lastMessage: 'Hey, I need you to send me the papers to sign them.',
  },
  {
    avatar: '/job-image.jpg',
    name: 'Jon Doa',
    lastMessage: 'Hey, I need you to send me the papers to sign them.',
  },
  {
    avatar: '/job-image.jpg',
    name: 'Jon Doa',
    lastMessage: 'Hey, I need you to send me the papers to sign them.',
  },
  {
    avatar: '/job-image.jpg',
    name: 'Jon Doa',
    lastMessage: 'Hey, I need you to send me the papers to sign them.',
  },
  {
    avatar: '/job-image.jpg',
    name: 'Jon Doa',
    lastMessage: 'Hey, I need you to send me the papers to sign them.',
  },
  {
    avatar: '/job-image.jpg',
    name: 'Jon Doa',
    lastMessage: 'Hey, I need you to send me the papers to sign them.',
  },
  {
    avatar: '/job-image.jpg',
    name: 'Jon Doa',
    lastMessage: 'Hey, I need you to send me the papers to sign them.',
  },
  {
    avatar: '/job-image.jpg',
    name: 'Jon Doa',
    lastMessage: 'Hey, I need you to send me the papers to sign them.',
  },
  {
    avatar: '/job-image.jpg',
    name: 'Jon Doa',
    lastMessage: 'Hey, I need you to send me the papers to sign them.',
  },
  {
    avatar: '/job-image.jpg',
    name: 'Jon Doa',
    lastMessage: 'Hey, I need you to send me the papers to sign them.',
  },
  {
    avatar: '/job-image.jpg',
    name: 'Jon Doa',
    lastMessage: 'Hey, I need you to send me the papers to sign them.',
  },
  {
    avatar: '/job-image.jpg',
    name: 'Jon Doa',
    lastMessage: 'Hey, I need you to send me the papers to sign them.',
  },
  {
    avatar: '/job-image.jpg',
    name: 'Jon Doa',
    lastMessage: 'Hey, I need you to send me the papers to sign them.',
  },
  {
    avatar: '/job-image.jpg',
    name: 'Jon Doa',
    lastMessage: 'Hey, I need you to send me the papers to sign them.',
  },
  {
    avatar: '/job-image.jpg',
    name: 'Jon Doa',
    lastMessage: 'Hey, I need you to send me the papers to sign them.',
  },
  {
    avatar: '/job-image.jpg',
    name: 'Jon Doa',
    lastMessage: 'Hey, I need you to send me the papers to sign them.',
  },
];

export default function layout({ children }: LayoutProps) {
  const headersList = headers();
  const url = headersList.get('referer') || '';

  return (
    <div className='my-12 sm:my-6'>
      <div className='container text-text dark:text-textdark'>
        <div className='flex h-[80vh] rounded-xl bg-backgroundSecondary dark:bg-backgroundDark'>
          <div
            className={cn(
              'flex w-[35%] flex-col gap-2 overflow-y-scroll p-2 sm:w-full',
              url.includes('chat/') ? 'sm:hidden' : ''
            )}
          >
            {React.Children.toArray(
              users.map((user) => (
                <div className='flex flex-col items-center gap-2'>
                  <Link
                    href='/chat/user-name'
                    className='flex w-full items-start gap-4'
                  >
                    <Image
                      alt={user.name}
                      src={user.avatar}
                      width={100}
                      height={100}
                      className='aspect-square w-[50px] rounded-full'
                    />
                    <div className=''>
                      <div className=''>
                        <span className='font-medium'>{user.name}</span>
                      </div>
                      <div className=''>
                        <span className='text-xs'>
                          {truncateString(user.lastMessage, 30)}
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div className='h-[.5px] w-full bg-background dark:bg-backgroundSecondaryDark' />
                </div>
              ))
            )}
          </div>
          <div
            className={cn(
              'w-full border-l-[1px] border-border sm:hidden',
              url.includes('chat/') ? 'sm:block sm:border-none' : ''
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
