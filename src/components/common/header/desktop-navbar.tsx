'use client'

import React from 'react'
import { routes } from '@/configs/routes'
import { ActiveLink } from '../active-link/active-link'
import { useI18n, useScopedI18n } from '@/utils/locales/client'
import { MultipleLinks } from '@/components/common/header/multiple-links'

export default function DesktopNavbar() {
  const t = useScopedI18n('links')
  return (
    <div className='sm:hidde mr-5 flex items-center gap-20 sm:hidden'>
      {React.Children.toArray(
        routes.map(item =>
          item.super ? (
            <ActiveLink
              key={`link-item-${item.id}`}
              className=''
              active={item.link === '/'}
              link={item.link || ''}
              suffix=''>
              {t(item.text)}
            </ActiveLink>
          ) : (
            <MultipleLinks
              key={`link-item-${item.id}`}
              link={item.link}
              text={item.text}
              super={false}
              items={item.items}
            />
          ),
        ),
      )}
    </div>
  )
}
