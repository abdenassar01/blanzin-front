import * as React from 'react'
import { Loader } from '@/components'

export default function Loading() {
  return (
    <div className='flex h-[100vh] w-full items-center justify-center'>
      <div className='w-[200px]'>
        <Loader />
      </div>
    </div>
  )
}
