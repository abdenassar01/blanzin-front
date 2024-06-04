'use client';

import React, { useMemo, useState } from 'react';

import { TranslatedText } from '../..';
import { RoleType, RootApplicationRole } from '../../../../../constants/role';
import { useTheme } from 'next-themes';
import { cn } from '@/utils';
import Image from 'next/image';
import { useProfileTypeStore } from '@/modals/profile-type/profile-type';

type Props = {
  onSelectedUpdate: () => void;
  value: RootApplicationRole;
  icon: any;
  darkIcon: any;
  selected?: boolean;
  items: {
    role: RoleType;
    image: any;
    imageDark: any;
    label: string;
  }[];
};

export default function ProfileTypeSelectorItem({
  darkIcon,
  selected,
  icon,
  items,
  onSelectedUpdate,
  value,
}: Props) {
  const [expands, setExpands] = useState<boolean>(false);
  const { theme } = useTheme();
  const isDark = useMemo(() => theme === 'dark', [theme]);

  const { currentProfile, setCurrentProfile } = useProfileTypeStore();

  return (
    <>
      <div
        onClick={() => {
          onSelectedUpdate();
          setExpands((prev) => !prev);
        }}
        className={cn(
          'flex w-full cursor-pointer items-center justify-between rounded-xl bg-backgroundSecondary dark:bg-backgroundSecondaryDark',
          selected ? '' : ''
        )}
        key={`role-tab-${value}`}
      >
        <div className='flex items-center gap-2'>
          <Image
            alt=''
            className='h-[100px] w-[100px] '
            src={isDark ? darkIcon : icon}
          />
          <TranslatedText
            className={cn('font-bold capitalize text-secondary dark:text-main')}
            tranlationKey={value.replaceAll('_', ' ')}
          />
        </div>
        <Image
          className={cn(
            'icon mr-5 transition-all duration-300',
            expands ? '' : '-rotate-90'
          )}
          alt=''
          src={require('@/assets/images/icons/arrow-down.svg')}
        />
      </div>
      <div
        className={cn(
          'flex justify-between transition-all duration-500 ease-in',
          expands ? 'h-[120px]' : 'h-0 '
        )}
      >
        {expands &&
          React.Children.toArray(
            items.map((item) => (
              <button
                onClick={() => setCurrentProfile(item.role)}
                className={cn(
                  'my-1 flex w-[49%] flex-col items-center rounded-xl py-2',
                  currentProfile === item.role
                    ? 'bg-main dark:bg-secondary'
                    : 'bg-backgroundSecondary dark:bg-backgroundSecondaryDark'
                )}
              >
                <div className=''>
                  <Image
                    className='h-[70px] w-[70px] '
                    alt=''
                    src={isDark ? item.imageDark : item.image}
                  />
                </div>
                <TranslatedText
                  className={cn(
                    'font-bold capitalize text-secondary dark:text-main'
                  )}
                  tranlationKey={item.role.replaceAll('_', ' ')}
                />
              </button>
            ))
          )}
      </div>
    </>
  );
}
