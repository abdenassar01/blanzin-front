'use client';

import { Modal } from '@/components';
import Image from 'next/image';
import React, { useState } from 'react';

export function VideoPlayer() {
  const [visibleModal, setVisibleModal] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setVisibleModal((prev) => !prev)}>
        <Image
          className='w-[40vw] sm:w-[90vw]'
          width={350}
          height={275}
          alt=''
          src='/video-main.png'
        />
      </button>
      <Modal
        width={45}
        height={25}
        className='relative !aspect-video overflow-hidden p-0'
        setVisible={setVisibleModal}
        visible={visibleModal}
      >
        <video
          controls
          src='/video.mp4'
          className='absolute bottom-0 left-0 right-0 top-0 w-[100%]'
        />
      </Modal>
    </>
  );
}
