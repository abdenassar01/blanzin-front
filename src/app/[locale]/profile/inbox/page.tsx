import { Heading, Map } from '@/components';
import { getScopedI18n } from '@/utils/locales/server';
import React from 'react';
import InboxFilter from './inbox-filter';
import { truncateString } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';

const dms = [
  {
    id: 1,
    title: 'This is the title of the dm. and it could be long',
    star: false,
    read: true,
    content:
      'Our packages offer different services and benefits to ensure that your application has the best possible success. Our packages offer different services and benefits to ensure that your application has the best possible success',
  },
  {
    id: 2,
    star: true,
    read: false,
    title: 'This is the title of the dm. and it could be long',
    content:
      'Our packages offer different services and benefits to ensure that your application has the best possible success. Our packages offer different services and benefits to ensure that your application has the best possible success',
  },
  {
    id: 3,
    star: true,
    read: true,
    title: 'This is the title of the dm. and it could be long',
    content:
      'Our packages offer different services and benefits to ensure that your application has the best possible success. Our packages offer different services and benefits to ensure that your application has the best possible success',
  },
  {
    id: 4,
    star: false,
    read: true,
    title: 'This is the title of the dm. and it could be long',
    content:
      'Our packages offer different services and benefits to ensure that your application has the best possible success. Our packages offer different services and benefits to ensure that your application has the best possible success',
  },
  {
    id: 5,
    star: false,
    read: false,
    title: 'This is the title of the dm. and it could be long',
    content:
      'Our packages offer different services and benefits to ensure that your application has the best possible success. Our packages offer different services and benefits to ensure that your application has the best possible success',
  },
  {
    id: 6,
    star: true,
    read: false,
    title: 'This is the title of the dm. and it could be long',
    content:
      'Our packages offer different services and benefits to ensure that your application has the best possible success. Our packages offer different services and benefits to ensure that your application has the best possible success',
  },
  {
    id: 7,
    star: false,
    read: true,
    title: 'This is the title of the dm. and it could be long',
    content:
      'Our packages offer different services and benefits to ensure that your application has the best possible success. Our packages offer different services and benefits to ensure that your application has the best possible success',
  },
  {
    id: 8,
    star: false,
    read: false,
    title: 'This is the title of the dm. and it could be long',
    content:
      'Our packages offer different services and benefits to ensure that your application has the best possible success. Our packages offer different services and benefits to ensure that your application has the best possible success',
  },
  {
    id: 9,
    star: true,
    read: false,
    title: 'This is the title of the dm. and it could be long',
    content:
      'Our packages offer different services and benefits to ensure that your application has the best possible success. Our packages offer different services and benefits to ensure that your application has the best possible success',
  },
  {
    id: 10,
    star: true,
    read: true,
    title: 'This is the title of the dm. and it could be long',
    content:
      'Our packages offer different services and benefits to ensure that your application has the best possible success. Our packages offer different services and benefits to ensure that your application has the best possible success',
  },
];

type Props = {
  searchParams: { tab: string };
};

export default async function MyInboxPage({ searchParams: { tab } }: Props) {
  const t = await getScopedI18n('profile');

  const getInboxes = () => {
    switch (tab) {
      case 'all':
        return dms;
      case 'unread':
        return dms.filter((item) => !item.read);
      case 'stars':
        return dms.filter((item) => item.star);
      default:
        return dms;
    }
  };

  return (
    <div className='min-h-[25vw] rounded-xl bg-backgroundSecondary p-4 dark:bg-backgroundDark'>
      <div className='text-xxm'>
        <Heading heading={t('inbox')} />
      </div>
      <InboxFilter />

      <div className='my-4 flex h-[40vh] flex-col gap-3 overflow-y-scroll p-1'>
        <Map
          items={getInboxes()}
          render={(item) => (
            <Link
              href='/profile/inbox/12'
              className='relative w-full rounded-lg bg-background p-2 shadow-xl dark:bg-backgroundSecondaryDark'
            >
              <div className='text-md text-justify text-text dark:text-textdark'>
                {truncateString(item.title, 35)}
              </div>
              <div className='w-[90%] text-justify text-xs'>
                {truncateString(item.content, 300)}
              </div>
              <div className=' absolute right-2 top-2'>
                <Image
                  alt=''
                  src={
                    item.star
                      ? require('@/assets/images/icons/star-filled.svg')
                      : require('@/assets/images/icons/star-empty.svg')
                  }
                  className='h-6 w-6'
                />
              </div>
            </Link>
          )}
        />
      </div>
    </div>
  );
}
