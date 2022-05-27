import Header from '../components/Header';
import { Blob } from '../components/Icons';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const Home: NextPage = () => {
    return (
        <div
            className="min-h-screen min-w-full bg-cover overflow-hidden"
            style={{
                backgroundImage: 'url(/assets/bg.svg)',
            }}
        >
            <Header />
            <div className="flex flex-row mt-24 ml-4">
                <Blob className="absolute" />

                <div className="text-5xl font-redHat md:m-28 font-regular m-5 items-center md:items-start justify-center flex flex-col absolute z-50">
                    <p>
                        Mint <span className="font-semibold">NFTs</span>
                    </p>
                    <p
                        style={{
                            lineHeight: '1.1',
                        }}
                        className="font-semibold text-center"
                    >
                        right from Discord
                    </p>
                    <p className="text-lg text-gray-700 font-medium mt-4 text-center md:text-left">
                        Use our bot to quickly mint NFTs <br />
                        right from discord.
                    </p>
                    <Link
                        href="https://discord.com/api/oauth2/authorize?client_id=977579405163520082&permissions=8&scope=bot"
                        passHref
                    >
                        <a
                            className="mt-10 font-montserrat text-xl px-8 py-2 bg-black text-white font-semibold hover:mt-8 hover:ml-2 transition-all duration-100"
                            target="_blank"
                            rel="noopener"
                        >
                            INVITE BOT
                        </a>
                    </Link>
                </div>
            </div>

            <div className="absolute bottom-0 flex justify-center w-full">
                <a
                    href="https://vercel.com?utm_source=buidlers-hub&utm_campaign=oss"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/assets/powered-by-vercel.svg"
                        height="50"
                        width="250"
                        alt=""
                        objectFit="contain"
                    />
                </a>
            </div>
        </div>
    );
};

export default Home;
