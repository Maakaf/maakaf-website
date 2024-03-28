import { Locale } from '@/app/i18n';
import { useLocale as useUntypedLocale } from 'next-intl';

export default function useTypedLocale() {
  return useUntypedLocale() as Locale;
}
