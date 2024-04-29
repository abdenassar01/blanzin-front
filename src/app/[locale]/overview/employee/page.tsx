import { CallToAction, HeroSection } from "@/components";
import { InternationalisationParams } from "@/types";
import { getI18n } from "@/utils/locales/server";
import { setStaticParamsLocale } from "next-international/server";
import React from "react";

export default async function EmployeePage({
  params: { locale },
}: InternationalisationParams) {
  setStaticParamsLocale(locale);
  const t = await getI18n();
  return (
    <div className="w-full">
      <HeroSection
        action={t("employee.hero-action")}
        href="/jobs"
        header={t("employee.hero-text")}
      />
      <CallToAction
        heading={t("employee.call-to-action-heading")}
        href="/jobs"
        paragraph={t("employee.call-to-action-paragraph")}
        buttonText={t("employee.call-to-action-btn")}
        callToActionText={t("employee.call-to-action")}
        screenshot="/screenshots/blanzin-dark.jpg"
      />
    </div>
  );
}
