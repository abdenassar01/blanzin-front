'use client';

import React from 'react';
import { Control, useController } from 'react-hook-form';
import { ROLE, RoleType } from '../../../../../constants/role';
import { useScopedI18n } from '@/utils/locales/client';
import { cn } from '@/utils';

type Props = {
  control: Control<any>;
  name: string;
  label: string;
};

const profiles: {
  label: 'customer' | 'expert' | 'trainee' | 'employee';
  role: RoleType;
}[] = [
  { label: 'customer', role: ROLE.CUSTOMER },
  { label: 'expert', role: ROLE.EXPERT },
  { label: 'trainee', role: ROLE.TRAINEE },
  { label: 'employee', role: ROLE.SKILLED_WORKER },
];

export function ProfileTabSelector({ control, label, name }: Props) {
  const t = useScopedI18n('role');

  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue: profiles[0].role,
  });

  return (
    <div className=''>
      <label
        htmlFor={name}
        className={cn('text-sm font-bold text-secondary dark:text-main')}
      >
        {label}
      </label>
      <div className='flex justify-between gap-2'>
        {React.Children.toArray(
          profiles.map((item) => (
            <div
              onClick={() => onChange(item.role)}
              className={cn(
                'flex w-[120px] cursor-pointer justify-center rounded border-[1px] py-1.5 text-sm text-secondary transition-all dark:text-textdark',
                value === item.role
                  ? 'border-main bg-main dark:text-secondary'
                  : 'border-secondary hover:border-main hover:text-main dark:border-textdark dark:hover:border-main dark:hover:text-main'
              )}
            >
              {t(item.label)}
            </div>
          ))
        )}
      </div>
      <p className='mb-[-1.667vw] h-[1.667vw] text-xxs text-error'>
        {error?.message}
      </p>
    </div>
  );
}
