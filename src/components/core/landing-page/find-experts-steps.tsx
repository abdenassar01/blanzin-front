import Image from 'next/image';
import React from 'react';

type Props = {
  steps: {
    step: string;
    icon: string;
    text: string;
  }[];
  header: string;
};

export function WalkThroughtSteps({ steps, header }: Props) {
  return (
    <div className='no-scrollbar container overflow-x-scroll pt-12'>
      <h2 className='mb-5 text-xm font-bold text-secondary dark:text-main'>
        {header}
      </h2>
      <div className='flex justify-between sm:flex-col '>
        {React.Children.toArray(
          steps.map((item) => (
            <div className='flex flex-col items-center justify-center gap-3'>
              <Image
                alt={item.text}
                src={item.icon}
                width={200}
                height={200}
                className='aspect-square w-[250px] rounded-full'
              />
              <div className='flex items-center justify-center'>
                <div className='w-fit rounded-full bg-secondary px-3 py-1 text-center font-bold text-main'>
                  {item.step}
                </div>
              </div>
              <p className='w-[220px] text-center text-base font-bold text-secondary dark:text-textdark'>
                {item.text}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
