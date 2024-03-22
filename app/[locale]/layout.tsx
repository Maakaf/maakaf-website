import './globals.css';
import Birzia from 'next/font/local';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { HOST } from '@/config/consts';
import { unstable_setRequestLocale } from 'next-intl/server';

const birzia = Birzia({
  src: [
    {
      path: '../../public/fonts/Birzia-Black.woff2',
      weight: '900',
    },
    {
      path: '../../public/fonts/Birzia-Bold.woff2',
      weight: '700',
    },
    {
      path: '../../public/fonts/Birzia-Medium.woff2',
      weight: '500',
    },
  ],
});

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    template: '%s | מעקף',
    default: 'מעקף',
  },
  icons: {
    icon: `${HOST.PATH}/favicon.ico`,
  },
  description:
    'קהילת מעק"ף היא קהילה ישראלית שמטרתה לשנות את צורת העבודה על קוד פתוח. הקהילה פתוחה לכל מי שמעוניין בתרומה קוד פתוח, בין אם הוא מתחיל או מומחה.',
  openGraph: {
    title: 'קהילת מעקף',
    description:
      'קהילת מעק"ף היא קהילה ישראלית שמטרתה לשנות את צורת העבודה על קוד פתוח. הקהילה פתוחה לכל מי שמעוניין בתרומה קוד פתוח, בין אם הוא מתחיל או מומחה.',
    url: `${HOST.PATH}`,
    siteName: 'Maakaf',
    type: 'website',
    images: [
      {
        url: `${HOST.PATH}/favicon.ico`,
        width: 600,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale} dir="rtl" suppressHydrationWarning={true}>
      <meta charSet="ISO-8859-1" />

      <body
        className={`min-h-screen flex flex-col items-stretch m-0 darkmode-main ${birzia.className} ${inter.variable}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="flex flex-col flex-1 h-full pt-24 md:pt-32">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

// export function generateStaticParams() {
//   return locales.map(locale => ({ locale }));
// }
