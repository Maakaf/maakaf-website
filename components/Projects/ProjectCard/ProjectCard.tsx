import ProjectCardDescription from './ProjectCardDescription';
import GithubButton from './GithubButton';
import DiscordButton from './DiscordButton';
import { useMemo } from 'react';
import ProjectImagePlaceholder from './ProjectImagePlaceholder.png';
import ImageWithFallback from '@/components/utils/ImageWithFallback';
import TagList from './TagList';
import AvatarList from './AvatarList';
import { AvatarData } from './Avatar';

export interface ProjectCardProps {
  projectThumbnailSrc: string;
  updatedDate: Date;
  createdDate: Date;
  projectName: string;
  contributorCount: number;
  contributorAvatars: AvatarData[];
  description: string;
  tags: string[];
  githubLink?: string;
  discordLink?: string;
}

export default function ProjectCard({
  projectThumbnailSrc,
  updatedDate,
  createdDate,
  projectName,
  contributorCount,
  contributorAvatars,
  description,
  tags,
  githubLink,
  discordLink,
}: ProjectCardProps) {
  const updatedDateString = useMemo(
    () => updatedDate.toLocaleDateString('he-IL').replaceAll('.', '/'),
    [updatedDate]
  );
  const createdDateString = useMemo(
    () => createdDate.toLocaleDateString('he-IL').replaceAll('.', '/'),
    [createdDate]
  );

  return (
    <article
      className="flex p-4 sm:p-6 gap-7 rounded-lg bg-blue-100 dark:bg-darkAccBg
    dark:hover:bg-[#253245] item-hover-transition"
    >
      <aside className="hidden sm:flex flex-col items-center gap-4">
        <ImageWithFallback
          width="108"
          height="108"
          src={projectThumbnailSrc}
          alt="project name"
          fallback={ProjectImagePlaceholder}
        ></ImageWithFallback>
        <div className="flex flex-col items-center w-fit gap-2">
          <div className="w-fit min-w-max font-inter text-xs text-darkText dark:text-lightText">
            ת. עדכון {updatedDateString}
          </div>
          <div className="w-fit min-w-max font-inter text-xs text-darkText dark:text-lightText">
            ת. הקמה {createdDateString}
          </div>
        </div>
      </aside>
      <div className="flex grow flex-col justify-between gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap flex-col sm:flex-row sm:items-center gap-6 gap-y-2">
            <div className="font-birzia text-xl font-bold">{projectName}</div>
            <div className="flex grow sm:justify-between items-center gap-2">
              <div className="font-inter text-xs text-lightText bg-blue-400 dark:bg-pink-500 rounded-[50px] px-6 py-2 font-semibold">
                {contributorCount} תורמים
              </div>
              <AvatarList avatars={contributorAvatars}></AvatarList>
            </div>
          </div>
          <ProjectCardDescription text={description}></ProjectCardDescription>
        </div>
        <div className="flex flex-wrap justify-between flex-col sm:flex-row gap-y-6 sm:items-end">
          <TagList
            className="flex-wrap grow basis-[min-content]"
            tags={tags}
          ></TagList>
          <div className="flex gap-2">
            {githubLink && <GithubButton link={githubLink} />}
            {discordLink && <DiscordButton link={discordLink} />}
          </div>
        </div>
      </div>
    </article>
  );
}
