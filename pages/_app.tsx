import "../styles/globals.css";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { NextSeo } from "next-seo";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";

import "@fontsource/red-hat-display";
import "@fontsource/montserrat";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      desiredChainId={ChainId.Mumbai}
      supportedChains={[ChainId.Mumbai, ChainId.Mainnet]}
    >
      <NextNProgress />

      <NextSeo
        title="ClydoMint"
        titleTemplate="ClydoMint"
        defaultTitle="ClydoMint"
        description={
          "ClydoMint is a discord bot that allows you to mint NFTs via discord commands."
        }
        canonical=""
        openGraph={{
          url: "",
          title: "ClydoMint",
          description:
            "ClydoMint is a discord bot that allows you to mint NFTs via discord commands.",
          images: [],
        }}
        twitter={{
          handle: "@buidlershub",
          site: "@buidlershub",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
