import { Dropdown } from '../utils/Dropdown';

type CommunityDropdownItems = {
  title: string;
  titleHoverColor: string;
  text?: string;
  linkPath?: string;
};

interface NavDropdownProps {
  headerText: {
    projects: string;
    aboutUs: string;
    community: string;
    newbies: string;
    members: string;
    maintainers: string;
  };
}

export const NavDropdown = ({ headerText }: NavDropdownProps) => {
  const communityDropdownItems: CommunityDropdownItems[] = [
    {
      title: 'Newbies',
      titleHoverColor: 'group-hover:text-purple-400',
      text: headerText.newbies,
      linkPath: '/newbies',
    },
    {
      title: 'Members',
      titleHoverColor: 'group-hover:text-green-200',
      text: headerText.members,
      linkPath: '/members',
    },
    {
      title: 'Maintainers',
      titleHoverColor: 'group-hover:text-pink-500',
      text: headerText.maintainers,
      linkPath: '/maintainers',
    },
  ];

  return (
    <Dropdown
    data-testId={"lalalallala"}
      field={{
        label: headerText.community,
        iconPath: '/images/polygon_white.svg',
        darkIconPath: '/images/polygon_dark.svg',
        alt: 'polygon',
        width: 10,
        height: 10,
      }}
      options={communityDropdownItems}
    />
  );
};
