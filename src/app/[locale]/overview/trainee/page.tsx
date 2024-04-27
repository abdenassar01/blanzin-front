import { CallToAction, HeroSection } from "@/components";
import { getI18n } from "@/utils/locales/server";
import React from "react";

export default async function TraineePage() {
  const t = await getI18n();
  return (
    <div className="w-full">
      <HeroSection
        action={t("trainee.hero-action")}
        href="/become-expert"
        header={t("expert.hero-text")}
      />
      <CallToAction
        heading={t("trainee.call-to-action-heading")}
        href="/jobs"
        paragraph={t("trainee.call-to-action-paragraph")}
        buttonText={t("trainee.call-to-action-btn")}
        callToActionText={t("trainee.call-to-action")}
        screenshot="/screenshots/blanzin-dark.jpg"
      />
    </div>
  );
}
