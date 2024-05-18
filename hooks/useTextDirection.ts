import { LOCALES } from '@/i18n';
import useTypedLocale from './useTypedLocale';

export default function useTextDirection() {
  const defaultLocale = useTypedLocale();

  return defaultLocale === LOCALES[0] ? 'rtl' : 'ltr';
}
