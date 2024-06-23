'use client';

import { Modal } from '@/components';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

type Props = {
  video: string;
};

export function VideoPlayer({ video }: Props) {
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const vidRef = useRef(null);

  return (
    <>
      <button onClick={() => setVisibleModal((prev) => !prev)}>
        <Image
          className='w-[70vw] sm:w-[90vw]'
          width={350}
          height={275}
          alt=''
          src='/video-main.png'
        />
      </button>
      <Modal
        // @ts-ignore
        callback={() => vidRef?.current?.pause()}
        width={108}
        height={60}
        className='relative !aspect-video overflow-hidden p-0'
        setVisible={setVisibleModal}
        visible={visibleModal}
      >
        <video
          ref={vidRef}
          controls
          src={video}
          className='absolute bottom-0 left-0 right-0 top-0 w-full'
        />
      </Modal>
    </>
  );
}
