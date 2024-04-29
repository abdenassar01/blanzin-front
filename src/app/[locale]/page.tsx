import Home from "@/pages/home/home";
import { InternationalisationParams } from "@/types";
import { unstable_setRequestLocale } from "next-intl/server";
import { redirect } from "next/navigation";

export default function HomePage({
  params: { locale },
}: InternationalisationParams) {
  unstable_setRequestLocale(locale);
  redirect("/overview/customer");
  return <Home />;
}
