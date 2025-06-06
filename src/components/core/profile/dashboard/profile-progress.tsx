'use client';

import * as React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';
import colors from '@/configs/colors';
import { useTheme } from 'next-themes';
import { isMobile } from 'react-device-detect';

type Props = {
  value: number;
};

export function ProfileProgress({ value }: Props) {
  const { theme } = useTheme();

  return (
    <div className='my-3 flex w-full items-center justify-center'>
      <ReactSpeedometer
        value={value}
        width={isMobile ? 250 : 300}
        startColor='#ED1C24'
        endColor='#70A44A'
        ringWidth={25}
        height={190}
        minValue={0}
        segments={222}
        segmentValueFormatter={(textValue) =>
          textValue === value.toString() ? `${textValue}%` : ''
        }
        maxValue={100}
        valueFormat={''}
        needleHeightRatio={0.8}
        needleColor={theme === 'dark' ? colors.white : colors.secondary}
        needleTransitionDuration={500}
        textColor={theme === 'dark' ? colors.main : colors.mainText}
      />
    </div>
  );
}
