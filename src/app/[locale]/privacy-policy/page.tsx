import { InternationalisationParams } from "@/types";
import { setStaticParamsLocale } from "next-international/server";
import React from "react";

export default function PrivacyPolicy({
  params: { locale },
}: InternationalisationParams) {
  setStaticParamsLocale(locale);
  return <div>PrivacyPolicy</div>;
}
