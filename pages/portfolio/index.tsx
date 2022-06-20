/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import commonStyles from "../../styles/Common.module.css";
import { PortfolioElement } from "../../components/Portfolio/PortfolioElement";
import { FloatingBackButton } from "../../components/Common/FloatingBackButton";
import "animate.css";

const Home: NextPage = () => {
  const containerClasses = [commonStyles.main, "animate__bounceIn"].join(" ");

  return (
    <div>
      <Head>
        <title>Alberto Ruiz: Portfolio</title>
      </Head>

      <FloatingBackButton cta="Home" to="/" />

      <main className={containerClasses}>
        <h1 className={commonStyles.title}>Projects I've been part of</h1>

        <div className={commonStyles.wrapContainer}>
          <PortfolioElement
            size="large"
            path="/portfolio/codeoscopic"
            imgSource="/companies/codeoscopic.svg"
            imgAlt="codeoscopic"
          />

          <PortfolioElement
            size="large"
            path="/portfolio/wondo"
            imgSource="/companies/wondo.svg"
            imgAlt="wondo"
          />

          <PortfolioElement
            path="/portfolio/bbva"
            imgSource="/companies/bbva.png"
            imgAlt="bbva"
          />

          <PortfolioElement
            path="/portfolio/dag"
            imgSource="/companies/dag.png"
            imgAlt="dag"
          />

          <PortfolioElement
            path="/portfolio/classing"
            imgSource="/companies/classing.png"
            imgAlt="classing"
          />

          <PortfolioElement
            path="/portfolio/trive"
            imgSource="/companies/trive.png"
            imgAlt="trive"
          />

          <PortfolioElement
            path="/portfolio/libeen"
            imgSource="/companies/libeen.png"
            imgAlt="libeen"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
