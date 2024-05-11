'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { Modal } from '@/components/common';

type Props = {};

const images = ['/auth-bg.png', '/house.jpg', '/job-image.jpg'];

export function OrderImagesSlider({}: Props) {
  const [selectedImage, setSelectedImage] = useState<string>(images[0]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <>
      <Slider arrows className='' slidesToShow={1} slidesToScroll={1}>
        {React.Children.toArray(
          images.map((item) => (
            <Image
              onClick={() => {
                setSelectedImage(item);
                setModalVisible(true);
              }}
              width={400}
              height={340}
              className='h-[70vh] w-full rounded-xl object-cover'
              alt='order image gallery'
              src={item}
            />
          ))
        )}
      </Slider>
      <Modal
        width={80}
        height={40}
        visible={modalVisible}
        setVisible={setModalVisible}
        className='relative !aspect-video overflow-hidden p-0'
      >
        <Slider
          className='absolute -left-1 bottom-0 right-0 top-0 w-full'
          arrows
          slidesToShow={1}
          slidesToScroll={1}
        >
          {React.Children.toArray(
            images.map((item) => (
              <Image
                width={400}
                height={340}
                alt='order image gallery'
                src={item}
              />
            ))
          )}
        </Slider>
      </Modal>
    </>
  );
}
