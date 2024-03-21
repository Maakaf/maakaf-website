import React from 'react';

interface TwitterMemberLinkProps {
  twitterUrl: string;
}

export const TwitterMemberLink = ({ twitterUrl }: TwitterMemberLinkProps) => {
  return (
    <div className="flex justify-center">
      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twiter page"
      >
        <svg
          className="stroke-[#020616] dark:stroke-[#dddfe7]"
          width="24"
          height="20"
          viewBox="0 0 24 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.0005 0.999314C22.0429 1.67479 20.9826 2.19142 19.8605 2.52931C19.2582 1.83682 18.4578 1.34601 17.5675 1.12324C16.6772 0.900474 15.74 0.956509 14.8826 1.28377C14.0252 1.61102 13.2889 2.19371 12.7735 2.95303C12.258 3.71235 11.9882 4.61165 12.0005 5.52931V6.52931C10.2431 6.57488 8.50176 6.18513 6.9315 5.39476C5.36123 4.60439 4.01081 3.43795 3.00049 1.99931C3.00049 1.99931 -0.999512 10.9993 8.00049 14.9993C5.94102 16.3973 3.48765 17.0982 1.00049 16.9993C10.0005 21.9993 21.0005 16.9993 21.0005 5.49931C20.9996 5.22077 20.9728 4.94291 20.9205 4.66931C21.9411 3.66281 22.6613 2.39203 23.0005 0.999314Z"
            strokeWidth="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
};

export default TwitterMemberLink;
