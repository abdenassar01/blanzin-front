import { HeroSection } from "@/components";
import { getI18n } from "@/utils/locales/server";
import React from "react";

export default async function TraineePage() {
  const t = await getI18n();
  return (
    <div className="w-full">
      <HeroSection
        action={t("hero-section.trainee-action")}
        href="/trainees"
        header={t("hero-section.trainee-text")}
      />
    </div>
  );
}
