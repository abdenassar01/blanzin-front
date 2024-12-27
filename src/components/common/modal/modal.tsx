'use client'

import React, { Dispatch, ReactNode, SetStateAction } from 'react'
import { TranslatedHeading } from '..'
import Image from 'next/image'
import { cn } from '@/utils'
import { useTheme } from 'next-themes'
import Rodal from 'rodal'
import { isMobile } from 'react-device-detect'

type Props = {
  children: ReactNode
  visible: boolean
  setVisible: Dispatch<SetStateAction<boolean>>
  header?: string
  className?: string
  contentClassName?: string
  width?: number
  height?: number
  measure?: string
  portrait?: boolean
  callback?: () => void
}

export const Modal = ({
  visible,
  children,
  setVisible,
  header,
  className,
  height,
  width,
  measure,
  contentClassName,
  portrait,
  callback,
}: Props) => {
  const { theme } = useTheme()

  return (
    <Rodal
      width={300}
      customStyles={{ borderRadius: 20 }}
      onClose={() => {
        setVisible(false)
        callback && callback()
      }}
      visible={visible}
      closeOnEsc>
      <div
        className={cn(
          'w-full rounded-lg bg-backgroundSecondary p-2 dark:bg-backgroundDark',
          className,
        )}>
        <div
          className={cn(
            'flex w-full flex-row items-center justify-between',
            header ? 'justify-between' : 'justify-end',
          )}>
          {header && (
            <TranslatedHeading
              className='text-base text-secondary dark:text-main'
              tranlationKey={header}
            />
          )}
          <button className='' onClick={() => setVisible(false)}>
            <Image
              alt=''
              className='h-4 w-4 '
              src={
                theme === 'dark'
                  ? require('@/assets/images/icons/dark/close.svg')
                  : require('@/assets/images/icons/light/close.svg')
              }
            />
          </button>
        </div>
        <div
          className={cn(
            'no-scrollbar max-h-[90%] overflow-y-scroll',
            contentClassName,
          )}>
          {children}
        </div>
      </div>
      <button
        className='absolute z-10 h-full w-full'
        onClick={() => setVisible(false)}
      />
    </Rodal>
  )
}
