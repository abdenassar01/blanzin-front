import type { Metadata } from 'next';
import 'rodal/lib/rodal.css';
import '../globals.css';
import { Footer, Header } from '@/components';
import { InternationalisationParams } from '@/types';
import { cn } from '@/utils';
import { I18nProvider } from '@/utils/locales/provider';
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  title: 'Blanzin',
  description: 'blanzin web app',
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
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={cn(locale === 'ar' ? 'font-cairo' : 'font-montserrat')}>
        <I18nProvider locale={locale}>
          <ThemeProvider attribute='class'>
            <main className='min-h-[100vh] overflow-x-hidden bg-background font-montserrat dark:bg-backgroundDark'>
              <Header />
              {children}
              <Footer />
            </main>
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
