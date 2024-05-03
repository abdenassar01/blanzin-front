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
};

export function ActiveLink({
  link,
  className,
  children,
  activeClassName,
  active,
}: Props) {
  const pathname = usePathname();

  return (
    <Link
      className={cn(
        'font-[500] hover:text-secondary dark:hover:text-main',
        className,
        (
          active
            ? ['/customer', '/expert', '/trainee', '/employee'].includes(
                pathname
              )
            : pathname.startsWith(link)
        )
          ? cn('text-secondary dark:text-main', activeClassName)
          : ' text-text dark:text-textdark'
      )}
      href={link}
    >
      {children}
    </Link>
  );
}
