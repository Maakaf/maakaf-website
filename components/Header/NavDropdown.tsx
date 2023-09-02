'use client';

import { Dropdown } from '../utils/Dropdown';

type CommunityDropdownItems = {
  title: string;
  titleHoverColor: string;
  text?: string;
  linkPath?: string;
};

const communityDropdownItems: CommunityDropdownItems[] = [
  {
    title: 'Newbies',
    titleHoverColor: 'group-hover:text-purple-400',
    text: 'פעם ראשונה בקוד פתוח',
    linkPath: '/newbies',
  },
  {
    title: 'Members',
    titleHoverColor: 'group-hover:text-green-200',
    text: 'מי שכבר התנסה בקוד פתוח',
    linkPath: '/members',
  },
  {
    title: 'Maintainers',
    titleHoverColor: 'group-hover:text-pink-500',
    text: 'בעלי פרויקטים שרוצים להצטרף',
    linkPath: '/maintainers',
  },
];

export const NavDropdown = () => {
  return (
    <Dropdown
      field={{
        label: 'קהילה',
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
