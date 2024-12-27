import * as React from 'react'
import { Loader } from '@/components'

export default function Loading() {
  return (
    <div className='flex min-h-[40vh] items-center justify-center'>
      <div className='w-[200px]'>
        <Loader />
      </div>
    </div>
  )
}
