"use client";

import React, { useMemo } from "react";
import { TranslatedText } from "../..";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";
import { footerLinks } from "../../../../constants/footer-links";
import { useI18n } from "@/utils/locales/client";
import { cn } from "@/utils";

const socialMedia = [
  {
    id: 6,
    icon: require("../../../assets/images/icons/social-media/youtube.png"),
    link: "https://www.youtube.com/blanzin",
  },
  {
    id: 3,
    icon: require("../../../assets/images/icons/social-media/facebook.png"),
    link: "https://www.facebook.com/blanzin",
  },
  {
    id: 5,
    icon: require("../../../assets/images/icons/social-media/tiktok.png"),
    link: "https://www.tiktok.com/blanzin",
  },
  {
    id: 2,
    icon: require("../../../assets/images/icons/social-media/instagram.png"),
    link: "https://www.instagram.com/blanzin",
  },
];

export function Footer() {
  const { theme } = useTheme();
  let isDark = useMemo(() => theme === "dark", [theme]);

  const t = useI18n();

  return (
    <div className=" bg-[url('/wave.svg')] bg-cover bg-no-repeat bg-background dark:bg-backgroundDark">
      <div className="p-4 container pt-8 flex flex-wrap items-center justify-between">
        <div className="flex sm:w-full  justify-center flex-col items-center sm:mt-5">
          <div className="bg-[url('/logo-backdrop.svg')]  flex justify-center items-center bg-contain bg-no-repeat">
            <Image
              alt="logo"
              className="w-[10vw] sm:w-[50vw]"
              src={
                isDark
                  ? require("../../../assets/images/logo/logo-dark.png")
                  : require("../../../assets/images/logo/logo.png")
              }
            />
          </div>

          <TranslatedText
            className="text-base text-center font-cairo text-black"
            tranlationKey="! قضي غرضك فلحين"
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
                  className="w-[2vw] sm:w-[8vw]"
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-between w-[80%] flex-wrap gap-5">
          {React.Children.toArray(
            footerLinks.map((item) => (
              <div className="flex flex-col gap-2 sm:w-full">
                <h2 className="font-bold text-xbase text-secondary ">
                  {t(item.section)}
                </h2>
                {React.Children.toArray(
                  item.items.map((link) => (
                    <Link
                      className={cn(
                        "font-medium flex gap-1  text-backgroundDark",
                        link.icon
                          ? "p-2 text-xs bg-main rounded w-[150px] items-center"
                          : "hover:text-secondary"
                      )}
                      href={link.link}
                    >
                      {link.icon && (
                        <Image
                          className="w-[2vw] sm:w-[8vw]"
                          src={link.icon}
                          alt=""
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
