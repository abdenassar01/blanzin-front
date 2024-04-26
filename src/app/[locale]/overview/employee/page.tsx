import { HeroSection } from "@/components";
import { getI18n } from "@/utils/locales/server";
import React from "react";

export default async function EmployeePage() {
  const t = await getI18n();
  return (
    <div className="w-full">
      <HeroSection
        action={t("hero-section.employee-action")}
        href="/jobs"
        header={t("hero-section.employee-text")}
      />
    </div>
  );
}
