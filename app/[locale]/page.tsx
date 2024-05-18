import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('TitleSection');

  return (
    <section className="mb-8">
      <h1>{t('title')}</h1>
    </section>
  );
}
