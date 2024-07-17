import Image from 'next/image';
import React from 'react';

type Props = {
  steps: {
    step: string;
    icon: string;
    text: string;
    desc?: string;
  }[];
  header: string;
};

export function WalkThroughtSteps({ steps, header }: Props) {
  return (
    <div className='no-scrollbar container overflow-x-scroll pt-12'>
      <h2 className='mb-5 text-center text-xm font-bold text-secondary dark:text-main'>
        {header}
      </h2>
      <div className='flex w-full justify-center'>
        <div className='mt-6 flex w-[80%] items-start justify-between sm:w-full sm:flex-col '>
          {React.Children.toArray(
            steps.map((item) => (
              <div className='flex w-[31%] flex-col items-center justify-center gap-3 sm:w-full'>
                <Image
                  alt={item.text}
                  src={item.icon}
                  width={200}
                  height={200}
                  className='aspect-square w-[50%] rounded-full object-cover'
                />
                <div className='flex items-center justify-center'>
                  <div className='w-fit rounded-full bg-secondary px-3 py-1 text-center font-bold text-main'>
                    {item.step}
                  </div>
                </div>
                <p className='text-center text-base font-bold text-secondary dark:text-textdark'>
                  {item.text}
                </p>
                {item.desc && (
                  <p
                    className='text-center text-xs text-mainText prose-a:text-[#4385ff] prose-a:underline dark:text-textdark'
                    dangerouslySetInnerHTML={{ __html: item.desc }}
                  />
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
