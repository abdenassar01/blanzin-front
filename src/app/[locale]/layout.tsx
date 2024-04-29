import type { Metadata } from "next";
import "../globals.css";
import "rodal/lib/rodal.css";
import { Footer, Header } from "@/components";
import { InternationalisationParams } from "@/types";
import { cn } from "@/utils";
import { I18nProvider } from "@/utils/locales/provider";

export const metadata: Metadata = {
  title: "Blanzin",
  description: "blanzin web app",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<
  {
    children: React.ReactNode;
  } & InternationalisationParams
>) {
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={cn(locale === "ar" ? "font-cairo" : "font-montserrat")}>
        <I18nProvider locale={locale}>
          <main className="bg-background dark:bg-backgroundDark min-h-[100vh] font-montserrat">
            <Header />
            {children}
            <Footer />
          </main>
        </I18nProvider>
      </body>
    </html>
  );
}
