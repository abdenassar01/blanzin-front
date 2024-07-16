import * as React from 'react';
import { Heading, Map, VisaCard } from '@/components';
import { getScopedI18n } from '@/utils/locales/server';

export async function EmployeeVisaSection() {
  const t = await getScopedI18n('employee.visa');
  return (
    <div className='bg-backgroundSecondary py-12 dark:bg-backgroundDark'>
      <div className='container'>
        <div className='text-xm'>
          <Heading heading={t('title')} className='text-center' />
        </div>
        <div className='mt-12 flex flex-wrap justify-between gap-4'>
          <Map items={[1, 2, 3, 4]} render={(item) => <VisaCard />} />
        </div>
      </div>
    </div>
  );
}
