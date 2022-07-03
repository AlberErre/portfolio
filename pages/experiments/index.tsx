/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import commonStyles from "../../styles/Common.module.css";
import { FloatingBackButton } from "../../components/Common/FloatingBackButton";
import { ExperimentElement } from "../../components/Experiments/ExperimentElement";
import "animate.css";

const Home: NextPage = () => {
  const containerClasses = [commonStyles.main, "animate__fadeIn"].join(" ");

  return (
    <div>
      <Head>
        <title>Alberto Ruiz: experiments</title>
      </Head>

      <FloatingBackButton cta="Home" to="/" />

      <main className={containerClasses}>
        <h1 className={commonStyles.title}>
          Experiments and side-projects I've created
        </h1>

        <div className={commonStyles.wrapContainer}>
          <ExperimentElement
            href="https://nft-nickname.vercel.app/"
            imgSource="/experiments/nft-nickname.png"
            imgAlt="Nft Nickname"
            cta="NFT Nickname"
            description="Web3 Solana app - add nicknames to your Solana NFTs"
          />
          <ExperimentElement
            href="https://62c1bbca9b23fa279ae00d21--melodic-yeot-a23224.netlify.app/"
            imgSource="/experiments/ether-marriage.png"
            imgAlt="Ether Marriage"
            cta="Ether Marriage"
            description="Web3 Ethereum app - Register your love on Ethereum"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
