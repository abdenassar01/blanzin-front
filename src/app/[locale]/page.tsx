import Home from "@/pages/home/home";
import { InternationalisationParams } from "@/types";
import { setStaticParamsLocale } from "next-international/server";
import { redirect } from "next/navigation";

export default function HomePage({
  params: { locale },
}: InternationalisationParams) {
  setStaticParamsLocale(locale);
  redirect("/overview/customer");
  return null;
}
