import { InternationalisationParams } from "@/types";
import { setStaticParamsLocale } from "next-international/server";
import React from "react";

export default function Blogs({
  params: { locale },
}: InternationalisationParams) {
  setStaticParamsLocale(locale);
  return <div>Blogs</div>;
}
