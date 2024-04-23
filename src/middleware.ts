import { locales, defaultLocale } from "@/config";

import createIntlMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

export default async function middleware(request: NextRequest) {
  const defaultLocale = request.headers.get("x-your-custom-locale") || "en";

  const handleI18nRouting = createIntlMiddleware({
    locales: locales,
    defaultLocale: "en",
  });
  const response = handleI18nRouting(request);

  response.headers.set("x-your-custom-locale", defaultLocale);

  return response;
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico).*)"],
};
