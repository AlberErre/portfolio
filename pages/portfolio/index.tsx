/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import commonStyles from "../../styles/Common.module.css";
import { Grid } from "@nextui-org/react";
import { PortfolioElement } from "../../components/Portfolio/PortfolioElement";
import { FloatingBackButton } from "../../components/Common/FloatingBackButton";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Alberto Ruiz: Portfolio</title>
      </Head>

      <FloatingBackButton cta="Home" to="/" />

      <main className={commonStyles.main}>
        <h1 className={commonStyles.title}>Projects I've been part of</h1>

        <Grid.Container
          gap={3}
          justify="center"
          css={{ marginTop: "16px", maxWidth: "1024px" }}
        >
          <Grid>
            <PortfolioElement
              size="large"
              path="/portfolio/codeoscopic"
              imgSource="/companies/codeoscopic.svg"
              imgAlt="codeoscopic"
            />
          </Grid>
          <Grid>
            <PortfolioElement
              size="large"
              path="/portfolio/wondo"
              imgSource="/companies/wondo.svg"
              imgAlt="wondo"
            />
          </Grid>
          <Grid>
            <PortfolioElement
              path="/portfolio/bbva"
              imgSource="/companies/bbva.png"
              imgAlt="bbva"
            />
          </Grid>
          <Grid>
            <PortfolioElement
              path="/portfolio/dag"
              imgSource="/companies/dag.png"
              imgAlt="dag"
            />
          </Grid>
          <Grid>
            <PortfolioElement
              path="/portfolio/classing"
              imgSource="/companies/classing.png"
              imgAlt="classing"
            />
          </Grid>
          <Grid>
            <PortfolioElement
              path="/portfolio/trive"
              imgSource="/companies/trive.png"
              imgAlt="trive"
            />
          </Grid>
          <Grid>
            <PortfolioElement
              path="/portfolio/libeen"
              imgSource="/companies/libeen.png"
              imgAlt="libeen"
            />
          </Grid>
        </Grid.Container>
      </main>
    </div>
  );
};

export default Home;
