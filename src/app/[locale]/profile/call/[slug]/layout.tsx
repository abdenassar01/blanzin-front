import { LayoutProps } from '@/types'
import React from 'react'

export default function layout({ children }: LayoutProps) {
  return (
    <>
      <script src='https://cdn.jsdelivr.net/npm/@stomp/stompjs@7.0.0/bundles/stomp.umd.min.js'></script>

      {children}
    </>
  )
}
