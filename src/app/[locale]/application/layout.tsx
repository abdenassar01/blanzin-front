import { CheckRequirement } from '@/components';
import { LayoutProps } from '@/types';
import React from 'react';

export default function ApplicationLayout({ children }: LayoutProps) {
  return (
    <div className=''>
      <div className=''>{children}</div>
    </div>
  );
}
