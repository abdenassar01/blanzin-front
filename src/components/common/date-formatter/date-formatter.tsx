"use client";

import React from "react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import fr from "javascript-time-ago/locale/fr";
import ar from "javascript-time-ago/locale/ar";
import { TranslatedText } from "..";
import { useLocale } from "next-intl";

interface Props {
  time: string;
  className?: string;
}

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(fr);
TimeAgo.addLocale(ar);

export const DateTimeFormatter = ({ time, className }: Props) => {
  const locale = useLocale();

  const timeAgo = new TimeAgo(
    locale === "fr" ? "fr-FR" : locale === "ar" ? "ar-AR" : "en-EN"
  );
  return (
    <TranslatedText
      className={className}
      tranlationKey={timeAgo.format(new Date(time))}
    />
  );
};
