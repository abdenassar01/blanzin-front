'use client'

import colors from '@/configs/colors'
import { useTheme } from 'next-themes'
import GaugeComponent from 'react-gauge-component'

type Props = {
  value: number
}

export function ProfileProgress({ value }: Props) {
  const { theme } = useTheme()

  return (
    <div className='my-3 flex w-full items-center justify-center'>
      <GaugeComponent
        type='radial'
        arc={{
          colorArray: ['#70A44A', '#ED1C24'],
          padding: 0.02,
          subArcs: [{ limit: value }, { limit: 100 }],
        }}
        className='text-main'
        pointer={{ type: 'needle', animationDelay: 0, color: '#70A44A' }}
        value={value}
        labels={{
          valueLabel: {
            style: {
              fill: colors.secondary,
              fontSize: 34,
              fontWeight: 700,
              textShadow: 'none',
            },
          },
        }}
        minValue={0}
        maxValue={100}
      />
    </div>
  )
}
