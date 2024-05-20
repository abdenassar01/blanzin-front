'use client';

import React from 'react';

import { Viewer } from '@react-pdf-viewer/core';

import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

type Props = {
  file: string;
  toolbar?: boolean;
  sidebar?: boolean;
};

export function PdfViewer({ file, toolbar, sidebar }: Props) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className='w-full overflow-y-scroll rounded-xl sm:w-full'>
      <Viewer fileUrl={file} plugins={[defaultLayoutPluginInstance]} />
    </div>
  );
}
