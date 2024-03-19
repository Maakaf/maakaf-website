import React, { SVGProps } from 'react';
import ImageWithFallback from '@/components/utils/ImageWithFallback';

interface MemberCardInfoProps {
  imgUrl: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  joinDate: string;
  isAdmin: boolean;
}

function Crown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 14 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.50627 0.253069C7.29803 -0.0843556 6.80738 -0.0843565 6.59913 0.253068L4.62678 3.44888L0.705087 2.11843C0.291657 1.97818 -0.105816 2.36723 0.0255619 2.78357L1.54556 7.60046C1.58239 7.71719 1.65204 7.80831 1.7389 7.87123C1.77628 7.97324 1.87424 8.04603 1.9892 8.04603H12.1161C12.2633 8.04603 12.3826 7.92672 12.3826 7.77953V7.74748C12.4127 7.70428 12.4372 7.65518 12.4545 7.60046L13.9745 2.78357C14.1058 2.36723 13.7084 1.97818 13.2949 2.11843L9.46038 3.41932L7.50627 0.253069ZM1.7227 8.71248H12.3826V10.578C12.3826 10.9459 12.0843 11.2442 11.7164 11.2442H2.38895C2.02099 11.2442 1.7227 10.9459 1.7227 10.578V8.71248Z"
      />
    </svg>
  );
}

export const MemberCardInfo = ({
  imgUrl,
  name,
  shortDescription,
  longDescription,
  joinDate,
  isAdmin,
}: MemberCardInfoProps) => {
  return (
    <div className="flex flex-col rounded-md p-[10px] pr-6 w-full">
      <div className="flex gap-6">
        <ImageWithFallback
          width="50"
          height="50"
          src={imgUrl}
          alt={name}
          fallback={imgUrl}
        />

        <div className="titles-container block">
          <div className="flex items-center">
            <p className="text-base ml-4">{name}</p>
            {isAdmin && (
              <Crown className="w-4 h-4 fill-[#4338CA] dark:fill-[#DBC927]" />
            )}
          </div>
          <p className="text-[12px] text-slate-500 dark:text-slate-300">
            {shortDescription}
          </p>
        </div>
      </div>
      <p className="w-full md:w-[291px] h-[51px] text-sm mt-2 mb-1 leading-4">
        {longDescription}
      </p>
      <p className="w-full md:w-[291px] h-[15px] text-[12px] mt-2 text-slate-500 dark:text-slate-300">
        {joinDate}
      </p>
    </div>
  );
};
