import { SettingSelectedTab, SettingsSidebar } from '@/components';
import React from 'react';

type Props = {
  searchParams: { tab: 'security' | 'new-profile' | 'appearance' };
};

export default function SettingsPage({ searchParams: { tab } }: Props) {
  return (
    <div className='flex gap-8'>
      <div className='w-[20%]'>
        <SettingsSidebar />
      </div>
      <div className='w-full'>
        <SettingSelectedTab selected={tab} />
      </div>
    </div>
  );
}
