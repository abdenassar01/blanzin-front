import { Heading, SettingSelectedTab, SettingsSidebar } from '@/components';
import { getScopedI18n } from '@/utils/locales/server';
import React from 'react';

type Props = {
  searchParams: { tab: 'security' | 'new-profile' | 'appearance' };
};

export default async function SettingsPage({ searchParams: { tab } }: Props) {
  const t = await getScopedI18n('profile');

  return (
    <div className=''>
      <div className='text-xxm'>
        <Heading heading={t('settings')} />
      </div>
      <div className='mt-6 flex gap-8'>
        <div className='w-[30%]'>
          <SettingsSidebar />
        </div>
        <div className='w-full'>
          <SettingSelectedTab selected={tab} />
        </div>
      </div>
    </div>
  );
}
