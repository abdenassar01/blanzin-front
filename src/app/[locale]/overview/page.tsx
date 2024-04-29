import { InternationalisationParams } from "@/types";
import { setStaticParamsLocale } from "next-international/server";
import { redirect } from "next/navigation";
import React from "react";

export default function Overview({
  params: { locale },
}: InternationalisationParams) {
  setStaticParamsLocale(locale);
  redirect("/overview/customer");
  return null;
}
