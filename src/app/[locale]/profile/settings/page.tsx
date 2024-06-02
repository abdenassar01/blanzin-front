import { SettingsSidebar } from '@/components';
import React from 'react';

export default function SettingsPage() {
  return (
    <div className='flex'>
      <div className='w-[40%]'>
        <SettingsSidebar />
      </div>
      <div className=''>test</div>
    </div>
  );
}
