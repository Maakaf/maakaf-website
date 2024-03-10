import ProjectCardDescription from './ProjectCardDescription';
import GithubButton from './GithubButton';
import ProjectImagePlaceholder from './ProjectImagePlaceholder.png';
import ImageWithFallback from '@/components/utils/ImageWithFallback';
import TagList from './TagList';
import AvatarList from './AvatarList';
import { AvatarData } from './Avatar';
import DiscordLink from '@/components/Common/DiscordLink';
import { RepoItem } from '@/hooks/useFetchProjects';

export interface ProjectCardProps {
  project: RepoItem;
}

export default function ProjectCard({
  project: {
    openGraphImageUrl,
    updatedAt,
    createdAt,
    name,
    collaborators,
    description,
    languages,
    contributors: { edges: contributors },
  },
}: ProjectCardProps) {
  const updatedDateString = new Date(updatedAt)
    .toLocaleDateString('he-IL')
    .replaceAll('.', '/');

  const createdDateString = new Date(createdAt)
    .toLocaleDateString('he-IL')
    .replaceAll('.', '/');

  return (
    <article
      className="w-full flex p-4 sm:p-6 gap-7 rounded-lg bg-purple-100 dark:bg-darkAccBg
      hover:bg-purple-200 dark:hover:bg-[#253245] item-hover-transition"
    >
      <aside className="hidden sm:flex flex-col items-center gap-4">
        <ImageWithFallback
          width="108"
          height="108"
          src={openGraphImageUrl}
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
            <div className="font-birzia text-xl font-bold">{name}</div>
            <div className="flex grow sm:justify-between items-center gap-2">
              <div className="font-inter text-xs text-lightText bg-blue-400 dark:bg-pink-500 rounded-[50px] px-6 py-2 font-semibold">
                {collaborators?.totalCount || 0} תורמים
              </div>
              <AvatarList
                avatars={contributors.map(c => ({
                  imageSrc: c.node.avatarUrl,
                  name: c.node.login,
                }))}
              ></AvatarList>
            </div>
          </div>
          <ProjectCardDescription
            text={description || 'none set'}
          ></ProjectCardDescription>
        </div>
        <div className="flex flex-wrap justify-between flex-col sm:flex-row gap-y-6 sm:items-end">
          <TagList
            className="flex-wrap grow basis-[min-content]"
            tags={languages.edges.map(l => l.node.name)}
          ></TagList>
          <div className="flex gap-2">
            {/* <GithubButton link={LINKS.GITHUB_LINK} />
            <DiscordLink
              href={LINKS.DISCORD_LINK}
              className="flex-grow-[2] font-inter font-semibold bg-gray-50 text-gray-600 py-2 px-6"
            >
              ערוץ דיסקורד
            </DiscordLink> */}
          </div>
        </div>
      </div>
    </article>
  );
}
