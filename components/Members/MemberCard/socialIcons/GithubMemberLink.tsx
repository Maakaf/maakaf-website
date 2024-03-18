import React from 'react';

interface GithubMemberLinkProps {
  githubUrl: string;
}

export const GithubMemberLink = ({ githubUrl }: GithubMemberLinkProps) => {
  return (
    <div className='flex justify-center'>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Github page"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.99976 18.9995C3.99976 20.4995 3.99976 16.4995 1.99976 15.9995M15.9998 21.9995V18.1294C16.0373 17.6526 15.9728 17.1733 15.8108 16.7232C15.6487 16.2732 15.3927 15.8629 15.0598 15.5195C18.1998 15.1695 21.4998 13.9795 21.4998 8.51945C21.4995 7.12328 20.9624 5.78065 19.9998 4.76945C20.4556 3.54796 20.4234 2.1978 19.9098 0.999449C19.9098 0.999449 18.7298 0.649449 15.9998 2.47945C13.7078 1.85827 11.2917 1.85827 8.99976 2.47945C6.26976 0.649449 5.08976 0.999449 5.08976 0.999449C4.57613 2.1978 4.5439 3.54796 4.99976 4.76945C4.02988 5.78815 3.49228 7.14291 3.49976 8.54945C3.49976 13.9695 6.79976 15.1595 9.93976 15.5495C9.61075 15.8894 9.35702 16.2949 9.19506 16.7394C9.03311 17.1839 8.96656 17.6575 8.99976 18.1294V21.9995"
            stroke="#F8FAFC"
            strokeWidth="1.59763"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
};
