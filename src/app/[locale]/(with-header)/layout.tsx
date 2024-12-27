import { LayoutProps } from '@/types'
import React from 'react'
import { Footer, Header } from '@/components'

export default function layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <div className='mt-16'>
        <div className=''>{children}</div>
      </div>
      <Footer />
    </>
  )
}
