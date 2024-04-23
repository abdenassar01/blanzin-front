"use client";

import React, { useMemo } from "react";
import { TranslatedHeading } from "../..";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";

const socialMedia = [
  {
    id: 1,
    icon: require("../../../assets/images/icons/social-media/website.png"),
    link: "https://www.blanzin.ma",
  },
  {
    id: 2,
    icon: require("../../../assets/images/icons/social-media/instagram.png"),
    link: "https://www.instagram.com/blanzin",
  },
  {
    id: 3,
    icon: require("../../../assets/images/icons/social-media/facebook.png"),
    link: "https://www.facebook.com/blanzin",
  },
  {
    id: 4,
    icon: require("../../../assets/images/icons/social-media/mail.png"),
    link: "mailto:blanzin@gmail.com",
  },
  {
    id: 5,
    icon: require("../../../assets/images/icons/social-media/tiktok.png"),
    link: "https://www.tiktok.com/blanzin",
  },
  {
    id: 6,
    icon: require("../../../assets/images/icons/social-media/youtube.png"),
    link: "https://www.youtube.com/blanzin",
  },
];

export function Footer() {
  const { theme } = useTheme();
  let isDark = useMemo(() => theme === "dark", [theme]);

  console.log("Theme: ", theme);

  return (
    <div className="p-2 pt-8 bg-[url('/wave.svg')] flex flex-col items-center justify-center bg-background dark:bg-backgroundDark">
      <Image
        alt="logo"
        className="w-[10vw] h-[10vw]"
        src={
          isDark
            ? require("../../../assets/images/logo/logo-dark.png")
            : require("../../../assets/images/logo/logo.png")
        }
      />
      <TranslatedHeading
        className="text-base text-center pt-3 text-text dark:text-textdark"
        tranlationKey="social-media-label"
      />
      <div className="flex flex-row gap-2 my-2">
        {socialMedia.map((link) => (
          <Link
            key={`social-media-link-${link.id}`}
            href={link.link}
            target="_blank"
          >
            <Image
              alt={link.link}
              src={link.icon}
              className="w-[2.5vw] h-auto"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
