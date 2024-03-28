import { locales } from '../app/i18n';
import useTypedLocale from './useTypedLocale';

export default function useTextDirection() {
  const defaultLocale = useTypedLocale();

  return defaultLocale === 'he' ? 'rtl' : 'ltr';
}
