'use client';

import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import SectionTitle from '../Common/SectionTitle';
import BenefitCard from './BenefitCard';
import { motion } from 'framer-motion';

const variants = {
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    rotateZ: '0deg',
    transition: {
      delay: index * 0.3,
      ease: 'easeIn',
      duration: 0.6,
      type: 'spring',
      stiffness: 250,
    },
  }),
  initial: { opacity: 0, y: 0 },
};

const BeOurFriends = () => {
  const t = useTranslations('Components.home.beOurFriends');
  const localLang = useLocale();
  const direction = localLang == 'he' ? 'rtl' : 'ltr';

  const cards = [
    {
      title: t('gettingExperience'),
      description: t('gettingExperienceDescription'),
    },
    {
      title: t('contacts'),
      description: t('contactsDescription'),
    },
    {
      title: t('marketRelevance'),
      description: t('marketRelevanceDescription'),
    },
    {
      title: t('jobs'),
      description: t('jobsDescription'),
    },
    {
      title: t('support'),
      description: t('supportDescription'),
    },
    {
      title: t('vibrantCommunity'),
      description: t('vibrantCommunityDescription'),
    },
  ];

  return (
    <section
      dir={direction}
      className="flex flex-col justify-start py-16 md:py-32"
    >
      <div
        data-testid={`beOurFirendsTitle`}
        className="flex flex-col-reverse self-start md:flex-row md:items-center"
      >
        <SectionTitle title={t('title')} />
      </div>
      <div
        data-testid={`beOurFirendsItemContainer`}
        className="grid grid-cols-1 gap-4 mx-10 my-8 gap-x-20 md:mx-36 md:grid-cols-2 place-content-around"
      >
        {cards.map((card, index) => (
          <motion.div
            data-testid={`beOurFirendsItem${index}`}
            key={index}
            custom={index}
            variants={variants}
            initial="initial"
            whileInView="visible"
            viewport={{ once: true, margin: '10px' }}
          >
            <BenefitCard
              index={index}
              title={card.title}
              description={card.description}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BeOurFriends;
