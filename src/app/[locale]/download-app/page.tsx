'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
  const { replace } = useRouter();

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();

    if (
      userAgent.includes('iphone') ||
      userAgent.includes('ipad') ||
      userAgent.includes('ipod') ||
      userAgent.includes('macintosh')
    ) {
      replace('https://www.apple.com/app-store/');
    } else {
      replace('https://play.google.com/store/games?hl=en&pli=1');
    }
  }, []);

  return <div></div>;
}
