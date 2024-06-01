import { ResumeeViewer } from '@/components';
import React from 'react';

export default function ProfileResume() {
  return (
    <div className='min-h-[25vw] rounded-xl bg-backgroundSecondary p-4 dark:bg-backgroundDark'>
      <ResumeeViewer />
    </div>
  );
}
