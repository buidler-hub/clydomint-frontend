import '../styles/globals.css';
import '@fontsource/montserrat';
import '@fontsource/red-hat-display';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import { NextSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThirdwebProvider
            desiredChainId={ChainId.Mumbai}
            supportedChains={[ChainId.Mumbai, ChainId.Mainnet]}
        >
            <NextNProgress />

            <NextSeo
                canonical=""
                defaultTitle="ClydoMint"
                description={
                    'ClydoMint is a discord bot that allows you to mint NFTs via discord commands.'
                }
                openGraph={{
                    url: '',
                    title: 'ClydoMint',
                    description:
                        'ClydoMint is a discord bot that allows you to mint NFTs via discord commands.',
                    images: [],
                }}
                title="ClydoMint"
                titleTemplate="ClydoMint"
                twitter={{
                    handle: '@buidlershub',
                    site: '@buidlershub',
                    cardType: 'summary_large_image',
                }}
            />
            <Component {...pageProps} />
        </ThirdwebProvider>
    );
}

export default MyApp;
