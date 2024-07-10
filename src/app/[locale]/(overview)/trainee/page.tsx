import {
  CallToAction,
  DownloadAppSection,
  HeroSection,
  LatestTrainings,
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
        thumbnail='/trainee-thumbnail.png'
        video='/trainee.mp4'
        action={t('trainee.hero-action')}
        href='/jobs'
        header={t('trainee.hero-text')}
        flipped
      />
      <CallToAction
        heading={t('trainee.call-to-action-heading')}
        href='/application'
        paragraph={t('trainee.call-to-action-paragraph')}
        buttonText={t('trainee.call-to-action-btn')}
        callToActionText={t('trainee.call-to-action')}
        screenshot='/screenshots/blanzin-dark.jpg'
      />
      <LatestTrainings />
      <DownloadAppSection />
      <WalkThroughtSteps
        header={t('jobs-in-germany-steps.header')}
        steps={steps}
      />
    </div>
  );
}
