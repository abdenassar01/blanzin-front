import { CallToAction, HeroSection } from "@/components";
import { InternationalisationParams } from "@/types";
import { getI18n } from "@/utils/locales/server";
import { setStaticParamsLocale } from "next-international/server";

import React from "react";

export default async function CustomerLandingPage({
  params: { locale },
}: InternationalisationParams) {
  setStaticParamsLocale(locale);
  const t = await getI18n();
  return (
    <div className="w-full">
      <HeroSection
        action={t("customer.hero-action")}
        href="/experts"
        header={t("customer.hero-text")}
      />
      <CallToAction
        heading={t("customer.call-to-action-heading")}
        href="/new-order"
        paragraph={t("customer.call-to-action-paragraph")}
        buttonText={t("customer.call-to-action-btn")}
        callToActionText={t("customer.call-to-action")}
        screenshot="/screenshots/screenshot.svg"
      />
    </div>
  );
}
