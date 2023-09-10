import './globals.css';
import Birzia from 'next/font/local';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const birzia = Birzia({
  src: [
    {
      path: '../public/fonts/Birzia-Black.woff2',
      weight: '900',
    },
    {
      path: '../public/fonts/Birzia-Bold.woff2',
      weight: '700',
    },
    {
      path: '../public/fonts/Birzia-Medium.woff2',
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
  description:
    'קהילת מעק"ף - מחפשי עבודה (תורמים) לקוד פתוח, היא קהילת קוד פתוח ישראלית, עבור כל מי שמתעניין בקוד פתוח - ממתחילים ועד מומחים. הצטרפו אלינו!',
  openGraph: {
    title: 'קהילת מעקף',
    description:
      'קהילת מעק"ף - מחפשי עבודה (תורמים) לקוד פתוח, היא קהילת קוד פתוח ישראלית, עבור כל מי שמתעניין בקוד פתוח - ממתחילים ועד מומחים. הצטרפו אלינו!',
    url: 'https://maakaf-website.vercel.app/',
    siteName: 'Maakaf',
    type: 'website',
    images: [
      {
        url: 'https://maakaf-website.vercel.app/favicon.ico',
        width: 600,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning={true}>
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
