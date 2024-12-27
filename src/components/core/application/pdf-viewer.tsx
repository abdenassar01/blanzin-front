'use client'

import { Button, Modal } from '@/components/common'
import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString()

type Props = {
  file: string
  width?: number
  fileName?: string
}

export function PdfViewer({ file, width, fileName }: Props) {
  const [numPages, setNumPages] = useState<number>(0)
  const [showModal, setShowModal] = useState<boolean>(false)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages)
  }

  return (
    <>
      <div className='flex w-full flex-col items-center justify-center gap-2 p-2'>
        <div className=''>{fileName}</div>
        <Button onClick={() => setShowModal(true)}>Show</Button>
      </div>
      <Modal visible={showModal} setVisible={setShowModal}>
        <div className='aspect-[3.7/4] w-full overflow-x-hidden overflow-y-scroll sm:w-full'>
          <Document
            onLoadError={console.error}
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                width={width}
                className='!w-full !min-w-full'
                key={`page_${index + 1}`}
                pageNumber={index + 1}
              />
            ))}
          </Document>
        </div>
      </Modal>
    </>
  )
}
