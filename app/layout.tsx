import './globals.css';
import Birzia from 'next/font/local';
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

export const metadata = {
  title: 'מעקף',
  description: 'מחפשי עבודה תורמים לקוד פתוח',
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
          {/* remove mt-5 when developing the footer */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
