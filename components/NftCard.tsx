import { useNFTCollection } from '@thirdweb-dev/react';
import Image from 'next/image';
import { FC, useState } from 'react';
import toast from 'react-hot-toast';
import { useNetwork } from "@thirdweb-dev/react"

interface INftCardProps {
    data: {
        name: string;
        image: string;
        description: string;
        signature: string;
        network: string;
    };
}

const NftCard: FC<INftCardProps> = ({ data }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const collection = useNFTCollection(
        process.env.NEXT_PUBLIC_NFT_COLLECTION_ADDRESS,
    );


const {
    activeChain,
    chains,
    error,
    isLoading,
    pendingChainId,
    switchNetwork,
  } = useNetwork();

  console.log(activeChain?.name)

    const mint = async () => {
        try {
            setLoading(true);
            await collection?.signature.mint(JSON.parse(data.signature));
            toast.success('Claim success!');
            setLoading(false);
        } catch (err) {
            toast.error('Claim failed!');
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center gap-1 font-redHat">
            <div className="relative h-20 w-full justify-center">
                <Image
                    objectFit="contain"
                    layout="fill"
                    src={data.image}
                    alt={data.name}
                />
            </div>
            <h1 className="mt-1 text-center text-4xl">{data.name}</h1>
            <p className="mt-3 text-center">{data.description}</p>
            <p className="mt-3 text-center">
                This NFT is meant to be minted on{' '}
                {data.network === 'mumbai'
                    ? 'Polygon Mumbai'
                    : 'Polygon Mainnet'}
                . Make sure you&apos;re connected to the correct network
            </p>

            <p className="mt-3 text-center">
                You&apos;re connected to {activeChain?.name}
            </p>
            <button
                disabled={loading}
                onClick={mint}
                className="mt-10 font-montserrat text-lg px-6 py-2 bg-black text-white font-medium rounded-sm hover:scale-95 transition-all duration-100"
            >
                {loading ? 'Loading...' : 'Mint Now'}
            </button>
        </div>
    );
};

export default NftCard;
