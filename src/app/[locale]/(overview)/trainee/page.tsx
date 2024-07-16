import {
  CallToAction,
  DownloadAppSection,
  HeroSection,
  LatestTrainings,
  TraineeVisaSection,
  WalkThroughtSteps,
} from '@/components';
import { getI18n } from '@/utils/locales/server';
import React from 'react';

export default async function TraineePage() {
  const t = await getI18n();

  const steps = [
    {
      step: `${t('step-heading')} 1`,
      icon: '/steps/6.svg',
      text: t('jobs-in-germany-steps.first'),
      desc: t('jobs-in-germany-steps.first-desc'),
    },
    {
      step: `${t('step-heading')} 2`,
      icon: '/steps/7.svg',
      text: t('jobs-in-germany-steps.second'),
      desc: t('jobs-in-germany-steps.second-desc'),
    },
    {
      step: `${t('step-heading')} 3`,
      icon: '/steps/8.svg',
      text: t('jobs-in-germany-steps.third'),
      desc: t('jobs-in-germany-steps.third-desc'),
    },
  ];

  return (
    <div className='w-full'>
      <HeroSection
        thumbnail='/trainee-thumbnail.png'
        video='/trainee.mp4'
        action={t('trainee.hero-action')}
        href='/jobs'
        header={t('trainee.hero-text')}
        flipped
      />
      <WalkThroughtSteps
        header={t('jobs-in-germany-steps.header')}
        steps={steps}
      />
      <LatestTrainings />
      <DownloadAppSection />
      <TraineeVisaSection />
      <CallToAction
        heading={t('trainee.call-to-action-heading')}
        href='/application'
        paragraph={t('trainee.call-to-action-paragraph')}
        buttonText={t('trainee.call-to-action-btn')}
        callToActionText={t('trainee.call-to-action')}
        screenshot='/screenshots/blanzin-dark.jpg'
      />
    </div>
  );
}
