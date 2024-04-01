import Image from 'next/image';
import SectionTitle from '../Common/SectionTitle';
import { useTranslations } from 'next-intl';

const LinksSection = () => {
  const t = useTranslations('Newbies.linksSection');

  const linksData = [
    {
      icon: 'Maakaf_Logo',
      title: t('header1'),
      description: t('paragraph1'),
      link: 'https://github.com/UrielOfir/os-practice',
    },
    {
      icon: 'Discord_Logo',
      title: t('header2'),
      description: t('paragraph2'),
      link: 'https://discord.com/invite/a2VyCjRk2M',
    },
    {
      icon: 'WhatsApp_Logo',
      title: t('header3'),
      description: t('paragraph3'),
      link: 'https://chat.whatsapp.com/E5a59DtSaHNBwnczxVW1FY',
    },
  ];

  return (
    <div className="w-full py-12 md:py-20">
      <SectionTitle title={t('title')} />

      <div className="flex flex-col items-center mt-8 gap-4 sm:flex-row sm:items-center sm:justify-center sm:flex-wrap">
        {linksData.map((linkData, index) => (
          <a
            data-testid={`NewbiesExternalLink-${linkData.icon}`}
            key={index}
            href={linkData.link}
            target="_blank"
            className="group w-[90vw] min-h-[132px] md:w-full md:max-h-[100px] px-4 py-3 md:px-12 md:py-5 md:mx-20 opacity-80 rounded-lg flex gap-2 justify-between items-center bg-purple-100 hover:bg-purple-200 border border-purple-100 hover:border-purple-700 dark:bg-gray-800 dark:border-gray-800 dark:hover:border dark:hover:border-purple-500 "
          >
            <div className="flex gap-8 md:gap-10 items-center">
              <div className="min-w-[50px]">
                <Image
                  src={`/images/${linkData.icon}.svg`}
                  alt={`${linkData.icon} icon`}
                  width={50}
                  height={50}
                />
              </div>

              <div className="flex flex-col ">
                <h5 className="font-medium font-birzia text-2xl">
                  {linkData.title}
                </h5>

                <p className="font-normal font-inter text-base">
                  {linkData.description}
                </p>
              </div>
            </div>

            <div className="hidden md:block">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className=" group-hover:stroke-purple-700 stroke-gray-600  group-hover:dark:stroke-purple-500"
                  cx="25"
                  cy="25"
                  r="24.5"
                />
                <path
                  className="fill-gray-600 group-hover:fill-purple-700  group-hover:dark:fill-purple-500 "
                  d="M16 25L29.5 17.2058L29.5 32.7942L16 25Z"
                />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default LinksSection;
