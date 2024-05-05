import Image from 'next/image';
import React from 'react';
import DesktopNavbar from './desktop-navbar';
import HeaderMobile from './header-mobile';
import LanguagesToggle from './languages-toggle';
import ProfileDropdown from './profile-dropdown';
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import { Logo } from './logo';

export function Header() {
  return (
    <header className='bg-backgroundSecondary dark:bg-backgroundSecondaryDark '>
      <div className='container flex items-center justify-between py-3'>
        <Link href='/'>
          <Logo />
        </Link>
        <div className='flex items-center gap-2'>
          <DesktopNavbar />
          <ProfileDropdown />
          <LanguagesToggle />
          <HeaderMobile />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
