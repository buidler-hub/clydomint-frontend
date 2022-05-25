import Header from "../components/Header";
import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div
      className="min-h-screen min-w-full bg-cover overflow-hidden"
      style={{
        backgroundImage: "url(/assets/bg.svg)",
      }}
    >
      <Header />
      <div className="flex flex-row mt-12 ml-4">
        <Image
          src="/assets/blob.svg"
          height="250"
          width="250"
          className="absolute"
        />
        <div className="text-5xl font-redHat m-28 font-regular absolute z-50">
          Mint <span className="font-semibold">NFTs</span>
          <p className="font-semibold">right from Discord</p>
          <p className="text-lg text-gray-700 font-medium mt-4">
            Use our bot to quickly mint NFTs <br />
            right from discord.
          </p>
          <button className="mt-10 font-montserrat text-xl px-8 py-2 bg-black text-white font-semibold hover:mt-8 hover:ml-2 transition-all duration-100">
            INVITE BOT
          </button>
        </div>

        <div
          className="px-24 py-32 rounded-full rounded-b-none right-0 absolute mt-12 mr-96 bg-cover"
          style={{
            backgroundImage: "url(assets/nft.svg)",
          }}
        ></div>
      </div>

      <div className="absolute left-0 bottom-0 ml-8 mb-4">
        <Image src="/assets/arrowDown.svg" height="50" width="50" />
      </div>
    </div>
  );
};

export default Home;
