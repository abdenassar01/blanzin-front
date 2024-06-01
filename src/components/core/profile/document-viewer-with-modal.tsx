'use client';

import React, { useState } from 'react';
import { PdfViewer } from '../application';
import { isMobile } from 'react-device-detect';
import { Modal } from '@/components/common';

type Props = {
  doc: string;
};

export function DocumentViewerWithModal({ doc }: Props) {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <div
        onClick={() => setVisible((prev) => !prev)}
        className='overflow-hidden rounded-xl border-[1px] border-border'
      >
        <PdfViewer width={isMobile ? 100 : 270} file={doc} />
      </div>
      <Modal visible={visible} setVisible={setVisible}>
        <div className='flex w-full justify-center'>
          <div className='w-[50%] sm:w-full'>
            <PdfViewer width={isMobile ? 300 : 500} file={doc} />
          </div>
        </div>
      </Modal>
    </>
  );
}
