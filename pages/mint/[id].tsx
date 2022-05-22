import instance from "../../utils/axios";
import { useAddress, useMetamask, useNFTCollection } from "@thirdweb-dev/react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";

interface Props {
  message: string;
  data: {
    name: string;
    image: string;
    description: string;
    signature: string;
  };
}

const MintNFT: NextPage<Props> = ({ data }) => {
  console.log(data);
  const [loading, setLoading] = useState<boolean>(false);
  const address = useAddress();
  const authenticateMetamask = useMetamask();
  const collection = useNFTCollection(
    process.env.NEXT_PUBLIC_NFT_COLLECTION_ADDRESS
  );

  const mint = async () => {
    try {
      setLoading(true);
      const claim = await collection?.signature.mint(
        JSON.parse(data.signature)
      );
      console.log(claim);
      alert("Claim success!");
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-bl  from-[#271277] to-[#09052D] text-gray-50">
      {address ? (
        <div className="flex flex-col items-center gap-1">
          <div className="relative h-60 w-[80rem]">
            <Image
              objectFit="contain"
              layout="fill"
              src={data.image}
              alt={data.name}
            />
          </div>
          <h1 className="mt-1 text-center text-4xl">{data.name}</h1>
          <p className="mt-3 text-center">{data.description}</p>
          <button
            disabled={loading}
            onClick={mint}
            className={`md mt-2 rounded ${
              loading ? "bg-blue-600" : "bg-blue-500"
            } px-5 py-3 text-lg text-white transition-all hover:bg-blue-600`}
          >
            {loading ? "Loading..." : "Mint Now"}
          </button>
        </div>
      ) : (
        <button
          onClick={authenticateMetamask}
          className="md rounded bg-blue-500 px-5 py-3 text-lg text-white transition-all hover:bg-blue-600"
        >
          Authenticate Metamask
        </button>
      )}
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
