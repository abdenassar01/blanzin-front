'use client';

import React, { useState } from 'react';
import { FieldValues, useController } from 'react-hook-form';

import 'react-phone-number-input/style.css';

import {
  getCountries,
  getCountryCallingCode,
} from 'react-phone-number-input/input';
import Flags from 'country-flag-icons/react/3x2';
// eslint-disable-next-line import/no-unresolved
import { CountryCode } from 'libphonenumber-js/types';
import { DropDownItem } from './drop-down-item';
import { FormField } from '@/types';
import Image from 'next/image';
import { cn } from '@/utils';

type InputProps<V extends FieldValues> = {
  label: string;
  className?: string;
  placeholder?: string;
  inputClassName?: string;
} & FormField<V>;

export function PhoneField<V extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  className,
  inputClassName,
}: InputProps<V>) {
  const [countryCode, setCountryCode] = useState<CountryCode>('MA');
  const [openDropdown, setOpenDropDown] = useState<boolean>(false);
  const Flag = Flags[countryCode];

  const handleSelectCountry = (country: CountryCode) => {
    setCountryCode(country);
    setOpenDropDown(false);
  };

  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({ name, control });

  return (
    <div className={cn('group relative flex w-[100%] flex-col', className)}>
      <label
        htmlFor={name}
        className={cn('text-sm font-bold text-secondary dark:text-main')}
      >
        {label}
      </label>
      <div className='relative w-full'>
        <div className='flex min-h-[56px] w-full items-center gap-2 rounded-lg bg-backgroundSecondary pl-2 dark:bg-backgroundDark sm:h-[14.078vw]'>
          <div
            className={cn(
              'flex items-center gap-2 rounded-xl bg-background p-2 text-xs text-text shadow-lg dark:bg-backgroundSecondaryDark dark:text-textdark dark:shadow-black'
            )}
            onClick={() => setOpenDropDown((prev) => !prev)}
          >
            <Flag width={40} height={30} /> +
            {getCountryCallingCode(countryCode)}
            <Image
              className='w-6'
              alt=''
              src={require('@/assets/images/icons/arrow-down.svg')}
            />
          </div>
          <input
            onChange={(e) =>
              onChange({
                countryCode: `+${getCountryCallingCode(countryCode)}`,
                phone: e.target.value,
              })
            }
            type='number'
            value={value?.phone}
            name={name}
            placeholder={placeholder}
            className={cn(
              'w-full rounded-[10px] border-none bg-background py-[16px] pl-1.5 pr-6 text-sm leading-4 shadow-lg focus:outline-none dark:bg-backgroundSecondaryDark dark:shadow-black sm:p-[5.097vw] sm:text-mb-xxs',
              inputClassName
            )}
          />
        </div>
        <div
          className={cn(
            'absolute top-[60px] z-20 w-full overflow-x-scroll rounded-lg bg-background transition-all duration-300 dark:bg-backgroundSecondaryDark',
            className,
            'w-full',
            !openDropdown ? 'h-[200px]' : 'h-0'
          )}
        >
          <div>
            {getCountries().map((country) => (
              <DropDownItem
                key={country}
                onClick={() => handleSelectCountry(country)}
                country={country}
              />
            ))}
          </div>
        </div>
      </div>
      {error && (
        <p className='text-xxs text-error'>{error?.message?.toString()}</p>
      )}
    </div>
  );
}
