import * as React from 'react';
import { Heading, Map, VisaCard } from '@/components';
import { getScopedI18n } from '@/utils/locales/server';

const visas = [
  {
    img: '/visa/blue-card.svg',
    title: 'EU Blue Card',
    description:
      'The EU Blue Card is one of the most popular residence permits for highly qualified professionals and offers numerous advantages. It is best to check directly whether you can obtain an EU Blue Card.',
  },
  {
    img: '/visa/professional.svg',
    title: 'Work visa for qualified professionals',
    description:
      'A work visa for skilled workers gives you direct access to the German labour market. Find out here what requirements you need to fulfil in order to work as a skilled worker in Germany.',
  },
  {
    img: '/visa/job-search.svg',
    title: 'Job search opportunity card',
    description:
      'Job seekers from abroad can enter Germany in order to look for a job. In some cases, a visa might be necessary. We will explain how it works.',
  },
  {
    img: '/visa/it-professional.svg',
    title: 'Visa options for IT professionals',
    description:
      'In Germany, qualified and experienced skilled workers in IT are in high demand. Coming from abroad, there are a lot of options to receive a work visa – with or without a formal qualification certificate',
  },
];

export async function EmployeeVisaSection() {
  const t = await getScopedI18n('employee.visa');
  return (
    <div className='bg-backgroundSecondary py-12 dark:bg-backgroundDark'>
      <div className='container'>
        <div className='text-xm'>
          <Heading heading={t('title')} className='text-center' />
        </div>
        <div className='mt-12 flex flex-wrap justify-between gap-4'>
          <Map items={visas} render={(item) => <VisaCard visa={item} />} />
        </div>
      </div>
    </div>
  );
}
