import Image from 'next/image';
import Link from 'next/link';
const MembersPicsDynamic = () => {
  const memberElementMap: any = [];

  return (
    <div className="darkmode-section pb-60 flex flex-col gap-y-8 overflow-hidden">
      {memberElementMap.map((memberElement: any) => {
        return <></>;
      })}
    </div>
  );
};

type MemberPicProps = {
  borderColorClass: string;
  imageSrc: string;
};

const MemberPic = ({ borderColorClass, imageSrc }: MemberPicProps) => {
  return (
    <div className={`placeholder-circle ${borderColorClass}`}>
      <Image
        loading="lazy"
        src={`/images/avatars/${imageSrc}.jpg`}
        alt="avatar"
        className="max-w-full max-h-full rounded-full"
        width="100"
        height="100"
      />
    </div>
  );
};

const MembersPics = () => {
  const rowClassesPrefix = `grid grid-rows-1 gap-4 grid-cols-[repeat(24,65px)] md:grid-cols-[repeat(24,100px)]`;
  return (
    <div className="darkmode-section pb-60 flex flex-col gap-y-8 overflow-hidden">
      <div
        className={`${rowClassesPrefix} -mr-80 sm:-mr-52 md:-mr-32 lg:-mr-0`}
      >
        <div className="col-span-2 ml-4 placeholder-size rounded-e-[50px]  overflow-hidden"></div>
        <MemberPic borderColorClass="border-green-300" imageSrc="avatar3" />
        <MemberPic borderColorClass="border-blue-600" imageSrc="avatar" />
        <div className="col-span-2 placeholder-circle"></div>
        <div className="placeholder-circle"></div>
        <MemberPic borderColorClass="border-purple-500" imageSrc="avatar2" />
        <MemberPic borderColorClass="border-blue-600" imageSrc="avatar" />
        <MemberPic borderColorClass="border-blue-600" imageSrc="avatar4" />
        <div className="col-span-2 placeholder-circle"></div>
        <MemberPic borderColorClass="border-blue-600" imageSrc="avatar" />
        <div className="placeholder-circle"></div>
        <MemberPic borderColorClass="border-green-300" imageSrc="avatar5" />
        <MemberPic borderColorClass="border-blue-600" imageSrc="avatar" />
        <div className="col-span-2  rounded-s-[50px] placeholder-size overflow-hidden"></div>
      </div>

      <div className={`${rowClassesPrefix} sm:-mr-72 md:-mr-48 lg:-mr-8`}>
        <div className="col-span-2 sm:col-span-3 ml-4 placeholder-size rounded-e-[50px] overflow-hidden"></div>
        <MemberPic
          borderColorClass="border-blue-600 border"
          imageSrc="avatar"
        />
        <MemberPic
          borderColorClass="border-green-300 border rounded-full"
          imageSrc="avatar5"
        />
        <div className="placeholder-circle"></div>
        <div className="hidden md:block">
          <MemberPic
            borderColorClass="border-purple-500 border"
            imageSrc="avatar2"
          />
        </div>
        <div className="hidden md:block">
          <MemberPic
            borderColorClass="border-blue-600 border"
            imageSrc="avatar"
          />
        </div>
        <div className="col-span-2 placeholder-circle"></div>
        <MemberPic
          borderColorClass="border-blue-600 border"
          imageSrc="avatar"
        />
        <MemberPic
          borderColorClass="border-green-300 border rounded-full"
          imageSrc="avatar3"
        />
        <div className="placeholder-circle"></div>
        <MemberPic
          borderColorClass="border-purple-500 border"
          imageSrc="avatar2"
        />
        <div className="placeholder-circle"></div>
        <div className="col-span-2 bg-gray-700 rounded-s-[50px] h-[65px] md:h-[100px] overflow-hidden"></div>
      </div>

      <div className={`${rowClassesPrefix} md:-mr-44 lg:-mr-36`}>
        <div className="hidden md:block sm:col-span-2 md:col-span-2 lg:col-span-3 ml-4 placeholder-size rounded-e-[50px] overflow-hidden"></div>
        <div className="col-span-6 md:col-span-6 items-center flex">
          <p className="text-3xl md:text-[60px] font-bold pr-5">
            הכירו את חברי{' '}
            <Link className="text-purple-500 hover:underline" href="/members">
              הקהילה
            </Link>
          </p>
        </div>
        <MemberPic
          borderColorClass="border-green-300 border rounded-full"
          imageSrc="avatar5"
        />
        <MemberPic
          borderColorClass="border-blue-600 border"
          imageSrc="avatar"
        />
        <MemberPic
          borderColorClass="border-green-300 border rounded-full"
          imageSrc="avatar3"
        />
        <div className="col-span-3 placeholder-circle"></div>
        <MemberPic
          borderColorClass="border-blue-600 border"
          imageSrc="avatar"
        />
        <MemberPic
          borderColorClass="border-blue-600 border"
          imageSrc="avatar4"
        />
        <div className="placeholder-circle"></div>
        <div className="placeholder-circle"></div>
        <div className="col-span-2 bg-gray-700 rounded-s-[50px] h-[65px] md:h-[100px] overflow-hidden"></div>
      </div>

      <div
        className={`${rowClassesPrefix} -mr-8 sm:-mr-52 md:-mr-48 lg:-mr-12`}
      >
        <MemberPic
          borderColorClass="border-purple-500 border"
          imageSrc="avatar2"
        />
        <MemberPic
          borderColorClass="border-blue-600 border"
          imageSrc="avatar"
        />
        <div className="placeholder-circle"></div>
        <div className="placeholder-circle"></div>
        <MemberPic
          borderColorClass="border-blue-600 border"
          imageSrc="avatar"
        />
        <MemberPic
          borderColorClass="border-green-300 border rounded-full"
          imageSrc="avatar3"
        />
        <MemberPic
          borderColorClass="border-green-300 border rounded-full"
          imageSrc="avatar5"
        />
        <div className="col-span-3 placeholder-circle"></div>
        <MemberPic
          borderColorClass="border-blue-600 border"
          imageSrc="avatar"
        />
        <MemberPic
          borderColorClass="border-purple-500 border"
          imageSrc="avatar2"
        />
        <div className="placeholder-circle"></div>
        <div className="placeholder-circle"></div>
        <MemberPic
          borderColorClass="border-green-300 border rounded-full"
          imageSrc="avatar3"
        />
        <div className="col-span-3 rounded-s-[50px] placeholder-size overflow-hidden"></div>
      </div>

      <div className={`${rowClassesPrefix} sm:-mr-72 md:-mr-48 lg:-mr-8`}>
        <div className="placeholder-circle"></div>
        <MemberPic
          borderColorClass="border-green-300 border rounded-full"
          imageSrc="avatar5"
        />
        <div className="sm:col-span-3 placeholder-circle"></div>
        <MemberPic
          borderColorClass="border-blue-600 border"
          imageSrc="avatar4"
        />
        <div className="hidden sm:block">
          <MemberPic
            borderColorClass="border-green-300 border"
            imageSrc="avatar3"
          />
        </div>
        <div className="placeholder-circle"></div>
        <div className="placeholder-circle"></div>
        <div className="hidden md:block">
          <MemberPic
            borderColorClass="border-purple-500 border"
            imageSrc="avatar2"
          />
        </div>
        <div className="hidden md:block">
          <MemberPic
            borderColorClass="border-blue-600 border"
            imageSrc="avatar4"
          />
        </div>
        <div className="placeholder-circle"></div>
        <div className="col-span-2 placeholder-circle"></div>
        <div className="placeholder-circle"></div>
        <MemberPic
          borderColorClass="border-blue-600 border"
          imageSrc="avatar"
        />
        <MemberPic
          borderColorClass="border-blue-600 border"
          imageSrc="avatar4"
        />
      </div>
    </div>
  );
};

export default MembersPics;
