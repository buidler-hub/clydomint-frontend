import ConnectWallet from '../../components/ConnectWallet';
import Header from '../../components/Header';
import NftCard from '../../components/NftCard';
import instance from '../../utils/axios';
import { useAddress } from '@thirdweb-dev/react';
import type { GetServerSideProps, NextPage } from 'next';

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
        <div
            className="min-h-screen w-full overflow-x-hidden bg-cover flex flex-col gap-y-8 justify-center items-center"
            style={{
                backgroundImage: 'url(/assets/bg.svg)',
            }}
        >
            <Header />

            {address ? (
                <div className="w-[60vw] md:self-start self-center">
                    <NftCard data={data} />
                </div>
            ) : (
                <div className="w-full flex justify-center">
                    <ConnectWallet />
                </div>
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
        return { notFound: true };
    }
};
