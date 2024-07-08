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
      icon: '/steps/6.svg',
      text: t('jobs-in-germany-steps.first'),
    },
    {
      step: `${t('step-heading')} 2`,
      icon: '/steps/7.svg',
      text: t('jobs-in-germany-steps.second'),
    },
    {
      step: `${t('step-heading')} 3`,
      icon: '/steps/8.svg',
      text: t('jobs-in-germany-steps.third'),
    },
  ];

  return (
    <div className='w-full'>
      <HeroSection
        video='/employee.mp4'
        thumbnail='/employee-thumbnail.png'
        action={t('employee.hero-action')}
        href='/jobs'
        header={t('employee.hero-text')}
        flipped
      />
      <CallToAction
        heading={t('employee.call-to-action-heading')}
        href='/application'
        paragraph={t('employee.call-to-action-paragraph')}
        buttonText={t('employee.call-to-action-btn')}
        callToActionText={t('employee.call-to-action')}
        screenshot='/screenshots/blanzin-dark.jpg'
      />
      <LatestJobs />
      <DownloadAppSection />
      <WalkThroughtSteps
        header={t('jobs-in-germany-steps.header')}
        steps={steps}
      />
    </div>
  );
}
