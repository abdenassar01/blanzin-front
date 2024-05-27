'use client';

import React, { useMemo, useState } from 'react';
import { Control, useFieldArray, useWatch } from 'react-hook-form';
import {
  Map,
  PictureUpload,
  TranslatedHeading,
  TranslatedText,
} from '../../..';
import { useTheme } from 'next-themes';
import { cn } from '@/utils';
import Image from 'next/image';
import { useScopedI18n } from '@/utils/locales/client';

type Props = {
  control: Control<any>;
  name: string;
  className?: string;
  label: string;
};

export function ImagesGalleryField({ control, name, label, className }: Props) {
  const { append } = useFieldArray({
    name,
    control,
  });

  const value = useWatch({
    control,
  });

  const t = useScopedI18n('forms');

  const { theme } = useTheme();
  const isDark = useMemo(() => theme === 'dark', [theme]);

  const [imagesArray, setImagesArray] = useState<number[]>([1]);

  return (
    <div className={cn('', className)}>
      <TranslatedHeading
        className='my-2 text-sm text-secondary dark:text-main'
        tranlationKey={label}
      />
      <div style={{ gap: 5 }} className={cn('flex w-full flex-wrap')}>
        <Map
          items={imagesArray}
          render={(item, index) => (
            <PictureUpload
              key={`field-${item}`}
              append={append}
              callBack={() => {
                if (imagesArray.length < 9) {
                  setImagesArray([...imagesArray, imagesArray.length + 2]);
                }
              }}
            >
              <div
                className={cn(
                  'flex aspect-[3/4] w-[110px] min-w-[32%] flex-col items-center justify-center overflow-hidden rounded-md border-[1px]',
                  value.gallery[index || 0]
                    ? 'border-0'
                    : 'border-secondary dark:border-main'
                )}
              >
                {value.gallery[index || 0] ? (
                  <Image
                    alt=''
                    width={200}
                    height={200}
                    className='absolute bottom-0 left-0 right-0 top-0'
                    src={value.gallery[index || 0]}
                  />
                ) : (
                  <>
                    <Image
                      alt=''
                      className='icon'
                      src={
                        isDark
                          ? require('@/assets/images/icons/dark/upload.svg')
                          : require('@/assets/images/icons/light/upload.svg')
                      }
                    />
                    <TranslatedText
                      className='text-xs text-secondary dark:text-main'
                      tranlationKey={t('image')}
                    />
                  </>
                )}
              </div>
            </PictureUpload>
          )}
        />
      </div>
    </div>
  );
}
