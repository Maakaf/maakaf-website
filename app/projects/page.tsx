'use client';

import FiltersBar from '@/components/Projects/FiltersBar/FiltersBar';
import { Metadata } from 'next';
import ProjectCard from '@/components/Projects/ProjectCard/ProjectCard';

export const metadata: Metadata = {
  title: 'הפרויקטים',
  description:
    'הכירו את פרויקטי הקוד הפתוח של חברי הקהילה, ובחרו לאילו פרויקטים תרצו להצטרף',
  openGraph: {
    title: 'הפרויקטים | מעקף',
    description:
      'הכירו את פרויקטי הקוד הפתוח של חברי הקהילה, ובחרו לאילו פרויקטים תרצו להצטרף',
    url: 'https://maakaf-website.vercel.app/projects',
    siteName: 'Maakaf',
    type: 'website',
    images: [
      {
        url: 'https://maakaf-website.vercel.app/favicon.ico',
        width: 600,
        height: 600,
      },
    ],
  },
};

const ProjectsPage = () => {
  const updatedDate = new Date('2023/3/14');
  const createdDate = new Date('2023/3/14');
  return (
    <section className="h-full">
      <FiltersBar />
      <ProjectCard
        projectThumbnailSrc={'/'}
        updatedDate={updatedDate}
        createdDate={createdDate}
      ></ProjectCard>
    </section>
  );
};

export default ProjectsPage;
