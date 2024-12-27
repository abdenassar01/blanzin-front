'use client'

import { cn, useOutsideClick } from '@/utils'
import Image from 'next/image'
import React, { useRef, useState } from 'react'

interface Props {
  text: string
}

export function FormConrolPopoverExplaination({ text }: Props) {
  const [showPopOver, setShowPopOver] = useState<boolean>(false)
  const ref = useRef(null)
  useOutsideClick(ref, () => setShowPopOver(false))

  return (
    <div ref={ref} className='relative '>
      <button onClick={() => setShowPopOver(prev => !prev)}>
        <Image
          width={50}
          height={50}
          src={require('@/assets/images/icons/light/popover.svg')}
          className='aspect-square w-6'
          alt={text}
        />
      </button>
      <div
        className={cn(
          'absolute left-8 top-0  z-50 rounded bg-white p-2 shadow-lg transition-all duration-300 ease-in-out dark:bg-backgroundDark sm:-left-20 sm:top-7 ',
          showPopOver ? 'w-[300px]' : 'w-0 p-0',
        )}>
        <div className={cn('w-full', !showPopOver ? 'hidden' : '')}>{text}</div>
      </div>
    </div>
  )
}
