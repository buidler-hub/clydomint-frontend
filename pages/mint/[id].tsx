import ConnectWallet from "../../components/ConnectWallet";
import Header from "../../components/Header";
import NftCard from "../../components/NftCard";
import instance from "../../utils/axios";
import { useAddress } from "@thirdweb-dev/react";
import { GetServerSideProps } from "next";
import type { NextPage } from "next";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

interface Props {
  message: string;
  data: {
    name: string;
    image: string;
    description: string;
    signature: string;
    network: string;
  };
  notFound?: boolean;
}

const MintNFT: NextPage<Props> = ({ data, notFound }) => {
  const address = useAddress();

  return (
    <div
      className="min-h-screen w-full overflow-x-hidden bg-cover flex flex-col gap-y-8 justify-center items-center"
      style={{
        backgroundImage: "url(/assets/bg.svg)",
      }}
    >
      <Header />

      <Image src="/assets/nft.svg" height="300" width="250" />

      {address ? (
        <button className="mt-10 font-montserrat text-lg px-6 py-2 bg-black text-white font-medium rounded-sm hover:scale-95 transition-all duration-100">
          MINT
        </button>
      ) : (
        <button className="mt-10 font-montserrat text-lg px-6 py-2 bg-black text-white font-medium rounded-sm hover:scale-95 transition-all duration-100">
          CONNECT WALLET
        </button>
      )}
    </div>
  );
};

export default MintNFT;

// export const getServerSideProps: GetServerSideProps = async ctx => {
//   try {
//     const request = await instance.get(`/mintdetails/${ctx.params?.id}`);
//     const data = request.data;
//     return { props: data };
//   } catch (err) {
//     console.error(err);
//     return { notFound: true };
//   }
// };
