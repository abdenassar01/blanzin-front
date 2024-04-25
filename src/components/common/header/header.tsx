import Image from "next/image";
import React from "react";
import DesktopNavbar from "./desktop-navbar";
import HeaderMobile from "./header-mobile";
import LanguagesToggle from "./languages-toggle";
import ProfileDropdown from "./profile-dropdown";

export function Header() {
  return (
    <header className="bg-backgroundSecondary darkbg-backgroundSecondaryDark ">
      <div className="container py-3 flex items-center justify-between">
        <Image
          alt="blanzin logo"
          className="w-auto h-[3.5vw] sm:hidden"
          src={require("../../../assets/images/logo/logo-full.png")}
        />
        <Image
          alt="blanzin logo"
          className="w-auto h-[8vw] hidden sm:block"
          src={require("../../../assets/images/logo/logo.png")}
        />
        <DesktopNavbar />
        <HeaderMobile />
        <div className="flex gap-1 items-center">
          <ProfileDropdown />
          <LanguagesToggle />
        </div>
      </div>
    </header>
  );
}
