import { LayoutProps } from '@/types';
import React from 'react';

export default function layout({ children }: LayoutProps) {
  return (
    <div className='my-12'>
      <div className='container'>{children}</div>
    </div>
  );
}
