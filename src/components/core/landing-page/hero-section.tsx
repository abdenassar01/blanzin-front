import { Button } from '@/components';
import Link from 'next/link';
import React from 'react';
import { VideoPlayer } from './video-player';

type Props = {
  header: string;
  action: string;
  href: string;
};

export function HeroSection({ action, header, href }: Props) {
  return (
    <div className='main-background-gradient container my-12 mb-6 flex w-full items-center justify-center rounded-3xl bg-main py-12 shadow-md shadow-secondary'>
      <div className='flex w-full flex-row-reverse gap-10 px-12 sm:flex-col'>
        <VideoPlayer />
        <div className='flex w-full flex-col justify-center gap-10'>
          <h3 className='w-[70%] whitespace-pre-line text-xxl font-bold text-secondary sm:w-full'>
            {header}
          </h3>
          <div className='w-[50%] md:w-full sm:w-full'>
            <Button className='group rounded-xl' theme='secondary'>
              <Link
                className='font-semibold text-main group-hover:text-secondary'
                href={href}
              >
                {action}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
