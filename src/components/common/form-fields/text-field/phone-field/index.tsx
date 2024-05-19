// 'use client';

// import React, { useState } from 'react';
// import { Control, Controller } from 'react-hook-form';

// import 'react-phone-number-input/style.css';

// import {
//   getCountries,
//   getCountryCallingCode,
// } from 'react-phone-number-input/input';

// import { CountryCode } from 'libphonenumber-js/types';
// import { cn } from '@/utils';
// import { DropDownItem } from './drop-down-item';
// import getUnicodeFlagIcon from 'country-flag-icons/unicode';

// type InputProps = {
//   control: Control<any>;
//   name?: string;
//   label: string;
//   className?: string;
// };

// export function FieldPhoneWithCountry({
//   control,
//   name,
//   label,
//   className,
// }: InputProps) {
//   const [countryCode, setCountryCode] = useState<CountryCode>('MA');
//   const [openDropdown, setOpenDropDown] = useState<boolean>(false);

//   const handleSelectCountry = (country: CountryCode) => {
//     setCountryCode(country);
//     setOpenDropDown(false);
//   };

//   return (
//     <Controller
//       defaultValue={{
//         countryCode: 212,
//         phone: '',
//       }}
//       control={control}
//       name={name || ''}
//       render={({ field: { value, onChange, name }, fieldState: { error } }) => (
//         <div className={cn('flex w-full flex-col gap-2', className || '')}>
//           <label
//             htmlFor={name}
//             className={cn('text-cardText text-xs font-bold sm:text-mb-xbase')}
//           >
//             {label}
//           </label>
//           <div className='relative w-full'>
//             <div className='flex w-full items-center gap-2 sm:h-[14.078vw]'>
//               <div
//                 className={cn(
//                   'flex w-[8vw] items-center gap-2 text-xs text-[#A6A6A6] sm:w-[23.058vw] sm:text-mb-base',
//                   value && 'text-black'
//                 )}
//                 onClick={() => setOpenDropDown((prev) => !prev)}
//               >
//                 {getUnicodeFlagIcon(countryCode)}+
//                 {getCountryCallingCode(countryCode)}
//               </div>
//               <input
//                 onChange={(e) =>
//                   onChange({
//                     countryCode: `+${getCountryCallingCode(countryCode)}`,
//                     phone: e.target.value,
//                   })
//                 }
//                 type='text'
//                 value={value?.phone}
//                 name={name}
//                 className={cn(
//                   'w-full rounded-[10px] border-none bg-white px-[24px] py-[16px] text-sm leading-4 sm:p-[5.097vw] sm:text-mb-xxs',
//                   className || '',
//                   (error && 'border-red-600') || ''
//                 )}
//               />
//             </div>
//             <div
//               className={cn(
//                 'absolute z-[10] h-[200px] w-full overflow-x-hidden bg-white',
//                 (!openDropdown && 'hidden') || ''
//               )}
//             >
//               <div>
//                 {getCountries().map((country: CountryCode) => (
//                   <DropDownItem
//                     key={country}
//                     onClick={() => handleSelectCountry(country)}
//                     country={country}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//           <p className='h-[1.667vw] text-xxs text-error'>{error?.message}</p>
//         </div>
//       )}
//     />
//   );
// }
