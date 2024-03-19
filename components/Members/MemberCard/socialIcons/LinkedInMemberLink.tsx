import React from 'react';

interface LinkedInMemProps {
  linkedInUrl: string;
}

export const LinkedInMemberLink = ({ linkedInUrl }: LinkedInMemProps) => {
  return (
    <div className="flex justify-center">
      <a
        href={linkedInUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
      >
        <svg
          className="stroke-[#020616] dark:stroke-[#dddfe7]"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.0001 8C17.5914 8 19.1175 8.63214 20.2428 9.75736C21.368 10.8826 22.0001 12.4087 22.0001 14V21H18.0001V14C18.0001 13.4696 17.7894 12.9609 17.4143 12.5858C17.0393 12.2107 16.5306 12 16.0001 12C15.4697 12 14.961 12.2107 14.5859 12.5858C14.2108 12.9609 14.0001 13.4696 14.0001 14V21H10.0001V14C10.0001 12.4087 10.6323 10.8826 11.7575 9.75736C12.8827 8.63214 14.4088 8 16.0001 8Z"
            strokeWidth="1.59763"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.00012 9H2.00012V21H6.00012V9Z"
            strokeWidth="1.59763"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.00012 6C5.10469 6 6.00012 5.10457 6.00012 4C6.00012 2.89543 5.10469 2 4.00012 2C2.89555 2 2.00012 2.89543 2.00012 4C2.00012 5.10457 2.89555 6 4.00012 6Z"
            strokeWidth="1.59763"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
};
