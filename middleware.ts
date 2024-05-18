import { LOCALES } from '@/i18n';
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: LOCALES,

  // Used when no locale matches
  defaultLocale: LOCALES[0],
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', `/(${LOCALES.join('|')})/:path*`],
};
