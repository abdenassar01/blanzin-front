"use client";

import { cn, useOnHoverOutside } from "@/utils";
import Image from "next/image";
import { useRouter, usePathname } from "@/navigation";
import React, { startTransition, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { TranslatedText } from "../translated-text";
import { useLocale } from "next-intl";

const languages = [
  {
    value: "en",
    label: "english",
    icon: require("@/assets/images/languages/english.png"),
  },
  {
    value: "fr",
    label: "frensh",
    icon: require("@/assets/images/languages/frensh.png"),
  },
  {
    value: "ar",
    label: "arabic",
    icon: require("@/assets/images/languages/arabic.png"),
  },
];

type Props = {
  className?: string;
};

export default function LanguagesToggle({ className }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();

  function onLangClick(nextLocale: string) {
    startTransition(() => {
      //@ts-ignore
      router.replace({ pathname, params }, { locale: nextLocale });
    });
  }

  const dropdownRef = useRef(null);

  const [showLanguesDropdown, setShowLanguesDropdown] =
    useState<boolean>(false);

  const closeDropdown = () => {
    setShowLanguesDropdown(false);
  };

  useOnHoverOutside(dropdownRef, closeDropdown);

  return (
    <div ref={dropdownRef} className="relative">
      <div
        onMouseMove={() => {
          setShowLanguesDropdown(true);
        }}
      >
        <Image
          className="w-[2.5vw] h-auto sm:w-[8vw]"
          src={require("@/assets/images/svg/language.svg")}
          alt="language"
        />
      </div>
      <div
        className={cn(
          "absolute w-[220px] top-5 -right-4 h-10 bg-[transparent]",
          showLanguesDropdown ? "flex" : "hidden"
        )}
      />
      <div
        className={cn(
          "min-w-[220px] flex flex-col shadow-md bg-white absolute transition-all duration-500 top-[70px] rounded border-t-4 border-secondary dark:border-main",
          showLanguesDropdown ? "opacity-100  top-10 z-20" : "opacity-0 -z-10",
          locale === "ar" ? "-left-4" : "-right-4"
        )}
      >
        {React.Children.toArray(
          languages.map((lang) => (
            <button
              dir="ltr"
              onClick={() => onLangClick(lang.value)}
              className={cn(
                "p-2 px-4 flex items-center gap-1 rounded bg-transparent text-text dark:text-textdark hover:text-secondary dark:hover:text-main"
              )}
            >
              <Image
                className="w-[3vw] sm:w-[9vw]"
                alt={lang.label}
                src={lang.icon}
              />
              <TranslatedText
                className="font-medium"
                tranlationKey={lang.label}
              />
            </button>
          ))
        )}
      </div>
    </div>
  );
}
