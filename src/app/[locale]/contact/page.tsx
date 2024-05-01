'use client';

import { Button, FieldText, Heading, TextArea } from '@/components';
import React from 'react';
import { useForm } from 'react-hook-form';

export default function Contact() {
  const { control } = useForm();
  return (
    <div className="min-h-[90vh] w-full bg-[url('/auth-bg.png')]  bg-no-repeat">
      {/* <div className='container h-full w-full'> */}
      <div className='min-h-[90vh] w-[40%] bg-background p-6 dark:bg-backgroundDark'>
        <Heading className='text-center text-2xl' heading='Contact us' />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde alias
          odio inventore quisquam veniam vel labore odit, obcaecati quas harum
          possimus debitis delectus recusandae
        </p>

        <div className='flex flex-col gap-3'>
          <FieldText control={control} label='Hallo' name='mail' />
          <FieldText control={control} label='Hallo' name='mail' />
          <TextArea control={control} label='Hallow 2' name='message' />
          <Button text='Send' />
        </div>
      </div>
    </div>
  );
}
