'use client';

import { cn } from '@/utils';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React, { InputHTMLAttributes } from 'react';
import { FileWithPath, useDropzone } from 'react-dropzone';
import { Control, FieldValue, useFieldArray } from 'react-hook-form';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  control: Control<FieldValue<any>>;
  name: string;
  label: string;
  items: string[];
};

export function FileUploadDropableGallery({
  control,
  name,
  label,
  className,
  items,
  placeholder,
  ...props
}: Props) {
  const { append, fields, remove } = useFieldArray({ name, control });

  const { theme } = useTheme();

  const onDrop = (acceptedFiles: FileWithPath[]) => {
    append(acceptedFiles[0]?.path);
  };

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      onDrop,

      accept: {
        'application/pdf': ['.pdf'],
      },
      onDropRejected(fileRejections, event) {
        alert('only pdfs are allowed');
        event.preventDefault();
      },
    });

  return (
    <>
      <h3 className='mb-4 text-xbase font-bold text-secondary dark:text-main'>
        {label}
      </h3>
      <div className='flex flex-wrap gap-[5%] gap-y-4'>
        {React.Children.toArray(
          items.map((field, index) => (
            <div className='relative w-[30%] cursor-pointer overflow-hidden sm:w-[49%]'>
              <Image
                onClick={() => remove(index)}
                alt=''
                src={require('@/assets/images/icons/remove.svg')}
                className='absolute right-2 top-2 w-5'
              />
              <label
                htmlFor={name + index}
                className={cn(
                  'flex aspect-[3/3.2] w-full cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border-[2px] border-dashed border-border p-2 ',
                  isDragReject
                    ? 'border-error'
                    : isDragActive
                      ? 'border-success'
                      : '',
                  className
                )}
                {...getRootProps()}
              >
                <input
                  id={name + index}
                  onChange={(e) => {
                    append(e.currentTarget.value);
                  }}
                  type='file'
                  className='hidden'
                  {...getInputProps()}
                  {...props}
                />
                <div className='max-w-[95%] text-center text-secondary dark:text-main'>
                  {field}
                </div>
                <Image
                  alt=''
                  className='h-[30px] w-[30px]'
                  src={
                    theme === 'dark'
                      ? require('@/assets/images/icons/dark/upload.svg')
                      : require('@/assets/images/icons/light/upload.svg')
                  }
                />
              </label>
            </div>
          ))
        )}
        <div className='w-[30%] cursor-pointer sm:w-[49%]'>
          <label
            htmlFor={name + fields.length}
            className={cn(
              'flex aspect-[3/3.2] w-full cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border-[2px] border-dashed border-border p-2 ',
              isDragReject
                ? 'border-error'
                : isDragActive
                  ? 'border-success'
                  : '',
              className
            )}
            {...getRootProps()}
          >
            <input
              id={name + fields.length}
              onChange={(e) => {
                append(e.currentTarget.value);
              }}
              type='file'
              className='hidden'
              {...getInputProps()}
              {...props}
            />
            <div className='max-w-[95%] text-center text-secondary dark:text-main'>
              {placeholder}
            </div>
            <Image
              alt=''
              className='h-[30px] w-[30px]'
              src={
                theme === 'dark'
                  ? require('@/assets/images/icons/dark/upload.svg')
                  : require('@/assets/images/icons/light/upload.svg')
              }
            />
          </label>
        </div>
      </div>
    </>
  );
}
