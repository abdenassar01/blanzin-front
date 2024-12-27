import * as React from 'react';
import { Button, Heading } from '@/components';
import { getScopedI18n } from '@/utils/locales/server';
import Link from 'next/link';
import Image from 'next/image';

export default async function Page() {
  const t = await getScopedI18n('visa-overwhelmed');

  return (
    <div className='my-16'>
      <div className='container'>
        <div className='text-xxm'>
          <Heading className='text-center' heading='EU Blue Card' />
        </div>
        <div className='flex w-full items-center justify-center'>
          <p className='mt-6 w-[80%] text-center text-xl text-secondary dark:text-textdark'>
            The Blue Card EU is a special residence permit for foreign graduates
            or individuals with comparable qualifications who wish to take up
            qualified employment in Germany.
          </p>
        </div>
        <h3 className='my-3 mt-6 text-xbase font-bold text-secondary dark:text-main'>
          What requirements must be met to obtain the EU Blue Card?
        </h3>
        <ul className='prose ml-5  list-disc prose-li:text-mainText dark:prose-li:text-textdark'>
          <li>Comprehensive tabular curriculum vitae in German</li>
          <li className='prose  prose-a:text-secondary prose-a:hover:underline dark:prose-a:text-main'>
            A German university degree or a recognized foreign university degree
            comparable to a German university degree. You can check whether your
            foreign university degree is recognized or comparable in the ANABIN
            database <a href='http://anabin.kmk.org/'>http://anabin.kmk.org/</a>
          </li>
          <li>
            Employment contract / binding job offer with details of the gross
            annual salary.
          </li>
          <li className='prose prose-a:text-secondary prose-a:hover:underline dark:prose-a:text-main'>
            In 2024, the salary threshold for the Blue Card is €45,300. For
            <Link href='/shortage-occupations'>shortage occupations</Link> and
            for recent graduates who obtained their university degree no more
            than 3 years before applying for the Blue Card, the salary threshold
            is €41,041.80
          </li>
        </ul>

        <div className='mt-10 flex gap-4 sm:flex-col'>
          <Image
            width={500}
            height={300}
            src='/visa/visa-accepted.svg'
            alt='europe visa'
            className='w-[30vw] rounded-xl'
          />
          <div className='my-5 flex flex-col justify-between sm:my-1'>
            <h2 className='text-xm font-bold text-secondary dark:text-main'>
              {t('title')}
            </h2>
            <div
              dangerouslySetInnerHTML={{ __html: t('desc') }}
              className='text-xl text-mainText dark:text-textdark'
            />
            <div className='flex w-full items-center justify-center'>
              <Link href='/application' className='w-[50%] sm:w-full'>
                <Button theme='secondary' text={t('call-to-action')} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
