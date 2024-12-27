import * as React from 'react'
import { Button } from '@/components'

export function CoursesPackagesSection() {
  return (
    <div className='main-background-gradient-flipped -mx-4 p-10 text-white sm:p-4'>
      <div className='flex justify-between text-center sm:flex-col'>
        <div className='rounded-lg border border-border p-3'>
          <div className='text-xbase font-bold '>12 Months</div>
          <div className='my-6 text-xxm font-bold text-main'>
            X Dh <br />
            per Month
          </div>
          <Button text='Select' />
          <div className='mt-6 text-xbase font-bold'>(Total: X Dh)</div>
        </div>
        <div className='rounded-lg border border-border p-3'>
          <div className='text-xbase font-bold '>12 Months</div>
          <div className='my-6 text-xxm font-bold text-main'>
            X Dh <br />
            per Month
          </div>
          <Button text='Select' />
          <div className='mt-6 text-xbase font-bold'>(Total: X Dh)</div>
        </div>
        <div className='rounded-lg border border-border p-3'>
          <div className='text-xbase font-bold '>12 Months</div>
          <div className='my-6 text-xxm font-bold text-main'>
            X Dh <br />
            per Month
          </div>
          <Button text='Select' />
          <div className='mt-6 text-xbase font-bold'>(Total: X Dh)</div>
        </div>
      </div>
    </div>
  )
}
