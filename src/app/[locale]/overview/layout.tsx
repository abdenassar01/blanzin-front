import { SelectedProfile } from "@/components";
import { LayoutProps } from "@/types";
import { getI18n } from "@/utils/locales/server";
import React, { Suspense } from "react";

export default async function LandingPageLayout({ children }: LayoutProps) {
  const t = await getI18n();

  return (
    <div className="bg-[url('/background.svg')] bg-contain bg-no-repeat bg-backgroundSecondary dark:bg-backgroundSecondaryDark">
      <div className="container flex flex-col justify-center items-center py-12">
        <h1 className="font-bold text-4xl text-secondary">
          {t("heading.welcome")}
        </h1>
        <SelectedProfile />
        <Suspense fallback={<div>loading...</div>}>{children}</Suspense>
      </div>
    </div>
  );
}
