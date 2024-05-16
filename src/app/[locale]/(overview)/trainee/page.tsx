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
      icon: '/steps/step-1.jpeg',
      text: t('trainee-steps.find-expert-step-one'),
    },
    {
      step: `${t('step-heading')} 2`,
      icon: '/steps/step-2.jpeg',
      text: t('trainee-steps.find-expert-step-two'),
    },
    {
      step: `${t('step-heading')} 3`,
      icon: '/steps/step-3.jpeg',
      text: t('trainee-steps.find-expert-step-three'),
    },
  ];

  return (
    <div className='w-full'>
      <HeroSection
        action={t('trainee.hero-action')}
        href='/become-expert'
        header={t('trainee.hero-text')}
        flipped
      />
      <CallToAction
        heading={t('trainee.call-to-action-heading')}
        href='/packs'
        paragraph={t('trainee.call-to-action-paragraph')}
        buttonText={t('trainee.call-to-action-btn')}
        callToActionText={t('trainee.call-to-action')}
        screenshot='/screenshots/blanzin-dark.jpg'
      />
      <LatestTrainings />
      <DownloadAppSection />
      <WalkThroughtSteps header={t('trainee-steps.big-header')} steps={steps} />
    </div>
  );
}
