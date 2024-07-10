'use client';

import { Modal } from '@/components';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

type Props = {
  video: string;
  thumbnail: string;
};

export function VideoPlayer({ video, thumbnail }: Props) {
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const vidRef = useRef<any>(null);

  useEffect(() => {
    if (visibleModal) vidRef?.current?.play();
  }, [visibleModal]);

  return (
    <>
      <button onClick={() => setVisibleModal((prev) => !prev)}>
        <Image
          className='w-[70vw] rounded-xl sm:w-[90vw]'
          width={350}
          height={275}
          alt='Blanzin'
          src={thumbnail}
        />
      </button>
      <Modal
        width={108}
        height={60}
        callback={() => vidRef?.current?.pause()}
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
