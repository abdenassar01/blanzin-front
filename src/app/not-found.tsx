export const dynamic = "force-dynamic";

import React from "react";
import "./globals.css";
import { getCurrentLocale, getI18n } from "@/utils/locales/server";
import { I18nProviderClient } from "@/utils/locales/client";
import { InternationalisationParams } from "@/types";
import { setStaticParamsLocale } from "next-international/server";

export default async function NotFound({
  params: { locale },
}: InternationalisationParams) {
  const t = await getI18n();
  setStaticParamsLocale(locale);
  return (
    <html lang={locale}>
      <head>
        <title>Blanzin | not found</title>
      </head>
      <body>
        <I18nProviderClient locale={locale}>
          <div className="bg-background dark:bg-backgroundDark ">
            <div className="container flex min-h-[100vh] justify-center items-center font-monserat">
              <div className="h-[90vh] ml-20 w-full flex justify-center items-center bg-no-repeat bg-[url('/page_not_found.svg')]">
                <span className="text-secondary dark:text-main text-xl font-bold bg-main p-3 rounded">
                  {t("errors.page-not-found")}
                </span>
              </div>
            </div>
          </div>
        </I18nProviderClient>
      </body>
    </html>
  );
}
