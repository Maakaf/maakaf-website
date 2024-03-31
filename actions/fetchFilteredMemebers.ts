'use server';
import { Member } from '@/types';

const dummyMember: Member = {
  id: 4,
  imgUrl: '/images/avatars/avatar8.jpg',
  name: 'Fill name',
  shortDescription: 'fill shortDescription',
  longDescription: 'fill longDescription',
  joinDate: 'fill joinDate',
  isAdmin: false,
};

const MEMBER_ENDPOINT = 'https://baas-data-provider.onrender.com/members';

export const fetchFilteredMemebers = async (term: string) => {
  try {
    const response = await fetch(MEMBER_ENDPOINT);
    const membersData: any[] = await response.json();
    const members = membersData.map(memberData => {
      const {
        _id,
        name,
        discordUser,
        links: { github, linkedIn },
        description,
        meta,
        timestamp,
        item: {
          item: {
            data: {
              user: { avatarUrl },
            },
          },
        },
      } = memberData;

      return {
        id: _id || dummyMember.id,
        imgUrl: avatarUrl || dummyMember.imgUrl,
        name: name || dummyMember.name,
        shortDescription: description || dummyMember.shortDescription,
        longDescription: dummyMember.longDescription,
        joinDate: dummyMember.joinDate,
        isAdmin: dummyMember.isAdmin,
        github: github || '',
        linkedIn: linkedIn || '',
        _id: _id || '',
        meta: meta || {},
        timestamp: timestamp || '',
        discordUser: discordUser || '',
      };
    });

    const filteredByTerm = members.filter(member => {
      return (
        member.name.toLowerCase().includes(term.toLowerCase()) ||
        member.shortDescription.toLowerCase().includes(term.toLowerCase())
      );
    });

    console.log({ filteredByTerm });
    return filteredByTerm;
  } catch (error) {
    console.error('Error fetching or processing member data:', error);
    return [];
  }
};
