"use client" 

import React from 'react';
import { useStrokeColor } from './useStrokeColor'

const LinkedinIconLink = () => {
  const strokeColor = useStrokeColor();

  return (
    <a
      href="https://www.linkedin.com/"
      target="_blank"
      aria-label="תבקרו אותנו בלינקדאין"
    >
      <svg
        className="text-transparent transition fill-current hover:text-blue-600"
        width="52"
        height="52"
        viewBox="0 0 52 52"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Linkedin-Icon">
          <g id="Group-278">
            <path
              id="Vector"
              d="M31.6666 21C33.7884 21 35.8232 21.8429 37.3235 23.3431C38.8238 24.8434 39.6666 26.8783 39.6666 29V38.3333H34.3333V29C34.3333 28.2928 34.0523 27.6145 33.5522 27.1144C33.0521 26.6143 32.3739 26.3333 31.6666 26.3333C30.9594 26.3333 30.2811 26.6143 29.781 27.1144C29.2809 27.6145 29 28.2928 29 29V38.3333H23.6666V29C23.6666 26.8783 24.5095 24.8434 26.0098 23.3431C27.5101 21.8429 29.5449 21 31.6666 21Z"
              stroke={strokeColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector_2"
              d="M18.3333 22.3333H13V38.3333H18.3333V22.3333Z"
              stroke={strokeColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector_3"
              d="M15.6667 18.3333C17.1394 18.3333 18.3333 17.1394 18.3333 15.6667C18.3333 14.1939 17.1394 13 15.6667 13C14.1939 13 13 14.1939 13 15.6667C13 17.1394 14.1939 18.3333 15.6667 18.3333Z"
              stroke={strokeColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </svg>
    </a>
  );
};

export default LinkedinIconLink;
