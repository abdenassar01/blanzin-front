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
        'font-[500] hover:text-main dark:hover:text-white',
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
  );
}
