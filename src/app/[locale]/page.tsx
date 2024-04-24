import Home from "@/pages/home/home";
import { InternationalisationParams } from "@/types";
import { unstable_setRequestLocale } from "next-intl/server";

export default function HomePage({
  params: { locale },
}: InternationalisationParams) {
  unstable_setRequestLocale(locale);

  return <Home />;
}
