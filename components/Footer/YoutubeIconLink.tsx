import React from 'react';

const YoutubeIconLink = () => {
  return (
    <a
      href="https://www.youtube.com/@maakaf-os"
      target="_blank"
      aria-label="תבקרו אותנו ביוטיוב"
    >
      <svg
        className="text-transparent hover:text-blue-400 transition fill-current stroke-[#020616] dark:stroke-[#dddfe7]"
        xmlns="http://www.w3.org/2000/svg"
        width="52"
        height="52"
        viewBox="-2 0 32 21"
      >
        <g id="Youtube-Link">
          <path
            id="Vector_out"
            d="M2 12c0-3.3 0-4.95 1.464-5.975C4.93 5 7.286 5 12 5c4.714 0 7.071 0 8.535 1.025C22 7.05 22 8.7 22 12s0 4.95-1.465 5.975C19.072 19 16.714 19 12 19s-7.071 0-8.536-1.025C2 16.95 2 15.3 2 12"
          />
          <path
            id="Vector_in"
            d="M10.5 9.908v4.184a.41.41 0 0 0 .412.408a.42.42 0 0 0 .228-.068l3.175-2.074a.405.405 0 0 0 .003-.678l-3.175-2.11a.415.415 0 0 0-.573.11a.404.404 0 0 0-.07.228"
          />
        </g>
      </svg>
    </a>
  );
};

export default YoutubeIconLink;
