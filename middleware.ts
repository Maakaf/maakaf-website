// import { LOCALES } from '@/i18n';
// import createMiddleware from 'next-intl/middleware';

// export default createMiddleware({
//   // A list of all locales that are supported
//   locales: LOCALES,
//   localePrefix: 'always',
//   // Used when no locale matches
//   defaultLocale: LOCALES[0],
// });
// console.log("🚀 ~ LOCALES.join('|'):", LOCALES.join('|'));

// export const config = {
//   // Match only internationalized pathnames
//   matcher: [
//     '/',
//     `/(${LOCALES.join('|')})/:path*`,
//     '/((?!_next|_vercel|.*\\..*).*)',
//   ],
// };

import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['he', 'en'],
  localePrefix: 'always',
  // localePrefix: undefined,
  defaultLocale: 'he',
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(he|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
};
