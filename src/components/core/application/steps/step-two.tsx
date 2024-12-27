import {
  DocsAlertModal,
  FileUploadDroppableGallery,
  Heading,
} from '@/components'
import { useScopedI18n } from '@/utils/locales/client'
import React from 'react'
import { Control, FieldValue, useWatch } from 'react-hook-form'
import { DocsFilter } from '../../docs'
import { useSearchParams } from 'next/navigation'
import { ApplicationFolder } from '@/services/core/api/application/application-folder/types'

type Props = {
  control: Control<FieldValue<any>>
}

export function StepTwo({ control }: Props) {
  const t = useScopedI18n('application')

  const { docs } = useWatch<ApplicationFolder>({ control })

  const searchParams = useSearchParams()
  const doc = searchParams.get('doc') || 'lang'

  const getSelectedDocType = () => {
    switch (doc) {
      case 'lang':
        return 'LANGUAGE_CERTIFICATE'
      case 'jobs':
        return 'JOB_CERTIFICATE'
      case 'diploma':
        return 'DIPLOMA_CERTIFICATE'
      case 'internship':
        return 'INTERNSHIP_CERTIFICATE'
      case 'acknowledgement':
        return 'ACKNOWLEDGEMENT_CERTIFICATE'
      default:
        return 'LANGUAGE_CERTIFICATE'
    }
  }

  function getDocTitle() {
    switch (doc) {
      case 'lang':
        return t('lang-certificate')
      case 'jobs':
        return t('job-certificates')
      case 'diploma':
        return t('diploma')
      case 'internship':
        return t('internship')
      case 'acknowledgement':
        return t('acknowledgement')
      default:
        return ''
    }
  }

  function getItems() {
    return (
      docs
        ?.filter(doc => doc.type === getSelectedDocType())
        .map(doc => doc.url || '') || []
    )
  }

  return (
    <div className='w-full'>
      <DocsAlertModal />
      <div className='text-xxm sm:text-base'>
        <Heading heading={t('docs-folder')} />
      </div>
      <div className='sm:text-sm'>{t('docs')}</div>
      <div className='mt-5 flex w-full flex-wrap gap-4'>
        <div className='mt-4 flex w-full sm:flex-col'>
          <DocsFilter noRole className='' />
          <div className='ml-4 w-full px-4 sm:pl-0'>
            <div className='flex gap-1'>
              <FileUploadDroppableGallery
                popoverText='Hallo world'
                items={getItems()}
                docType={getSelectedDocType()}
                control={control}
                name='docs'
                label={getDocTitle()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
