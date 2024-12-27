'use client';

import { cn } from '@/utils';
import Link from 'next/link';
import { ReactNode } from 'react';
import { usePathname } from '@/navigation';
import { useCurrentLocale } from '@/utils/locales/client';

type Props = {
  className?: string;
  children: ReactNode;
  link: string;
  activeClassName?: string;
  active?: boolean;
  suffix?: string;
  disableHover?: boolean;
};

export function ActiveLink({
  link,
  className,
  children,
  activeClassName,
  disableHover,
  suffix,
}: Props) {
  const pathname = usePathname();

  const locale = useCurrentLocale();

  return (
    <div className='group'>
      <Link
        className={cn(
          'font-[500] ',
          className,
          (link === '/' && pathname === link) ||
            (link !== '/' && pathname.includes(link))
            ? cn('text-main dark:text-white', activeClassName)
            : ' text-secondary dark:text-main',
          ''
        )}
        href={link + suffix}
      >
        {children}
      </Link>
      {!disableHover && (
        <div className='h-0.5 w-0 rounded-full bg-secondary transition-all duration-300 group-hover:w-full dark:bg-main' />
      )}
    </div>
  );
}
