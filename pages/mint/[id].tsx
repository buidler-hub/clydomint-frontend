import ConnectWallet from "../../components/ConnectWallet";
import Header from "../../components/Header";
import NftCard from "../../components/NftCard";
import instance from "../../utils/axios";
import { useAddress } from "@thirdweb-dev/react";
import { GetServerSideProps } from "next";
import type { NextPage } from "next";
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
}

const MintNFT: NextPage<Props> = ({ data }) => {
  const address = useAddress();

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-bl  from-[#271277] to-[#09052D] text-gray-50">
      <Header />
      <Toaster />
      {address ? <NftCard data={data} /> : <ConnectWallet />}
    </div>
  );
};

export default MintNFT;

export const getServerSideProps: GetServerSideProps = async ctx => {
  try {
    const request = await instance.get(`/mintdetails/${ctx.params?.id}`);
    const data = request.data;
    return { props: data };
  } catch (err) {
    console.error(err);
    return { notFound: true };
  }
};
