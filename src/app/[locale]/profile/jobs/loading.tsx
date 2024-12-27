import * as React from 'react'
import { Loader } from '@/components'

export default function Loading() {
  return (
    <div className='flex min-h-[90vh] items-center justify-center'>
      <div className='w-[600px]'>
        <Loader />
      </div>
    </div>
  )
}
