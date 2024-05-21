'use client';

import * as React from 'react';
// eslint-disable-next-line import/no-unresolved
import { CountryCode } from 'libphonenumber-js/types';
import Flags from 'country-flag-icons/react/3x2';
import { countries } from 'country-data';
import { getCountryCallingCode } from 'react-phone-number-input/input';

type Props = {
  onClick: () => void;
  country: CountryCode;
};

export function DropDownItem({ onClick, country }: Props) {
  const Flag = Flags[country];
  return (
    <div
      onClick={onClick}
      className='flex max-w-[100%] list-none gap-2 px-[2vw] py-[1vw] hover:bg-[#dadadb]'
    >
      <Flag width={25} />
      <div className=''>
        {countries[country].name} ( + {getCountryCallingCode(country)} )
      </div>
    </div>
  );
}
