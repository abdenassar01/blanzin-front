import {
  CallToAction,
  DownloadAppSection,
  HeroSection,
  LatestOrders,
  WalkThroughtSteps,
} from '@/components';
import { getI18n } from '@/utils/locales/server';
import React from 'react';

export default async function ExpertPage() {
  const t = await getI18n();

  const steps = [
    {
      step: `${t('step-heading')} 1`,
      icon: '/steps/step-1.jpeg',
      text: t('expert-steps.find-expert-step-one'),
    },
    {
      step: `${t('step-heading')} 2`,
      icon: '/steps/step-2.jpeg',
      text: t('expert-steps.find-expert-step-two'),
    },
    {
      step: `${t('step-heading')} 3`,
      icon: '/steps/step-3.jpeg',
      text: t('expert-steps.find-expert-step-three'),
    },
  ];

  return (
    <div className='w-full'>
      <HeroSection
        video='/expert.mp4'
        action={t('expert.hero-action')}
        href='/become-expert'
        header={t('expert.hero-text')}
      />
      <CallToAction
        heading={t('expert.call-to-action-heading')}
        href='/orders'
        paragraph={t('expert.call-to-action-paragraph')}
        buttonText={t('expert.call-to-action-btn')}
        callToActionText={t('expert.call-to-action')}
        screenshot='/screenshots/blanzin.jpg'
      />
      <LatestOrders />
      <DownloadAppSection />
      <WalkThroughtSteps header={t('expert-steps.big-header')} steps={steps} />
    </div>
  );
}
