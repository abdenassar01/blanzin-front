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
    <div className='my-3 '>
      <ReactSpeedometer
        value={value}
        width={isMobile ? 200 : 300}
        segmentColors={[
          '#FFD432',
          '#FFD432',
          '#FFD432',
          '#70A44A',
          '#70A44A',
          '#70A44A',
          '#70A44A',
          '#ED1C24',
          '#ED1C24',
          '#ED1C24',
        ]}
        minValue={0}
        segmentValueFormatter={(textValue) =>
          textValue === value.toString() ? `${value}%` : ''
        }
        segments={10}
        maxValue={100}
        valueFormat={''}
        needleHeightRatio={0.7}
        needleColor={theme === 'dark' ? colors.white : colors.secondary}
        needleTransitionDuration={500}
        textColor={theme === 'dark' ? colors.main : colors.mainText}
      />
    </div>
  );
}
