import { CallToAction, HeroSection } from "@/components";
import { getI18n } from "@/utils/locales/server";
import React from "react";

export default async function ExpertPage() {
  const t = await getI18n();
  return (
    <div className="w-full">
      <HeroSection
        action={t("expert.hero-action")}
        href="/become-expert"
        header={t("expert.hero-text")}
      />
      <CallToAction
        heading={t("expert.call-to-action-heading")}
        href="/jobs"
        paragraph={t("expert.call-to-action-paragraph")}
        buttonText={t("expert.call-to-action-btn")}
        callToActionText={t("expert.call-to-action")}
        screenshot="/screenshots/blanzin.jpg"
      />
    </div>
  );
}
