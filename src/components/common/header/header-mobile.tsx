'use client';

import Image from 'next/image';
import React from 'react';

export default function HeaderMobile() {
  return (
    <div className='hidden sm:flex'>
      <button>
        <Image
          width={40}
          height={40}
          className='w-[7vw] '
          alt=''
          src='/menu.svg'
        />
      </button>
    </div>
  );
}
