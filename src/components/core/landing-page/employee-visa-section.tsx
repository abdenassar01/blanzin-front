import * as React from 'react';
import { Heading } from '@/components';
import { getScopedI18n } from '@/utils/locales/server';
import { VisaEmployeeSlider } from './visa-employee-slider';

export async function EmployeeVisaSection() {
  const t = await getScopedI18n('employee.visa');
  return (
    <div className='bg-backgroundSecondary py-12 dark:bg-backgroundDark'>
      <div className='container'>
        <div className='text-xm'>
          <Heading heading={t('title')} className='text-center' />
        </div>
        <div className=''>
          <VisaEmployeeSlider />
        </div>
      </div>
    </div>
  );
}
