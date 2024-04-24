"use client";

import { useEffect, type ReactNode } from "react";
import moment from "moment";
import { I18nProviderClient } from "./client";
import { HydrationProvider } from "./hydration-provider";
import "moment/locale/fr";
import "moment/locale/en-ca";
import "moment/locale/ar-ma";

type ProviderProps = {
  locale: string;
  children: ReactNode;
};

export function I18nProvider({ locale, children }: ProviderProps) {
  useEffect(() => {
    moment.locale(locale);
  }, [locale]);

  return (
    <HydrationProvider>
      <I18nProviderClient fallback={<div>loaing...</div>} locale={locale}>
        {children}
      </I18nProviderClient>
    </HydrationProvider>
  );
}
