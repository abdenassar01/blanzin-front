import { Heading } from '@/components';
import { getScopedI18n } from '@/utils/locales/server';
import Image from 'next/image';
import React from 'react';

export default async function AboutUs() {
  const t = await getScopedI18n('heading');
  return (
    <div>
      <div className='mb-12 flex w-full justify-center text-xxm '>
        <Heading
          className='w-[60%] text-center sm:w-full'
          heading={t('about')}
        />
      </div>
      <div className='flex w-full justify-between gap-4'>
        <div className='flex w-[25%] flex-col gap-4 md:w-[48%] sm:w-full'>
          <h2 className='text-xl font-bold text-secondary dark:text-main'>
            Our story
          </h2>
          <p className=''>
            {`Blanzin's adventure began with a dream - the dream of making a
            difference. With many years of experience in IT and business
            management, we decided to use our knowledge and passion to create a
            service that not only meets people's needs, but also supports their
            dreams. As a young Moroccan team from Germany, we have come together
            to create something unique: A platform that not only provides
            expertise, but also strengthens communities and opens up
            opportunities.`}
          </p>
          <Image
            alt=''
            className='rounded-xl'
            width={400}
            height={400}
            src='/about/s1.jpg'
          />
        </div>
        <div className='flex w-[42%] flex-col gap-4 md:w-[48%] sm:w-full'>
          <h2 className='text-xl font-bold text-secondary dark:text-main'>
            Our mission
          </h2>
          <Image
            alt=''
            className='w-full rounded-xl'
            width={400}
            height={400}
            src='/about/s2.webp'
          />

          <p className=''>
            {`Born from the vision of two passionate IT engineers and experienced
            business people, Blanzin is not just a platform - it's a promise.
            Our heart beats for innovation and passion for service, paired with
            the firm belief that technology connects people and improves lives.
            Our mission at Blanzin is to build a bridge between experts in
            Morocco and people worldwide to make help and opportunities
            accessible.`}
          </p>
        </div>
        <div className='flex w-[25%] flex-col gap-4 md:w-[48%] sm:w-full'>
          <h2 className='text-xl font-bold text-secondary dark:text-main'>
            Our community
          </h2>
          <p className=''>
            {`Blanzin is more than just a platform - it's a community of people
            who come together to help and support each other. We believe in the
            power of collaboration and pride ourselves on creating a platform
            where experts can share their knowledge and people have the
            opportunity to achieve their goals. In our diverse and dynamic
            community, people of all backgrounds find a place where they feel
            welcome and where their needs are taken seriously.`}
            <br />
            <br />
            Welcome to Blanzin - where dreams become reality and opportunities
            are limitless.
          </p>
          <Image
            alt=''
            className='rounded-xl'
            width={400}
            height={400}
            src='/about/s3.webp'
          />
        </div>
      </div>
    </div>
  );
}
