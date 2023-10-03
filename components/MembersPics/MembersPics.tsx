import Image from 'next/image';
import Link from 'next/link';
const MembersPics = () => {
  return (
    <div className="darkmode-section pb-60 flex flex-col gap-y-8 overflow-hidden">
      <div className="grid grid-rows-1 gap-4 -mr-80 sm:-mr-52 md:-mr-32 lg:-mr-0 grid-cols-[repeat(24,65px)] md:grid-cols-[repeat(24,100px)]">
        <div className="col-span-2 ml-4 placeholder-size rounded-e-[50px]  overflow-hidden"></div>
        <div className="placeholder-circle border-green-300 border rounded-full">
          <Image
            loading="lazy"
            src="/images/avatars/avatar3.jpg"
            alt="avatar"
            className="max-w-full max-h-full rounded-full"
            width="100"
            height="100"
          />
        </div>
        <div className="placeholder-circle border-blue-600 border">
          <Image
            loading="lazy"
            src="/images/avatars/avatar.jpg"
            alt="avatar"
            className="max-w-full max-h-full rounded-full"
            width="100"
            height="100"
          />
        </div>
        <div className="col-span-2 placeholder-circle"></div>
        <div className="placeholder-circle"></div>
        <div className="placeholder-circle border-purple-500 border">
          <Image
            loading="lazy"
            src="/images/avatars/avatar2.jpg"
            alt="avatar"
            className="max-w-full max-h-full rounded-full"
            width="100"
            height="100"
          />
        </div>
        <div className="placeholder-circle border-blue-600 border">
          <Image
            loading="lazy"
            src="/images/avatars/avatar.jpg"
            alt="avatar"
            className="max-w-full max-h-full rounded-full"
            width="100"
            height="100"
          />
        </div>
        <div className="placeholder-circle border-blue-600 border">
          <Image
            loading="lazy"
            src="/images/avatars/avatar4.jpg"
            alt="avatar"
            className="max-w-full max-h-full rounded-full"
            width="100"
            height="100"
          />
        </div>
        <div className="col-span-2 placeholder-circle"></div>
        <div className="placeholder-circle border-blue-600 border">
          <Image
            loading="lazy"
            src="/images/avatars/avatar.jpg"
            alt="avatar"
            className="max-w-full max-h-full rounded-full"
            width="100"
            height="100"
          />
        </div>
        <div className="placeholder-circle"></div>
        <div className="placeholder-circle border-green-300 border rounded-full">
          <Image
            loading="lazy"
            src="/images/avatars/avatar5.jpg"
            alt="avatar"
            className="max-w-full max-h-full rounded-full"
            width="100"
            height="100"
          />
        </div>
        <div className="placeholder-circle border-blue-600 border">
          <Image
            loading="lazy"
            src="/images/avatars/avatar.jpg"
            alt="avatar"
            className="max-w-full max-h-full rounded-full"
            width="100"
            height="100"
          />
        </div>
        <div className="col-span-2  rounded-s-[50px] placeholder-size overflow-hidden"></div>
      </div>

      <div className="grid grid-rows-1 gap-4 sm:-mr-72 md:-mr-48 lg:-mr-8 grid-cols-[repeat(24,65px)] md:grid-cols-[repeat(24,100px)]">
        <div className="col-span-2 sm:col-span-3 ml-4 placeholder-size rounded-e-[50px]  overflow-hidden"></div>
        <div className="placeholder-circle border-blue-600 border">
          <Image
            loading="lazy"
            src="/images/avatars/avatar.jpg"
            alt="avatar"
            className="max-w-full max-h-full rounded-full"
            width="100"
            height="100"
          />
        </div>
        <div className="placeholder-circle border-green-300 border rounded-full">
          <Image
            loading="lazy"
            src="/images/avatars/avatar5.jpg"
            alt="avatar"
            className="max-w-full max-h-full rounded-full"
            width="100"
            height="100"
          />
        </div>
        <div className="placeholder-circle"></div>
        <div className="hidden md:block placeholder-circle border-purple-500 border">
          <Image
            loading="lazy"
            src="/images/avatars/avatar2.jpg"
            alt="avatar"
            className="max-w-full max-h-full rounded-full"
            width="100"
            height="100"
          />
        </div>
        <div className="hidden md:block placeholder-circle border-blue-600 border">
          <Image
            loading="lazy"
            src="/images/avatars/avatar.jpg"
            alt="avatar"
            className="max-w-full max-h-full rounded-full"
            width="100"
            height="100"
          />
        </div>
        <div className="col-span-2 placeholder-circle"></div>
        <div className="placeholder-circle border-blue-600 border">
          <Image
            loading="lazy"
            src="/images/avatars/avatar.jpg"
            alt="avatar"
            className="max-w-full max-h-full rounded-full"
            width="100"
            height="100"
          />
        </div>
        <div className="placeholder-circle border-green-300 border rounded-full">
          <Image
            loading="lazy"
            src="/images/avatars/avatar3.jpg"
            alt="avatar"
            className="max-w-full max-h-full rounded-full"
            width="100"
            height="100"
          />
        </div>
        <div className="placeholder-circle"></div>
        <div className="placeholder-circle border-purple-500 border">
          <Image
            loading="lazy"
            src="/images/avatars/avatar2.jpg"
            alt="avatar"
            className="max-w-full max-h-full rounded-full"
            width="100"
            height="100"
          />
        </div>
        <div className="placeholder-circle"></div>
        <div className="col-span-2 bg-gray-700 rounded-s-[50px] h-[65px] md:h-[100px] overflow-hidden"></div>
      </div>

      <div className="grid grid-rows-1 gap-4 md:-mr-44 lg:-mr-36 grid-cols-[repeat(24,65px)] md:grid-cols-[repeat(24,100px)]">
        <div className="hidden md:block sm:col-span-2 md:col-span-2 lg:col-span-3 ml-4 placeholder-size rounded-e-[50px]  overflow-hidden"></div>
        <div className="col-span-6 md:col-span-6 items-center flex">
          <p className="text-3xl md:text-[60px] font-bold pr-5">
            הכירו את חברי{' '}
            <Link className="text-purple-500 hover:underline" href="/members">
              הקהילה
            </Link>
          </p>
        </div>
        <div className="placeholder-circle border-green-300 border rounded-full">
          <Image
            loading="lazy"
            src="/images/avatars/avatar5.jpg"
            alt="avatar"
            className="max-w-full max-h-full rounded-full"
            width="100"
            height="100"
          />
        </div>
        <div className="placeholder-circle border-blue-600 border">
          <Image
            loading="lazy"
            src="/images/avatars/avatar.jpg"
            alt="avatar"
            className="max-w-full max-h-full rounded-full"
            width="100"
            height="100"
          />
        </div>
        <div className="placeholder-circle border-green-300 border rounded-full">
          <Image
            loading="lazy"
            src="/images/avatars/avatar3.jpg"
            alt="avatar"
            className="max-w-full max-h-full rounded-full"
            width="100"
            height="100"
          />
        </div>
        <div className="col-span-3 placeholder-circle"></div>
        <div className="placeholder-circle border-blue-600 border">
          <Image
            loading="lazy"
            src="/images/avatars/avatar.jpg"
            alt="avatar"
            className="max-w-full max-h-full rounded-full"
            width="100"
            height="100"
          />
        </div>
        <div className="placeholder-circle border-blue-600 border">
          <Image
            loading="lazy"
            src="/images/avatars/avatar4.jpg"
            alt="avatar"
            className="max-w-full max-h-full rounded-full"
            width="100"
            height="100"
          />
        </div>
        <div className="placeholder-circle"></div>
        <div className="placeholder-circle"></div>
        <div className="col-span-2 bg-gray-700 rounded-s-[50px] h-[65px] md:h-[100px] overflow-hidden"></div>
      </div>

      <div className="grid grid-rows-1 gap-4 -mr-8 sm:-mr-52 md:-mr-48 lg:-mr-12 grid-cols-[repeat(24,65px)] md:grid-cols-[repeat(24,100px)]">
        <div className="placeholder-circle border-purple-500 border">
          <Image
            loading="lazy"
            src="/images/avatars/avatar2.jpg"
            alt="avatar"
            className="max-w-full max-h-full rounded-full"
            width="100"
            height="100"
          />
        </div>
        <div className="placeholder-circle border-blue-600 border">
          <Image
            loading="lazy"
            src="/images/avatars/avatar.jpg"
            alt="avatar"
            className="max-w-full max-h-full rounded-full"
            width="100"
            height="100"
          />
        </div>
        <div className="placeholder-circle"></div>
        <div className="placeholder-circle"></div>
        <div className="placeholder-circle border-blue-600 border">
          <Image
            loading="lazy"
            src="/images/avatars/avatar.jpg"
            alt="avatar"
            className="max-w-full max-h-full rounded-full"
            width="100"
            height="100"
          />
        </div>
        <div className="placeholder-circle border-green-300 border rounded-full">
          <Image
            loading="lazy"
            src="/images/avatars/avatar3.jpg"
            alt="avatar"
            className="max-w-full max-h-full rounded-full"
            width="100"
            height="100"
          />
        </div>
        <div className="placeholder-circle border-green-300 border rounded-full">
          <Image
            loading="lazy"
            src="/images/avatars/avatar5.jpg"
            alt="avatar"
            className="max-w-full max-h-full rounded-full"
            width="100"
            height="100"
          />
        </div>
        <div className="col-span-3 placeholder-circle"></div>
        <div className="placeholder-circle border-blue-600 border">
          <Image
            loading="lazy"
            src="/images/avatars/avatar.jpg"
            alt="avatar"
            className="max-w-full max-h-full rounded-full"
            width="100"
            height="100"
          />
        </div>
        <div className="placeholder-circle border-purple-500 border">
          <Image
            loading="lazy"
            src="/images/avatars/avatar2.jpg"
            alt="avatar"
            className="max-w-full max-h-full rounded-full"
            width="100"
            height="100"
          />
        </div>
        <div className="placeholder-circle"></div>
        <div className="placeholder-circle"></div>
        <div className="placeholder-circle border-green-300 border rounded-full">
          <Image
            loading="lazy"
            src="/images/avatars/avatar3.jpg"
            alt="avatar"
            className="max-w-full max-h-full rounded-full"
            width="100"
            height="100"
          />
        </div>
        <div className="col-span-3 rounded-s-[50px] placeholder-size overflow-hidden"></div>
      </div>

      <div className="grid grid-rows-1 gap-4 sm:-mr-72 md:-mr-48 lg:-mr-8 grid-cols-[repeat(24,65px)] md:grid-cols-[repeat(24,100px)]">
        <div className="placeholder-circle"></div>
        <div className="placeholder-circle border-green-300 border rounded-full">
          <Image
            loading="lazy"
            src="/images/avatars/avatar5.jpg"
            alt="avatar"
            className="max-w-full max-h-full rounded-full"
            width="100"
            height="100"
          />
        </div>
        <div className="sm:col-span-3 placeholder-circle"></div>
        <div className="placeholder-circle border-blue-600 border">
          <Image
            loading="lazy"
            src="/images/avatars/avatar4.jpg"
            alt="avatar"
            className="max-w-full max-h-full rounded-full"
            width="100"
            height="100"
          />
        </div>
        <div className="hidden sm:block placeholder-circle border-green-300 border">
          <Image
            loading="lazy"
            src="/images/avatars/avatar3.jpg"
            alt="avatar"
            className="max-w-full max-h-full rounded-full"
            width="100"
            height="100"
          />
        </div>
        <div className="placeholder-circle"></div>
        <div className="placeholder-circle"></div>
        <div className="hidden md:block placeholder-circle border-purple-500 border">
          <Image
            loading="lazy"
            src="/images/avatars/avatar2.jpg"
            alt="avatar"
            className="max-w-full max-h-full rounded-full"
            width="100"
            height="100"
          />
        </div>
        <div className="hidden md:block placeholder-circle border-blue-600 border">
          <Image
            loading="lazy"
            src="/images/avatars/avatar4.jpg"
            alt="avatar"
            className="max-w-full max-h-full rounded-full"
            width="100"
            height="100"
          />
        </div>
        <div className="placeholder-circle"></div>
        <div className="col-span-2 placeholder-circle"></div>
        <div className="placeholder-circle"></div>
        <div className="placeholder-circle border-blue-600 border">
          <Image
            loading="lazy"
            src="/images/avatars/avatar.jpg"
            alt="avatar"
            className="max-w-full max-h-full rounded-full"
            width="100"
            height="100"
          />
        </div>
        <div className="placeholder-circle border-blue-600 border">
          <Image
            loading="lazy"
            src="/images/avatars/avatar4.jpg"
            alt="avatar"
            className="max-w-full max-h-full rounded-full"
            width="100"
            height="100"
          />
        </div>
      </div>
    </div>
  );
};

export default MembersPics;
