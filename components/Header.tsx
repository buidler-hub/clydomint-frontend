import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="font-redHat h-20 px-8 py-6 w-full flex flex-row justify-between fixed top-0 z-50">
      <p className="text-2xl">
        CLYDO
        <span className="font-semibold">MINT</span>
      </p>

      <p className="flex flex-row items-center gap-x-4">
        <button className="text-lg text-white grid place-items-center px-8 py-2 rounded-full border-2 border-gray-50 hover:scale-90 transition-all duration-100">
          Invite Bot
        </button>

        <button className="h-12 w-12 rounded-full grid place-items-center bg-[#DAFD01]">
          <Image src="/assets/arrow.svg" height="22" width="22" />
        </button>
      </p>
    </div>
  );
};

export default Header;
