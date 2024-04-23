import type { Metadata } from "next";
import "../globals.css";
import { Footer, Header } from "@/components";
import { locales } from "@/config";
import { unstable_setRequestLocale } from "next-intl/server";
import { InternationalisationParams } from "@/types";
import { cn } from "@/utils";
import { NextIntlClientProvider, useMessages } from "next-intl";

export const metadata: Metadata = {
  title: "Blanzin",
  description: "blanzin web app",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<
  {
    children: React.ReactNode;
  } & InternationalisationParams
>) {
  unstable_setRequestLocale(locale);
  const messages = useMessages();
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={cn(locale === "ar" ? "font-cairo" : "font-montserrat")}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <main className="bg-background dark:bg-backgroundDark min-h-[100vh] font-montserrat">
            <Header />
            {children}
            <Footer />
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
