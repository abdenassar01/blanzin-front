'use client'

import * as React from 'react'
import Image from 'next/image'
import { buildQueryString, cn, useGetAllSearchParams } from '@/utils'
import { useRouter } from 'next/navigation'
import { usePathname } from '@/navigation'

type Props = {
  total: number
  size: number
  currentPage: number
}

export function Pagination({ size, currentPage, total }: Props) {
  const queryParams = useGetAllSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()

  return (
    <div className='flex w-full items-center justify-end gap-3'>
      {currentPage != 1 && (
        <>
          <div
            onClick={() =>
              replace(
                `${pathname}?${buildQueryString({ ...queryParams, page: currentPage - 1 })}`,
              )
            }
            className='cursor-pointer items-center justify-center rounded-full bg-backgroundSecondary p-2 shadow-2xl hover:bg-main'>
            <Image
              className='w-7 '
              src={require('@/assets/images/icons/light/next-arrow.svg')}
              alt='prev'
            />
          </div>
          <div
            onClick={() =>
              replace(
                `${pathname}?${buildQueryString({ ...queryParams, page: 1 })}`,
              )
            }
            className={cn(
              'flex cursor-pointer items-center justify-center rounded-full bg-backgroundSecondary p-2 text-center text-text',
            )}>
            <div className='min-w-7'>1</div>
          </div>
        </>
      )}
      {!(currentPage - 1 === 1 || currentPage - 1 === 0) && (
        <>
          <div className=''>...</div>
          <div
            onClick={() =>
              replace(
                `${pathname}?${buildQueryString({ ...queryParams, page: currentPage - 1 })}`,
              )
            }
            className='flex cursor-pointer items-center justify-center rounded-full bg-backgroundSecondary p-2 text-center text-text'>
            <div className='min-w-7'>{currentPage - 1}</div>
          </div>
        </>
      )}
      <div className='flex cursor-pointer items-center justify-center rounded-full bg-secondary p-2 text-center text-white dark:bg-main'>
        <div className='min-w-7'>{currentPage}</div>
      </div>
      {currentPage + 1 <
        (Math.ceil(total / size) > 1000 ? 1000 : Math.ceil(total / size)) && (
        <div
          onClick={() =>
            replace(
              `${pathname}?${buildQueryString({ ...queryParams, page: currentPage + 1 })}`,
            )
          }
          className='flex cursor-pointer items-center justify-center rounded-full bg-backgroundSecondary p-2 text-center text-text'>
          <div className='min-w-7'>{currentPage + 1}</div>
        </div>
      )}

      {currentPage !=
        (Math.ceil(total / size) > 1000 ? 1000 : Math.ceil(total / size)) && (
        <>
          <div className=''>...</div>
          <div
            onClick={() =>
              replace(
                `${pathname}?${buildQueryString({ ...queryParams, page: Math.ceil(total / size) > 1000 ? 1000 : Math.ceil(total / size) })}`,
              )
            }
            className='flex cursor-pointer items-center justify-center rounded-full bg-backgroundSecondary p-2 text-center text-text'>
            <div className='min-w-7'>
              {Math.ceil(total / size) > 1000 ? 1000 : Math.ceil(total / size)}
            </div>
          </div>
          <div
            onClick={() =>
              replace(
                `${pathname}?${buildQueryString({ ...queryParams, page: currentPage + 1 })}`,
              )
            }
            className='cursor-pointer items-center justify-center rounded-full bg-backgroundSecondary p-2 shadow-2xl hover:bg-main'>
            <Image
              className='w-7 rotate-180'
              src={require('@/assets/images/icons/light/next-arrow.svg')}
              alt='prev'
            />
          </div>
        </>
      )}
    </div>
  )
}
