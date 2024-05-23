'use client';

import React, { useState } from 'react';
import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

type Props = {
  file: string;
  width?: number;
};

export function PdfViewer({ file, width }: Props) {
  const [numPages, setNumPages] = useState<number>();

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div className='aspect-[3/4] w-full overflow-x-hidden overflow-y-scroll sm:w-full'>
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
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
  );
}
