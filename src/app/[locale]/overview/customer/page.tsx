import { HeroSection } from "@/components";
import { getI18n } from "@/utils/locales/server";

import React from "react";

export default async function CustomerLandingPage() {
  const t = await getI18n();
  return (
    <div className="w-full">
      <HeroSection
        action={t("hero-section.customer-action")}
        href="/experts"
        header={t("hero-section.customer-text")}
      />
    </div>
  );
}
