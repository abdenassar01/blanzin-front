'use client'

import { truncateString } from '@/utils'
import React, { useState } from 'react'

type Props = {
  text: string
  length?: number
}

export function LongTextToggle({ text, length = 120 }: Props) {
  const [displayedText, setDisplayedText] = useState<string>(
    truncateString(text, length),
  )
  const [buttonText, setButtonText] = useState<string>('See More')

  const handleMoreClicked = () => {
    if (text === displayedText) {
      setDisplayedText(truncateString(text, length))
      setButtonText('See More')
    } else {
      setDisplayedText(text)
      setButtonText('See Less')
    }
  }

  return (
    <div>
      {displayedText}
      <span
        className='cursor-pointer text-[#5E77A0] transition-all'
        onClick={handleMoreClicked}>
        {` ${buttonText}`}
      </span>
    </div>
  )
}
