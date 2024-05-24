import {
  Button,
  Heading,
  ImageShapeMaker,
  ImageShapeMakerSvg,
} from '@/components';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  heading: string;
  paragraph: string;
  callToActionText: string;
  buttonText: string;
  href: string;
  screenshot: string;
};

export function CallToAction({
  buttonText,
  callToActionText,
  heading,
  href,
  paragraph,
  screenshot,
}: Props) {
  return (
    <section className='py-12'>
      <div className='container flex items-center justify-center sm:flex-col-reverse sm:gap-6'>
        <div className='flex w-[60%] flex-col justify-center gap-8 sm:w-full'>
          <div className='text-2xl'>
            <Heading className='' heading={heading} />
          </div>
          <p className='w-[80%] text-secondary dark:text-textdark sm:w-[full]'>
            {paragraph}
          </p>
          <div
            dangerouslySetInnerHTML={{ __html: callToActionText }}
            className='text-xbase text-secondary prose-strong:text-xxl prose-strong:uppercase dark:text-main'
          />
          <div className='w-[40%] md:w-[80%] sm:w-[80%]'>
            <Button className='group dark:hover:border-main' theme='secondary'>
              <Link
                className='font-semibold text-main group-hover:text-secondary dark:group-hover:text-main'
                href={href}
              >
                {buttonText}
              </Link>
            </Button>
          </div>
        </div>
        <div className='flex w-[40%] items-center justify-center'>
          <div className=''>
            <ImageShapeMakerSvg id={screenshot} screenshot={screenshot} />
          </div>
        </div>
      </div>
    </section>
  );
}
