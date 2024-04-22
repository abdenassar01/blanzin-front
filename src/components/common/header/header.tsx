import Image from "next/image";
import React from "react";
import DesktopNavbar from "./desktop-navbar";
import HeaderMobile from "./header-mobile";
import LanguagesToggle from "./languages-toggle";

export function Header() {
  return (
    <header className="container py-3 flex justify-between">
      <Image
        alt="blanzin logo"
        className="w-auto h-[2.5vw] sm:hidden"
        src={require("../../../assets/images/logo/logo-full.png")}
      />
      <Image
        alt="blanzin logo"
        className="w-auto h-[8vw] hidden sm:block"
        src={require("../../../assets/images/logo/logo.png")}
      />
      <DesktopNavbar />
      <HeaderMobile />
      <LanguagesToggle />
    </header>
  );
}
