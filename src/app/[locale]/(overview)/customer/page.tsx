import {
  CallToAction,
  DownloadAppSection,
  HeroSection,
  WalkThroughSteps,
} from '@/components';
import { getI18n } from '@/utils/locales/server';

import React from 'react';

export default async function CustomerLandingPage() {
  const t = await getI18n();

  const steps = [
    {
      step: `${t('step-heading')} 1`,
      icon: '/steps/step-1.jpeg',
      text: t('customer-steps.first'),
    },
    {
      step: `${t('step-heading')} 2`,
      icon: '/steps/step-2.jpeg',
      text: t('customer-steps.second'),
    },
    {
      step: `${t('step-heading')} 3`,
      icon: '/steps/step-3.jpeg',
      text: t('customer-steps.third'),
    },
  ];

  return (
    <div className='w-full'>
      <HeroSection
        thumbnail='/customer-thumbnail.png'
        video='/customer.mp4'
        action={t('customer.hero-action')}
        href='/new-order'
        header={t('customer.hero-text')}
      />
      <WalkThroughSteps steps={steps} header={t('customer-steps.header')} />
      <DownloadAppSection />
      <CallToAction
        heading={t('customer.call-to-action-heading')}
        href='/new-order'
        paragraph={t('customer.call-to-action-paragraph')}
        buttonText={t('customer.call-to-action-btn')}
        callToActionText={t('customer.call-to-action')}
        screenshot='/screenshots/blanzin-dark.jpg'
      />
    </div>
  );
}
