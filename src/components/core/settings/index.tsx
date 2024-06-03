'use client';

import React from 'react';
import { AppearanceTab, NewProfile, SecurityTab } from './tabs';

type Props = {
  selected: 'security' | 'new-profile' | 'appearance';
};

export function SettingSelectedTab({ selected }: Props) {
  function getSelectedTab() {
    switch (selected) {
      case 'security':
        return <SecurityTab />;
      case 'appearance':
        return <AppearanceTab />;
      case 'new-profile':
        return <NewProfile />;
    }
  }

  return (
    <div className='rounded-xl bg-background p-3 dark:bg-backgroundSecondaryDark'>
      {getSelectedTab()}
    </div>
  );
}
