'use client'

import React, { useCallback, useState } from 'react'
import Image, { ImageProps } from 'next/image'
import { cn } from '@/utils'

interface ImageWithFallbackProps extends ImageProps {
  fallbackSrc: string
}

export const ImageWithFallback = (props: ImageWithFallbackProps) => {
  const { src, fallbackSrc, ...rest } = props
  const [imgSrc, setImgSrc] = useState(src)

  const handleError = useCallback(() => {
    setImgSrc(fallbackSrc)
    console.log('src', imgSrc)
  }, [src])

  return (
    <Image
      {...rest}
      className={cn(
        rest.className,
        imgSrc === fallbackSrc ? 'object-cover' : '',
      )}
      src={imgSrc}
      onError={handleError}
    />
  )
}
