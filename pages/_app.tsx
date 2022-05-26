import '../styles/globals.css';
import '@fontsource/montserrat';
import '@fontsource/red-hat-display';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import { NextSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThirdwebProvider
            desiredChainId={ChainId.Mumbai}
            supportedChains={[ChainId.Mumbai, ChainId.Mainnet]}
        >
            <NextNProgress />

            <NextSeo
                canonical="https://clydomint.xyz/"
                defaultTitle="ClydoMint"
                description={
                    'ClydoMint is a discord bot that allows you to mint NFTs via discord commands.'
                }
                openGraph={{
                    url: 'https://clydomint.xyz/',
                    title: 'ClydoMint',
                    description:
                        'ClydoMint is a discord bot that allows you to mint NFTs via discord commands.',
                    images: [
                        {
                            url: '/assets/og.png',
                            height: 630,
                            width: 1200,
                            alt: 'Og Image',
                            type: 'image/png',
                        },
                    ],
                }}
                title="ClydoMint"
                titleTemplate="ClydoMint"
                twitter={{
                    handle: '@buidlershub',
                    site: '@buidlershub',
                    cardType: 'summary_large_image',
                }}
            />
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicon.png" />
            </Head>
            <Component {...pageProps} />
        </ThirdwebProvider>
    );
}

export default MyApp;
