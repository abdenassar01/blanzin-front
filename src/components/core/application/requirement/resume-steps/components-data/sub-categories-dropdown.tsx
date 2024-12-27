'use client'

import { Dropdown, Loader } from '@/components'
import { searchJobSubCategoryByCategoryId } from '@/services'
import { Experience } from '@/services/core/api/application/resume/experiences/types'
import { JobSubCategory } from '@/services/core/api/application/resume/static-data/job-sub-category/types'
import { PagedAPIResponse } from '@/types'
import React, { useEffect, useState } from 'react'
import { Control, useWatch } from 'react-hook-form'

type Props = {
  control: Control<any>
  label: string
}

export function SubCategoriesDropdown({ control, label }: Props) {
  const { jobCategory } = useWatch<Experience>({ control })
  const [data, setData] = useState<PagedAPIResponse<JobSubCategory> | null>(
    null,
  )
  const [loading, setLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    searchJobSubCategoryByCategoryId(0, jobCategory?.id || 0)
      .then(data => setData(data))
      .catch(err => setIsError(true))
      .finally(() => setLoading(false))
  }, [jobCategory?.id])

  if (loading)
    return (
      <div className='h-20 w-20'>
        <Loader />
      </div>
    )

  if (isError) {
    return <div>error fetching sub categories</div>
  }

  return (
    <>
      {data && (
        <Dropdown
          control={control}
          name='jobSubCategory'
          items={data?.data?.content || []}
          extractDisplayMember={item => item.label}
          extractValueMember={item => item}
          label={label}
          wrapperClassName='w-[47%] sm:w-full'
        />
      )}
    </>
  )
}
