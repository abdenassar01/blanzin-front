import { cn } from '@/utils';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React, { InputHTMLAttributes, useCallback } from 'react';
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
  const { append, fields } = useFieldArray({ name, control });

  const { theme } = useTheme();

  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    append(acceptedFiles[0]?.path);
  }, []);

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
      <h3 className='mb-1 text-sm text-secondary dark:text-main'>{label}</h3>
      <div className='flex flex-wrap justify-between gap-y-4'>
        {React.Children.toArray(
          items.map((field, index) => (
            <div className='w-[48%] cursor-pointer sm:w-full'>
              <label
                htmlFor={name + index}
                className={cn(
                  'flex aspect-[3/4] w-full cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border-[2px] border-dashed border-border p-2 ',
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
        <div className='w-[48%] cursor-pointer sm:w-full '>
          <label
            htmlFor={name + fields.length}
            className={cn(
              'flex aspect-[3/4] w-full cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border-[2px] border-dashed border-border p-2 ',
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
