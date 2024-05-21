'use client';

import { usePathname } from '@/navigation';
import { cn } from '@/utils';
import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
  className?: string;
  children: ReactNode;
  link: string;
  activeClassName?: string;
  active?: boolean;
  disableHover?: boolean;
};

export function ActiveLink({
  link,
  className,
  children,
  activeClassName,
  active,
  disableHover,
}: Props) {
  const pathname = usePathname();

  return (
    <div className='group'>
      <Link
        className={cn(
          'font-[500] ',
          className,
          (
            active
              ? ['/customer', '/expert', '/trainee', '/employee'].includes(
                  pathname
                )
              : pathname.startsWith(link)
          )
            ? cn('text-main dark:text-white', activeClassName)
            : ' text-secondary dark:text-main',
          ''
        )}
        href={link}
      >
        {children}
      </Link>
      {!disableHover && (
        <div className='h-0.5 w-0 rounded-full bg-secondary transition-all duration-300 group-hover:w-full dark:bg-main' />
      )}
    </div>
  );
}
