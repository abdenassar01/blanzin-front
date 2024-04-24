"use client";

import { cn } from "@/utils";
import { useCurrentLocale, useI18n } from "@/utils/locales/client";
import { I18nProvider } from "@/utils/locales/provider";
import React from "react";

type Props = {
  className?: string;
  tranlationKey: string;
};

export const TranslatedText = ({ tranlationKey, className }: Props) => {
  const t = useI18n();
  const locale = useCurrentLocale();
  // @ts-ignore
  return (
    <I18nProvider locale={locale}>
      <span className={className}>{t(tranlationKey)}</span>
    </I18nProvider>
  );
};

export const TranslatedHeading = ({ tranlationKey, className }: Props) => {
  const t = useI18n();
  const locale = useCurrentLocale();

  // @ts-ignore
  return (
    <I18nProvider locale={locale}>
      {" "}
      <span className={cn("font-bold", className)}>{t(tranlationKey)}</span>
    </I18nProvider>
  );
};
