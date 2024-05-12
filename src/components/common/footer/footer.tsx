'use client';

import React, { useMemo } from 'react';
import { TranslatedText } from '../..';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { footerLinks } from '../../../../constants/footer-links';
import { useI18n } from '@/utils/locales/client';
import { cn } from '@/utils';

const socialMedia = [
  {
    id: 6,
    icon: require('../../../assets/images/icons/social-media/youtube.png'),
    link: 'https://www.youtube.com/blanzin',
  },
  {
    id: 3,
    icon: require('../../../assets/images/icons/social-media/facebook.png'),
    link: 'https://www.facebook.com/blanzin',
  },
  {
    id: 5,
    icon: require('../../../assets/images/icons/social-media/tiktok.png'),
    link: 'https://www.tiktok.com/blanzin',
  },
  {
    id: 2,
    icon: require('../../../assets/images/icons/social-media/instagram.png'),
    link: 'https://www.instagram.com/blanzin',
  },
];

export function Footer() {
  const { theme } = useTheme();
  let isDark = useMemo(() => theme === 'dark', [theme]);

  const t = useI18n();

  return (
    <div className='main-background-gradient py-6'>
      <div className='container flex flex-wrap items-center justify-between p-4 md:justify-center sm:justify-center'>
        <div className='flex flex-col  items-center justify-center sm:mt-5 sm:w-full'>
          <div className='flex items-center justify-center bg-contain bg-no-repeat'>
            <Image
              alt='logo'
              className='w-[10vw] max-w-40 sm:w-[50vw]'
              src={
                isDark
                  ? require('../../../assets/images/logo/logo-dark.png')
                  : require('../../../assets/images/logo/logo.png')
              }
            />
          </div>

          <TranslatedText
            className='mb-4 text-center font-cairo text-base text-black'
            tranlationKey='! قضي غرضك فلحين'
          />
          <div className='my-2 flex flex-row gap-2'>
            {socialMedia.map((link) => (
              <Link
                key={`social-media-link-${link.id}`}
                href={link.link}
                target='_blank'
              >
                <Image
                  alt={link.link}
                  src={link.icon}
                  className='w-[2vw] sm:w-[8vw]'
                />
              </Link>
            ))}
          </div>
        </div>
        <div className='flex w-[80%] flex-wrap justify-between gap-5 md:justify-center'>
          {React.Children.toArray(
            footerLinks.map((item) => (
              <div className='flex flex-col gap-2 sm:w-full'>
                <h2 className='text-xbase font-bold text-secondary '>
                  {t(item.section)}
                </h2>
                {React.Children.toArray(
                  item.items.map((link) => (
                    <Link
                      className={cn(
                        'flex gap-1 font-medium  text-backgroundDark',
                        link.icon
                          ? 'w-[10vw] min-w-[150px] items-center rounded bg-main p-2 text-xs'
                          : 'hover:text-secondary'
                      )}
                      href={link.link}
                    >
                      {link.icon && (
                        <Image
                          className='w-[2vw] sm:w-[8vw]'
                          src={link.icon}
                          alt=''
                        />
                      )}
                      <span>{t(link.label)}</span>
                    </Link>
                  ))
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
