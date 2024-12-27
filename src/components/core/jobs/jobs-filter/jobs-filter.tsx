'use client'

import { Dropdown } from '@/components/common'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { usePathname } from '@/navigation'
import { useScopedI18n } from '@/utils/locales/client'
import { buildQueryString, useGetAllSearchParams } from '@/utils'
import Image from 'next/image'

type Props = {
  total: number
  cities: {
    city: string
    count: number | unknown
  }[]
  professions?: {
    profession: string
    count: number | unknown
  }[]
}

export function JobsFilter({ cities, professions, total }: Props) {
  const { replace } = useRouter()
  const pathname = usePathname()
  const { control, reset } = useForm()
  const queryParams = useGetAllSearchParams()

  const t = useScopedI18n('forms')
  const publishedDateT = useScopedI18n('published-date')
  const jobTypeT = useScopedI18n('job-type')

  return (
    <div className='mt-12 h-fit w-[35%] sm:mt-0 sm:w-full'>
      <Dropdown
        wrapperClassName='mt-9 sm:mt-2'
        className=''
        placeholder=' '
        items={[
          {
            value: '1;2',
            label: jobTypeT('all'),
          },
          {
            value: '1',
            label: jobTypeT('part-time'),
          },
          {
            value: '2',
            label: jobTypeT('full-time'),
          },
        ]}
        dropdownClassName='top-[80px]'
        control={control}
        onSelectChange={item =>
          replace(
            `${pathname}?${buildQueryString({ ...queryParams, type: item.value, page: 1 })}`,
          )
        }
        extractDisplayMember={item => item.label}
        extractValueMember={item => item.value}
        label={t('job-type')}
        name='type'
      />
      <Dropdown
        wrapperClassName='mt-3 sm:mt-0'
        className=''
        placeholder=' '
        items={[
          { id: undefined, label: publishedDateT('all') },
          { id: '0', label: publishedDateT('today') },
          { id: '1', label: publishedDateT('yesterday') },
          { id: '7', label: publishedDateT('week') },
          { id: '14', label: publishedDateT('two-weeks') },
          { id: '28', label: publishedDateT('four-weeks') },
        ]}
        dropdownClassName='top-[80px]'
        control={control}
        onSelectChange={item =>
          replace(
            `${pathname}?${buildQueryString({ ...queryParams, published: item.id, page: 1 })}`,
          )
        }
        extractDisplayMember={item => item.label}
        extractValueMember={item => item.id}
        label={t('publish')}
        name='city'
      />
      <Dropdown
        wrapperClassName='mt-3 sm:mt-0'
        className=''
        items={[{ city: 'German wide', count: total }, ...cities]}
        dropdownClassName='top-[80px]'
        control={control}
        onSelectChange={item =>
          replace(
            `${pathname}?${buildQueryString({ ...queryParams, city: item.city, page: 1 })}`,
          )
        }
        extractDisplayMember={item => item.city}
        extractValueMember={item => item.city}
        label={t('location')}
        placeholder=' '
        name='city'
      />

      <Dropdown
        wrapperClassName='mt-3 sm:mt-0'
        className=''
        placeholder=' '
        items={professions || []}
        dropdownClassName='top-[80px]'
        control={control}
        onSelectChange={item =>
          replace(
            `${pathname}?${buildQueryString({ ...queryParams, profession: item.profession, page: 1 })}`,
          )
        }
        extractDisplayMember={item => item.profession}
        extractValueMember={item => item.profession}
        label={t('profession')}
        name='profession'
      />
      <button
        className='mt-3 flex items-center gap-2 sm:mt-0'
        onClick={() => {
          reset()
          replace(`${pathname}?tab=${queryParams.tab}&page=1`)
        }}>
        <Image
          src={require('@/assets/images/icons/reject.svg')}
          alt='reject icon'
          className='w-7 sm:w-5'
        />
        <span className='text-error sm:text-xs'>{t('reset')}</span>
      </button>
    </div>
  )
}
