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
    <header className='fixed left-0 right-0 top-0 z-[999] bg-backgroundSecondary shadow-lg shadow-[#0000806c] dark:bg-backgroundSecondaryDark dark:shadow-[#ffcc006c]'>
      <div className='container flex items-center justify-between py-3'>
        <Link href='/'>
          <Logo />
        </Link>
        <DesktopNavbar />
        <div className='flex items-center gap-5'>
          <ProfileDropdown />
          <LanguagesToggle />
          <div className='flex sm:hidden'>
            <ThemeToggle />
          </div>
          <HeaderMobile />
        </div>
      </div>
    </header>
  );
}
