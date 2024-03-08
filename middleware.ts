import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['he', 'en'],
  localePrefix: 'always',
  // localePrefix: undefined,
  defaultLocale: 'he',
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(he|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};