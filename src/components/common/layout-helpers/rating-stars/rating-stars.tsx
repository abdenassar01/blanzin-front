import { cn } from '@/utils';
import Image from 'next/image';
import React from 'react';

type Props = {
  rating: number;
  size?: number;
  textClassName?: string;
};

export function RatingStars({ rating, textClassName, size = 15 }: Props) {
  return (
    <div style={{ gap: 2 }} className='flex items-center'>
      <span className={cn('mr-1.5 text-xs', textClassName)}>{rating}</span>
      {React.Children.toArray(
        [...Array(Math.floor(rating))].map(() => (
          <Image
            alt=''
            style={{ height: size, width: size }}
            src={require('@/assets/images/icons/star-filled.svg')}
          />
        ))
      )}
      {rating > Math.floor(rating) && (
        <Image
          alt=''
          style={{ height: size, width: size }}
          src={require('@/assets/images/icons/star-half.svg')}
        />
      )}
      {React.Children.toArray(
        [...Array(Math.floor(5 - rating))].map(() => (
          <Image
            alt=''
            style={{ height: size, width: size }}
            src={require('@/assets/images/icons/star-empty.svg')}
          />
        ))
      )}
    </div>
  );
}
