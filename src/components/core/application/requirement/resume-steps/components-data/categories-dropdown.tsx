'use client'

import { Dropdown } from '@/components'
import { searchJobCategories } from '@/services'
import { useFetch } from '@/services/core/hooks'
import React from 'react'
import { Control, useWatch } from 'react-hook-form'
import { SubCategoriesDropdown } from './sub-categories-dropdown'

type Props = {
  control: Control<any>
  label: string
  subCategoryLabel: string
}

export function CategoriesDropdown({
  control,
  label,
  subCategoryLabel,
}: Props) {
  const { data, loading, error } = useFetch(() => searchJobCategories(0, ''))

  if (loading) return <div>loading...</div>

  if (error) {
    return <div>error fetching categories</div>
  }

  return (
    <>
      {data && (
        <>
          <Dropdown
            control={control}
            name='jobCategory'
            defaultValue={data.data.content[0]}
            items={data?.data.content.map(item => item)}
            extractDisplayMember={item => item.label}
            extractValueMember={item => item}
            label={label}
            wrapperClassName='w-[47%] sm:w-full'
          />
          <SubCategoriesDropdown label={subCategoryLabel} control={control} />
        </>
      )}
    </>
  )
}
