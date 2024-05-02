import React from 'react';
import { TranslatedText } from '../..';
import { cn } from '@/utils';
import Link from 'next/link';

type Props = {
  url: string;
  text: string;
  className?: string;
  newTab?: boolean;
};

export function CustomLink({ text, url, className, newTab }: Props) {
  return (
    <Link
      className='cursor-pointer'
      href={url}
      target={newTab ? '_blank' : '_self'}
    >
      <TranslatedText
        className={cn(' text-[#4385ff]', className)}
        tranlationKey={text}
      />
    </Link>
  );
}
