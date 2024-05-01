import Image from 'next/image';
import React from 'react';
import DesktopNavbar from './desktop-navbar';
import HeaderMobile from './header-mobile';
import LanguagesToggle from './languages-toggle';
import ProfileDropdown from './profile-dropdown';
import Link from 'next/link';

export function Header() {
  return (
    <header className='bg-backgroundSecondary dark:bg-backgroundSecondaryDark '>
      <div className='container flex items-center justify-between py-3'>
        <Link href='/'>
          <Image
            alt='blanzin logo'
            className='h-[3.5vw] w-auto sm:hidden'
            src={require('../../../assets/images/logo/logo-full.png')}
          />
          <Image
            alt='blanzin logo'
            className='hidden h-[8vw] w-auto sm:block'
            src={require('../../../assets/images/logo/logo.png')}
          />
        </Link>
        <div className='flex items-center gap-2'>
          <DesktopNavbar />
          <ProfileDropdown />
          <LanguagesToggle />
          <HeaderMobile />
        </div>
      </div>
    </header>
  );
}
