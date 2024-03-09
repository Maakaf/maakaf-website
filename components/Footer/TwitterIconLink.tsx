import React from 'react';

const TwitterIconLink = () => {
  return (
    <a
      href="https://twitter.com/"
      target="_blank"
      aria-label="תבקרו אותנו בטוויטר"
    >
      <svg
        width="52"  
        height="52"
        viewBox="0 0 52 52"
        xmlns="http://www.w3.org/2000/svg"
        className="text-transparent transition duration-300 cursor-pointer fill-current hover:text-blue-400"
      >
        <g id="Twitter">
          <path
            id="Vector"
            d="M40.3333 17.0134C39.0565 17.914 37.6428 18.6029 36.1467 19.0534C35.3437 18.1301 34.2764 17.4757 33.0894 17.1786C31.9023 16.8816 30.6527 16.9563 29.5094 17.3927C28.3662 17.829 27.3846 18.6059 26.6973 19.6184C26.01 20.6308 25.6503 21.8299 25.6667 23.0534V24.3867C23.3235 24.4475 21.0017 23.9278 18.908 22.874C16.8143 21.8202 15.0138 20.2649 13.6667 18.3467C13.6667 18.3467 8.33333 30.3467 20.3333 35.6801C17.5874 37.544 14.3162 38.4786 11 38.3467C23 45.0134 37.6667 38.3467 37.6667 23.0134C37.6654 22.642 37.6297 22.2715 37.56 21.9067C38.9208 20.5647 39.8811 18.8704 40.3333 17.0134Z"
            stroke="#020616"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </a>
  );
};

export default TwitterIconLink;
