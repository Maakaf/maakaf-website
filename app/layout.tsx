import useLocalStorage from '@/hooks/useLocalStorage';

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return <html suppressHydrationWarning={true}>{children}</html>;
}
