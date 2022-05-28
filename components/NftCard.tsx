import { useNFTCollection } from '@thirdweb-dev/react';
import { useNetwork } from '@thirdweb-dev/react';
import { ChainId } from '@thirdweb-dev/sdk';
import Image from 'next/image';
import { FC, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

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

    const isCorrectNetwork = () => {
        if (
            data.network === 'polygon' &&
            currentNetwork?.id !== ChainId.Polygon
        ) {
            return false;
        } else if (
            data.network === 'mumbai' &&
            currentNetwork?.id !== ChainId.Mumbai
        ) {
            return false;
        }
        return true;
    };

    const network = useNetwork();
    const currentNetwork = network[0].data.chain;

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
            <Toaster />
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
            </p>

            <button
                disabled={loading || !isCorrectNetwork()}
                onClick={mint}
                className="mt-10 font-montserrat text-lg px-6 py-2 bg-black text-white font-medium rounded-sm hover:scale-95 transition-all duration-100"
            >
                {loading
                    ? 'Loading...'
                    : isCorrectNetwork()
                    ? 'Mint Now'
                    : `Please switch to ${data.network}`}
            </button>
        </div>
    );
};

export default NftCard;
