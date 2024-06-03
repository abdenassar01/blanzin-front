import React, { Dispatch, SetStateAction, useMemo, useState } from 'react';

import { TranslatedText } from '../..';
import { RoleType, RootApplicationRole } from '../../../../../constants/role';
import { useTheme } from 'next-themes';
import { cn } from '@/utils';
import Image from 'next/image';

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

  return (
    <>
      <div
        onClick={() => {
          onSelectedUpdate();
          setExpands((prev) => !prev);
        }}
        className={cn(
          'flex w-full cursor-pointer items-center rounded-xl',
          selected
            ? 'bg-success'
            : 'bg-backgroundSecondary dark:bg-backgroundSecondaryDark'
        )}
        key={`role-tab-${value}`}
      >
        <div className=''>
          <Image
            alt=''
            className='h-[100px] w-[100px] '
            src={isDark ? darkIcon : icon}
          />
        </div>
        <TranslatedText
          className={cn(
            'font-bold capitalize',
            selected
              ? 'text-backgroundSecondary dark:text-backgroundSecondaryDark'
              : 'text-secondary dark:text-main'
          )}
          tranlationKey={value.replaceAll('_', ' ')}
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
                onClick={() => {}}
                className={cn(
                  'my-1 flex w-[49%] flex-col items-center rounded-xl py-2',
                  true
                    ? 'bg-chat'
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
                    'font-bold capitalize',
                    //currentProfile === item.role
                    true
                      ? 'text-backgroundSecondary dark:text-backgroundSecondaryDark'
                      : 'text-secondary dark:text-main'
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
