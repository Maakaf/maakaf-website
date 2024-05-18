import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// Can be imported from a shared config
export const LOCALES = ['he', 'en'] as const;

export type Locale = (typeof LOCALES)[number];

export default getRequestConfig(async ({ locale }) => {
  if (!LOCALES.includes(locale as Locale)) notFound();

  return {
    messages: (await import(`../public/locales/${locale}.json`)).default,
  };
});
