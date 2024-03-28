import DiscordLink from '@/components/Common/DiscordLink';
import { useTranslations } from 'next-intl';

export default function TitleSection() {
  const t = useTranslations('TitleSection');
  return (
    <div className="relative mx-auto max-w-[1600px] px-4 flex justify-between h-[90vh] 2xl:h-[90vh] xl:h-[90vh] md:h-[70vh] md:px-14 pb-10 sm:h-[80vh]">
      <div className="flex flex-col items-center w-full gap-6 mt-[1.2rem] 2xl:gap-12 lg:px-12 lg:mt-0 lg:gap-8 md:-mt-2 md:px-10 md:w-1/2 md:items-start md:gap-4">
        <h1 className="w-full text-center 2xl:text-5xl xl:text-3xl lg:text-3xl md:text-right md:text-2xl">
          {t('title')}&nbsp;-
          <br />
          {t('subTitle')}
        </h1>

        <h4 className="w-full text-center 2xl:text-2xl xl:text-sm lg:text-sm md:text-right md:text-1xs">
          {t('firstParagraph')}
          <br /> {t('secondParagraph')}
          <br />
          {t('thirdParagraph')}
          <br />
          {t('fourthParagraph')}
        </h4>

        <DiscordLink
          className="w-100 py-4 px-10 2xl:text-1xl xl:text-base lg:text-sm md:text-2xs"
          href="https://maakaf.netlify.app/"
        >
          {t('discordLink')}
        </DiscordLink>
      </div>

      <div className="absolute top-0 left-0 w-full h-full opacity-40 -z-10 2xl:h-[90%] xl:w-[650px] md:z-0 md:w-1/2 md:opacity-100 md:static">
        <div
          className={
            'bg-[url("/images/skeleton_loader.png")] dark:bg-[url("/images/skeleton_loader_dark.png")] w-full h-full bg-top bg-no-repeat bg-contain '
          }
        />
      </div>
    </div>
  );
}
