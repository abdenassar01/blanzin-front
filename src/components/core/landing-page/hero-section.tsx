import { Button } from '@/components';
import Link from 'next/link';
import React from 'react';
import { VideoPlayer } from './video-player';
import { cn } from '@/utils';

type Props = {
  header: string;
  action: string;
  href: string;
  flipped?: boolean;
  video: string;
  thumbnail: string;
};

export function HeroSection({
  action,
  header,
  href,
  flipped,
  video,
  thumbnail,
}: Props) {
  return (
    <div
      dir='ltr'
      className={cn(
        ' container my-12 mb-6 flex w-full items-center justify-center rounded-3xl bg-main py-12 shadow-lg shadow-secondary dark:shadow-main',
        flipped
          ? 'main-background-gradient-flipped'
          : 'main-background-gradient'
      )}
    >
      <div
        className={cn(
          'flex w-full gap-10 px-12 sm:flex-col',
          flipped ? 'flex-row' : 'text flex-row-reverse'
        )}
      >
        <VideoPlayer thumbnail={thumbnail} video={video} />
        <div className='flex w-full flex-col items-center justify-center gap-10 text-secondary'>
          <h3
            className={cn(
              'whitespace-pre-line text-center text-xm font-medium'
            )}
          >
            {header}
          </h3>
          <div className='w-[50%] md:w-full sm:w-full'>
            <Button className='group' theme='secondary'>
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
