import {
  CallToAction,
  DownloadAppSection,
  HeroSection,
  LatestJobs,
  WalkThroughtSteps,
} from '@/components';
import { getI18n } from '@/utils/locales/server';
import React from 'react';

export default async function EmployeePage() {
  const t = await getI18n();

  const steps = [
    {
      step: `${t('step-heading')} 1`,
      icon: '/steps/step-1.jpeg',
      text: t('employee-steps.find-expert-step-one'),
    },
    {
      step: `${t('step-heading')} 2`,
      icon: '/steps/step-2.jpeg',
      text: t('employee-steps.find-expert-step-two'),
    },
    {
      step: `${t('step-heading')} 3`,
      icon: '/steps/step-3.jpeg',
      text: t('employee-steps.find-expert-step-three'),
    },
  ];

  return (
    <div className='w-full'>
      <HeroSection
        action={t('employee.hero-action')}
        href='/jobs'
        header={t('employee.hero-text')}
      />
      <CallToAction
        heading={t('employee.call-to-action-heading')}
        href='/jobs'
        paragraph={t('employee.call-to-action-paragraph')}
        buttonText={t('employee.call-to-action-btn')}
        callToActionText={t('employee.call-to-action')}
        screenshot='/screenshots/blanzin-dark.jpg'
      />
      <LatestJobs />
      <DownloadAppSection />
      <WalkThroughtSteps
        header={t('employee-steps.big-header')}
        steps={steps}
      />
    </div>
  );
}
